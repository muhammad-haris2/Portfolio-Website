export interface ContactFormData { name: string; email: string; message: string }
export interface ContactFormErrors { name?: string; email?: string; message?: string }

export interface Web3FormsResult { success?: boolean }

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!data.name.trim()) errors.name = "Please enter your name.";
  else if (data.name.trim().length < 2) errors.name = "Name must be at least 2 characters.";
  if (!data.email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email = "Please enter a valid email address.";
  if (!data.message.trim()) errors.message = "Please enter a message.";
  else if (data.message.trim().length < 10) errors.message = "Message must be at least 10 characters.";
  return errors;
}

export function createWeb3FormsPayload(accessKey: string, data: ContactFormData) {
  const name = data.name.trim();
  return {
    access_key: accessKey,
    name,
    email: data.email.trim(),
    message: data.message.trim(),
    subject: `Portfolio contact from ${name}`,
    botcheck: "",
  };
}

export function isConfirmedWeb3FormsResponse(ok: boolean, result: Web3FormsResult | null): boolean {
  return ok && result?.success === true;
}

export function createMailtoUrl(recipient: string, data: ContactFormData): string {
  const name = data.name.trim();
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${data.email.trim()}\n\n${data.message.trim()}`);
  return `mailto:${recipient}?subject=${subject}&body=${body}`;
}
