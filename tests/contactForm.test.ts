import assert from "node:assert/strict";
import test from "node:test";
import { createMailtoUrl, createWeb3FormsPayload, isConfirmedWeb3FormsResponse, validateContactForm } from "../src/lib/contactForm.ts";

test("validates empty and malformed contact data", () => {
  assert.deepEqual(validateContactForm({ name: "", email: "bad", message: "short" }), {
    name: "Please enter your name.",
    email: "Please enter a valid email address.",
    message: "Message must be at least 10 characters.",
  });
});

test("accepts valid contact data", () => {
  assert.deepEqual(validateContactForm({ name: "Ada", email: "ada@example.com", message: "A useful project enquiry." }), {});
});

test("creates the expected Web3Forms payload without changing field names", () => {
  assert.deepEqual(createWeb3FormsPayload("test-key", { name: " Ada ", email: " ada@example.com ", message: " Hello there. " }), {
    access_key: "test-key",
    name: "Ada",
    email: "ada@example.com",
    message: "Hello there.",
    subject: "Portfolio contact from Ada",
    botcheck: "",
  });
});

test("requires both HTTP success and provider confirmation", () => {
  assert.equal(isConfirmedWeb3FormsResponse(true, { success: true }), true);
  assert.equal(isConfirmedWeb3FormsResponse(false, { success: true }), false);
  assert.equal(isConfirmedWeb3FormsResponse(true, { success: false }), false);
  assert.equal(isConfirmedWeb3FormsResponse(true, null), false);
});

test("builds the missing-key mail fallback without claiming delivery", () => {
  const url = createMailtoUrl("owner@example.com", { name: " Ada ", email: "ada@example.com", message: "Hello from the portfolio." });
  assert.match(url, /^mailto:owner@example\.com\?/);
  assert.match(decodeURIComponent(url), /Portfolio contact from Ada/);
  assert.match(decodeURIComponent(url), /Email: ada@example\.com/);
});
