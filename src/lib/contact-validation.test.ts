import { test } from "node:test";
import assert from "node:assert/strict";
import { validateContact, contactLimits } from "./contact-validation.ts";

const valid = { name: "Ada O’Neill", email: "ada+learning@example.com", question: "I would like to learn product design." };

test("accepts a valid enquiry, including Unicode names and email aliases", () => {
  assert.deepEqual(validateContact(valid), {});
});
test("rejects missing and whitespace-only required fields", () => {
  const errors = validateContact({ name: "  ", email: "", question: "\n\t" });
  assert.deepEqual(Object.keys(errors), ["name", "email", "question"]);
});
test("rejects malformed email addresses without rejecting surrounding spaces", () => {
  for (const email of ["no-at-sign", "ada@", "@example.com", "ada @example.com", "ada@@example.com", "ada@example"]) {
    assert.ok(validateContact({ ...valid, email }).email, email);
  }
  assert.deepEqual(validateContact({ ...valid, email: "  ada@example.com  " }), {});
});
test("enforces input limits at the validation boundary", () => {
  assert.ok(validateContact({ ...valid, name: "a".repeat(contactLimits.name + 1) }).name);
  assert.ok(validateContact({ ...valid, email: `${"a".repeat(contactLimits.email)}@example.com` }).email);
  assert.ok(validateContact({ ...valid, question: "a".repeat(contactLimits.question + 1) }).question);
  assert.deepEqual(validateContact({ ...valid, name: "a".repeat(contactLimits.name), question: "a".repeat(contactLimits.question) }), {});
});
test("does not mutate the supplied enquiry", () => {
  const values = Object.freeze({ ...valid, name: " Ada " });
  validateContact(values);
  assert.equal(values.name, " Ada ");
});
