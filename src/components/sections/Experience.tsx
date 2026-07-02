"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { experience } from "@/src/data/experience";


export default function Experience() {
  if (experience.length === 0) return null;

  return (
    <section
      id="experience"
      className="scroll-mt-24 px-6 md:px-12 py-24 max-w-6xl mx-auto lg:px-0"
    >
      <SectionHeading
        eyebrow="~/experience $ git blame --stats"
        title="Experience"
      />

      <div className="mt-14 relative">
        <div className="absolute left-1.75 top-2 bottom-2 w-0.5 bg-(--accent)/20" />

        <div className="space-y-10">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-10"
            >
              <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-(--bg) border-2 border-(--accent) flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-(--accent)" />
              </span>

              <div className="rounded-2xl border border-(--accent)/20 bg-(--surface) p-6 hover:border-(--accent)/50 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-(--text)">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-xs text-(--accent) bg-(--accent)/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>

                <p className="text-(--muted) text-sm mb-4">{exp.company}</p>

                <p className="text-(--text) text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {exp.responsibilities.length > 0 && (
                  <ul className="space-y-1.5 mb-4">
                    {exp.responsibilities.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-(--muted)"
                      >
                        <span className="text-(--accent) mt-1 shrink-0 font-mono">
                          ▸
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-(--muted) border border-(--accent)/20 px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}