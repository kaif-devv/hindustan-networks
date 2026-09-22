import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  location: z.string().optional(),
  service: z.string().optional(),
  subject: z.string().trim().min(3, "Subject is required"),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

export type Enquiry = z.infer<typeof enquirySchema>;

// Keep the extra project context in the existing EmailJS {{message}} field.
export function formatEnquiryMessage(data: Enquiry) {
  const context = [
    data.company?.trim() ? `Company / organization: ${data.company.trim()}` : null,
    data.location?.trim() ? `Project location: ${data.location.trim()}` : null,
    data.service?.trim() ? `Service required: ${data.service.trim()}` : null,
  ].filter(Boolean);
  return context.length ? `${context.join("\n")}\n\nProject details:\n${data.message}` : data.message;
}
