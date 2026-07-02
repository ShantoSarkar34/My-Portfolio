"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skill } from "@/src/types";
import SectionHeading from "../ui/SectionHeading";
import { getIcon } from "@/src/lib/utils";
import { skills } from "@/src/data/skills";

const CATEGORIES: (Skill["category"] | "All")[] = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<
    Skill["category"] | "All"
  >("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="scroll-mt-24 px-6 md:px-12 py-24 max-w-6xl mx-auto lg:px-0"
    >
      <SectionHeading
        eyebrow="~/skills $ cat package.json"
        title="Tech Stack"
      />

      {/* Filter tabs styled like file tabs */}
      <div className="mt-10 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`relative px-4 py-2 rounded-lg font-mono text-sm transition-colors ${
              activeCategory === cat
                ? "text-(--bg) bg-(--accent)"
                : "text-(--muted) bg-(--surface) border border-(--accent)/20 hover:border-(--accent)/50 hover:text-(--accent)"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill grid */}
      <motion.div
        layout
        className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => {
            const Icon = getIcon(skill.icon);
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center gap-3 rounded-xl border border-(--accent)/20 bg-(--surface) p-5 transition-colors hover:border-(--accent)"
              >
                <div className="text-3xl text-(--muted) transition-colors group-hover:text-(--accent)">
                  {Icon && <Icon />}
                </div>
                <span className="text-xs font-mono text-(--muted) text-center group-hover:text-(--text) transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
