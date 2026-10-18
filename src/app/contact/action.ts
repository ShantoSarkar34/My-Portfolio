"use server";

import { z } from "zod";
import { sendContactEmail } from "@/src/lib/email";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  whatsapp: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  date: z.string(),
});

export type ContactFormState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: (formData.get("phone") as string) || undefined,
    whatsapp: (formData.get("whatsapp") as string) || undefined,
    budget: (formData.get("budget") as string) || undefined,
    message: formData.get("message") as string,
    date: formData.get("date") as string,
  };

  const validated = contactSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      status: "error",
      message: validated.error.issues.map((e) => e.message).join(", "),
    };
  }

  try {
    await sendContactEmail(validated.data);
    return { status: "success" };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      status: "error",
      message:
        error instanceof Error ? error.message : "Failed to send message",
    };
  }
}
