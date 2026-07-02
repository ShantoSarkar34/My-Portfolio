"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { about } from "@/src/data/about";


export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 px-6 md:px-12 py-24 max-w-6xl mx-auto lg:px-0"
    >
      <SectionHeading eyebrow="~/about $ cat bio.md" title="About Me" />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-12 items-start">
        {/* Left: written content */}
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-lg text-(--text) leading-relaxed"
          >
            {about.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-mono text-sm text-(--accent) mb-2">
              # Journey
            </h3>
            <p className="text-(--muted) leading-relaxed">{about.journey}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-mono text-sm text-(--accent) mb-2">
              # What I enjoy
            </h3>
            <p className="text-(--muted) leading-relaxed">{about.enjoys}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-mono text-sm text-(--accent) mb-2">
              # Outside of code
            </h3>
            <p className="text-(--muted) leading-relaxed">{about.hobbies}</p>
          </motion.div>
        </div>

        {/* Right: stats card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-(--accent)/20 bg-(--surface) p-6 space-y-6 sticky top-28"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-(--muted) border-b border-(--accent)/10 pb-4">
            <span className="w-2 h-2 rounded-full bg-(--accent) animate-pulse" />
            stats.json
          </div>

          {about.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="flex items-baseline justify-between"
            >
              <span className="text-sm text-(--muted)">{stat.label}</span>
              <span className="text-2xl font-bold text-(--accent) font-mono">
                {stat.value}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}