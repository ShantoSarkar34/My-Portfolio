"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import { profile } from "@/src/data/profile";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formRef.current) return;

//     setStatus("sending");

//     emailjs
//       .sendForm(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//         formRef.current,
//         { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! },
//       )
//       .then(() => {
//         setStatus("success");
//         formRef.current?.reset();
//         setTimeout(() => setStatus("idle"), 4000);
//       })
//       .catch((error) => {
//         console.error("EmailJS error:", error);
//         setStatus("error");
//         setTimeout(() => setStatus("idle"), 4000);
//       });
//   };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!formRef.current) return;

  // Inject current date into the hidden field
  const dateInput = formRef.current.elements.namedItem("date") as HTMLInputElement;
  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, "0")}/${String(
    today.getMonth() + 1
  ).padStart(2, "0")}/${today.getFullYear()}`;
  dateInput.value = formattedDate;

  setStatus("sending");

  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formRef.current,
      { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
    )
    .then(() => {
      setStatus("success");
      formRef.current?.reset();
      setTimeout(() => setStatus("idle"), 4000);
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    });
};

  const inputClass =
    "w-full rounded-lg border border-(--accent)/20 bg-(--bg) px-4 py-2.5 text-sm text-(--text) placeholder:text-(--muted) focus:outline-none focus:border-(--accent) transition-colors";
  const labelClass = "block font-mono text-xs text-(--muted) mb-1.5";

  return (
    <section
      id="contact"
      className="scroll-mt-24 px-6 md:px-12 py-24 max-w-6xl mx-auto lg:px-0"
    >
      <SectionHeading
        eyebrow="~/contact $ ./send-message.sh"
        title="Get In Touch"
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10">
        {/* Left: contact info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <p className="text-(--muted) leading-relaxed mb-6">
            Have a project in mind, an opportunity, or just want to say hi? Fill
            out the form or reach me directly below — I usually reply within a
            day.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-4 rounded-xl border border-(--accent)/20 bg-(--surface) p-4 hover:border-(--accent)/50 transition-colors"
          >
            <span className="w-10 h-10 rounded-full bg-(--accent)/10 text-(--accent) flex items-center justify-center shrink-0">
              <FiMail />
            </span>
            <div>
              <p className="font-mono text-xs text-(--muted)">Email</p>
              <p className="text-sm text-(--text) break-all">{profile.email}</p>
            </div>
          </a>

          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-4 rounded-xl border border-(--accent)/20 bg-(--surface) p-4 hover:border-(--accent)/50 transition-colors"
          >
            <span className="w-10 h-10 rounded-full bg-(--accent)/10 text-(--accent) flex items-center justify-center shrink-0">
              <FiPhone />
            </span>
            <div>
              <p className="font-mono text-xs text-(--muted)">Phone</p>
              <p className="text-sm text-(--text)">{profile.phone}</p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-xl border border-(--accent)/20 bg-(--surface) p-4">
            <span className="w-10 h-10 rounded-full bg-(--accent)/10 text-(--accent) flex items-center justify-center shrink-0">
              <FiMapPin />
            </span>
            <div>
              <p className="font-mono text-xs text-(--muted)">Location</p>
              <p className="text-sm text-(--text)">{profile.location}</p>
            </div>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-(--accent)/20 bg-(--surface) p-6 md:p-8 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Name *</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Email *</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="+880 1XXX-XXXXXX"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>WhatsApp (optional)</label>
              <input
                type="tel"
                name="whatsapp"
                placeholder="+880 1XXX-XXXXXX"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Budget (optional)</label>
            <input
              type="text"
              name="budget"
              placeholder="e.g. $200 – $500"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Message *</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className={`${inputClass} resize-none`}
            />
          </div>

          <input type="hidden" name="date" />

          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
            whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-(--accent) text-(--bg) font-semibold py-3 text-sm transition-opacity disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
            {status !== "sending" && <FiSend />}
          </motion.button>

          {status === "success" && (
            <p className="text-center text-sm text-(--accent) font-mono">
              ✓ Message sent — I&apos;ll get back to you soon!
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-400 font-mono">
              ✗ Something went wrong. Try emailing me directly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
