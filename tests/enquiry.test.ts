import assert from "node:assert/strict";
import test from "node:test";
import { enquirySchema, formatEnquiryMessage } from "../src/lib/enquiry.ts";

const enquiry = {
  name: "Test Visitor",
  email: "visitor@example.com",
  subject: "Office network upgrade",
  message: "Please help us plan cabling and guest WiFi.\nWe have two floors.",
};

test("existing enquiries remain valid without the optional project fields", () => {
  const parsed = enquirySchema.parse(enquiry);
  assert.equal(formatEnquiryMessage(parsed), enquiry.message);
});

test("project context reaches the existing email message field", () => {
  const parsed = enquirySchema.parse({
    ...enquiry,
    company: "Example Organization",
    location: "Shadnagar",
    service: "WiFi & Hotspot Networking",
  });
  const message = formatEnquiryMessage(parsed);
  for (const value of [parsed.company, parsed.location, parsed.service, parsed.message]) {
    assert.ok(message.includes(value!), `Missing project context: ${value}`);
  }
});

test("blank optional fields do not add empty metadata to an enquiry", () => {
  const parsed = enquirySchema.parse({ ...enquiry, company: "  ", location: "", service: "" });
  assert.equal(formatEnquiryMessage(parsed), enquiry.message);
});

test("invalid contact details and whitespace-only enquiries are rejected", () => {
  for (const invalid of [{ email: "invalid" }, { name: "  " }, { subject: "   " }, { message: "             " }]) {
    assert.equal(enquirySchema.safeParse({ ...enquiry, ...invalid }).success, false);
  }
});
