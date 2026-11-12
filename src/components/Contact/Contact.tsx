import { useRef, useState, type FormEvent } from "react";
import { AlertCircle, ArrowUpRight, CheckCircle2, LoaderCircle, Mail, Send } from "lucide-react";
import { personal } from "../../data/personal";
import { GitHubIcon, LinkedInIcon } from "../ui/SocialIcons";
import { createMailtoUrl, createWeb3FormsPayload, isConfirmedWeb3FormsResponse, validateContactForm, type ContactFormData, type ContactFormErrors, type Web3FormsResult } from "../../lib/contactForm";

export function Contact() {
  const [data, setData] = useState<ContactFormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "fallback" | "error">("idle");
  const requestInFlight = useRef(false);
  const key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const update = (field: keyof ContactFormData, value: string) => {
    setData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "sending") setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (requestInFlight.current) return;
    const nextErrors = validateContactForm(data);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus("idle");
      const first = Object.keys(nextErrors)[0];
      document.getElementById(first)?.focus();
      return;
    }

    requestInFlight.current = true;
    setStatus("sending");
    try {
      if (!key) {
        setStatus("fallback");
        window.location.href = createMailtoUrl(personal.email, data);
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(createWeb3FormsPayload(key, data)),
      });
      const result = await response.json().catch(() => null) as Web3FormsResult | null;
      if (!isConfirmedWeb3FormsResponse(response.ok, result)) throw new Error("Web3Forms did not confirm delivery");
      setStatus("sent");
      setData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      requestInFlight.current = false;
    }
  };

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="page-shell contact-grid">
        <div className="contact-copy">
          <p className="kicker">Contact / Opportunities</p>
          <h2 id="contact-heading">Let’s build something useful.</h2>
          <p>I’m interested in AI/ML internships, Python backend and software engineering roles, research collaborations, and thoughtful freelance work.</p>
          <a className="email-link" href={personal.links.email}>{personal.email} <ArrowUpRight aria-hidden="true" /></a>
          <div className="contact-socials">
            <a href={personal.links.github} target="_blank" rel="noopener noreferrer"><GitHubIcon /> GitHub</a>
            <a href={personal.links.linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon /> LinkedIn</a>
          </div>
          <div className="availability"><span aria-hidden="true" /> Open to relevant opportunities</div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="field-row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" autoComplete="name" value={data.name} onChange={(event) => update("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} placeholder="Your name" />
              {errors.name && <p id="name-error" className="field-error"><AlertCircle aria-hidden="true" />{errors.name}</p>}
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" value={data.email} onChange={(event) => update("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} placeholder="you@example.com" />
              {errors.email && <p id="email-error" className="field-error"><AlertCircle aria-hidden="true" />{errors.email}</p>}
            </div>
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={6} value={data.message} onChange={(event) => update("message", event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} placeholder="Tell me about the role, project, or idea." />
            {errors.message && <p id="message-error" className="field-error"><AlertCircle aria-hidden="true" />{errors.message}</p>}
          </div>
          <div className="form-footer">
            <button className="send-button" type="submit" disabled={status === "sending"}>
              {status === "sending" ? <><LoaderCircle className="spin" aria-hidden="true" /> Sending…</> : <>Send message <Send aria-hidden="true" /></>}
            </button>
            <p>Or email me directly if you prefer.</p>
          </div>
          <div className="form-status" aria-live="polite" aria-atomic="true">
            {status === "sent" && <p className="status-success"><CheckCircle2 aria-hidden="true" />Message confirmed by Web3Forms. I’ll reply as soon as I can.</p>}
            {status === "fallback" && <p className="status-info"><Mail aria-hidden="true" />Web3Forms is not configured here, so your email app is opening with the message prepared.</p>}
            {status === "error" && <p className="status-error"><AlertCircle aria-hidden="true" />The message was not confirmed. Please email <a href={personal.links.email}>{personal.email}</a> directly.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
