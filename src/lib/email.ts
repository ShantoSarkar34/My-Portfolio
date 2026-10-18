"use server";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  budget?: string;
  message: string;
  date: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EmailJS configuration is missing");
  }

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || "Not provided",
        whatsapp: data.whatsapp || "Not provided",
        budget: data.budget || "Not specified",
        message: data.message,
        date: data.date,
        reply_to: data.email,
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`EmailJS error: ${response.status} ${errorText}`);
  }

  return { success: true };
}
