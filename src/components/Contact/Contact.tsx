import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../ui/SocialIcons";
import { personal } from "../../data/personal";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      setSubmitError("");
      return;
    }

    setErrors({});
    setSubmitError("");
    setSubmitting(true);

    try {
      if (web3FormsKey) {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `Portfolio contact from ${formData.name}`,
          }),
        });

        const result = await response.json();
        if (!result.success) {
          throw new Error("Failed to send message");
        }
      } else {
        const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
        );
        window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitError("Something went wrong. Please email me directly using the link on the left.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitted) setSubmitted(false);
    if (submitError) setSubmitError("");
  };

  return (
    <section id="contact" className="py-24" aria-labelledby="contact-heading">
      <div className="section-container">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Intelligent"
          description="Interested in AI, automation, or building intelligent applications? Let's connect."
          align="center"
        />

        <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="space-y-4">
              <a
                href={personal.links.email}
                className="glass flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-accent/30"
              >
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-text-muted">Email</p>
                  <p className="text-sm text-text-primary">{personal.email}</p>
                </div>
              </a>
              <a
                href={personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-accent/30"
              >
                <LinkedInIcon className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-text-muted">LinkedIn</p>
                  <p className="text-sm text-text-primary">Connect on LinkedIn</p>
                </div>
              </a>
              <a
                href={personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-accent/30"
              >
                <GitHubIcon className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-text-muted">GitHub</p>
                  <p className="text-sm text-text-primary">View my repositories</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass space-y-4 rounded-2xl p-6 lg:col-span-3"
            noValidate
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text-primary">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={cn(
                  "w-full rounded-lg border bg-white/[0.03] px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none",
                  errors.name ? "border-red-500/50" : "border-border",
                )}
                placeholder="Your name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 flex items-center gap-1 text-xs text-red-400">
                  <AlertCircle className="h-3 w-3" /> {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-primary">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={cn(
                  "w-full rounded-lg border bg-white/[0.03] px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none",
                  errors.email ? "border-red-500/50" : "border-border",
                )}
                placeholder="your@email.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 flex items-center gap-1 text-xs text-red-400">
                  <AlertCircle className="h-3 w-3" /> {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-primary">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className={cn(
                  "w-full resize-none rounded-lg border bg-white/[0.03] px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none",
                  errors.message ? "border-red-500/50" : "border-border",
                )}
                placeholder="Tell me about your project or idea..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 flex items-center gap-1 text-xs text-red-400">
                  <AlertCircle className="h-3 w-3" /> {errors.message}
                </p>
              )}
            </div>

            {submitted && (
              <div className="flex items-center gap-2 rounded-lg bg-green-500/10 px-4 py-3 text-sm text-green-400">
                <CheckCircle className="h-4 w-4 shrink-0" />
                {web3FormsKey
                  ? "Message sent successfully! I'll get back to you soon."
                  : "Opening your email client to send the message."}
              </div>
            )}

            {submitError && (
              <div className="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {submitError}
              </div>
            )}

            <Button type="submit" className="w-full sm:w-auto" disabled={submitting}>
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
