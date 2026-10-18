"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { testimonials } from "@/src/data/testimonials";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 px-6 md:px-12 py-16 max-w-6xl mx-auto lg:px-0"
    >
      <SectionHeading
        eyebrow="~/testimonials $ cat feedback.md"
        title="What People Say"
        align="left"
      />
      <p className="text-(--muted) max-w-2xl mb-12">
        Trusted by teams and clients who value clean code and reliable delivery.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-(--accent)/20 bg-(--surface) p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
                width={40}
                height={40}
                priority
              />
              <div>
                <h4 className="font-bold text-(--text) text-sm">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-(--muted)">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>

            <div className="flex items-end gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`
                    text-[1.1rem] transition-colors
                    ${star <= testimonial.rating ? "text-(--accent)" : "text-gray-200"}
                  `}
                >
                  ★
                </span>
              ))}
            </div>

            <p className="text-(--muted) leading-relaxed text-sm">
              &quot;{testimonial.content}&quot;
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
