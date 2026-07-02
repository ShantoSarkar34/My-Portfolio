"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { education } from "@/src/data/education";


export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 px-6 md:px-12 py-24 max-w-6xl mx-auto lg:px-0"
    >
      <SectionHeading
        eyebrow="~/education $ git log --oneline"
        title="Education"
      />

      <div className="mt-14 relative">
        {/* Vertical connecting line */}
        <div className="absolute left-1.75 top-2 bottom-2 w-0.5 bg-(--accent)/20" />

        <div className="space-y-10">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-10"
            >
              {/* Node */}
              <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-(--bg) border-2 border-(--accent) flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-(--accent)" />
              </span>

              <div className="rounded-2xl border border-(--accent)/20 bg-(--surface) p-6 hover:border-(--accent)/50 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-(--text)">
                    {edu.degree} — {edu.field}
                  </h3>
                  <span className="font-mono text-xs text-(--accent) bg-(--accent)/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {edu.startYear} – {edu.endYear}
                  </span>
                </div>
                <p className="text-(--muted) text-sm mb-2">
                  {edu.institution}
                </p>
                {edu.description && (
                  <p className="text-(--muted) text-sm leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}