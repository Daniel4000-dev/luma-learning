export const contactLimits = { name: 120, email: 254, question: 3000 } as const;
export type ContactField = keyof typeof contactLimits;
export type ContactValues = Record<ContactField, string>;
export type ContactErrors = Partial<Record<ContactField, string>>;

/** Pure validation; a future server action must validate independently as well. */
export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const question = values.question.trim();
  if (!name) errors.name = "Please enter your name.";
  else if (name.length > contactLimits.name) errors.name = "Keep your name to 120 characters or fewer.";
  if (!email) errors.email = "Please enter your email address.";
  else if (email.length > contactLimits.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address, such as you@example.com.";
  if (!question) errors.question = "Please tell us how we can help.";
  else if (question.length > contactLimits.question) errors.question = "Keep your question to 3,000 characters or fewer.";
  return errors;
}
