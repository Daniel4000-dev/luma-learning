"use client";

import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { contactLimits, validateContact, type ContactErrors, type ContactField } from "@/lib/contact-validation";

export function ContactForm() {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [validated, setValidated] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const errors = validateContact({ name: String(data.get("name") ?? ""), email: String(data.get("email") ?? ""), question: String(data.get("question") ?? "") });
    setErrors(errors);
    setValidated(Object.keys(errors).length === 0);
    const firstInvalid = (Object.keys(errors) as ContactField[])[0];
    if (firstInvalid) {
      const input = formRef.current?.elements.namedItem(firstInvalid);
      if (input instanceof HTMLElement) input.focus();
    }
  }

  function clearFeedback() {
    if (validated) setValidated(false);
  }

  return (
    <form ref={formRef} onSubmit={submit} onInput={clearFeedback} noValidate className="contact-form" aria-labelledby="contact-form-heading">
      <h3 id="contact-form-heading" className="font-heading text-xl font-bold leading-8">Contact us</h3>
      <p className="mt-2 text-sm leading-6 text-subtle">Fill out the fields and we will get in touch.</p>
      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="contact-name" className="form-label">Full name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={contactLimits.name} placeholder="Your name"
            aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} className="form-input" />
          {errors.name && <p id="name-error" className="field-error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className="form-label">Email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" inputMode="email" required maxLength={contactLimits.email} placeholder="youremail@example.com"
            aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} className="form-input" />
          {errors.email && <p id="email-error" className="field-error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="contact-question" className="form-label">Your question</label>
          <textarea id="contact-question" name="question" required maxLength={contactLimits.question} placeholder="Tell us how we can help…"
            aria-invalid={Boolean(errors.question)} aria-describedby={errors.question ? "question-error" : undefined} className="form-input form-textarea" />
          {errors.question && <p id="question-error" className="field-error">{errors.question}</p>}
        </div>
      </div>
      <Button type="submit" className="mt-6 w-full">Send message</Button>
      <div role="status" aria-live="polite" aria-atomic="true">
        {validated && <p className="mt-4 rounded-lg bg-blue-soft p-3 text-sm leading-6 text-ink">Your details look good. This is a demo, so your message has not been sent or saved.</p>}
      </div>
    </form>
  );
}
