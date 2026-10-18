"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/badge";
import { caseStudies } from "@/src/data/case-studies";

export default function CaseStudies() {
  return (
    <section
      id="casestudies"
      className="scroll-mt-24 px-6 md:px-12 py-24 max-w-6xl mx-auto lg:px-0"
    >
      <SectionHeading
        eyebrow="~/case-studies $ cat architecture.md"
        title="Case Studies"
        align="left"
      />
      <p className="text-(--muted) max-w-2xl mb-16">
        Deep dives into how I designed, built, and shipped full-stack products
        — from architecture decisions to production challenges.
      </p>

      <div className="space-y-12">
        {caseStudies.map((study, i) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-2xl border border-(--accent)/20 bg-(--surface) p-8 md:p-12 hover:border-(--accent)/50 transition-colors"
          >
            {/* Left accent border */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-(--accent) rounded-l-2xl" />

            {/* Header: badges */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge variant="outline" className="text-(--muted) border border-(--accent)/20">
                {study.role}
              </Badge>
              <Badge variant="outline" className="text-(--muted) border border-(--accent)/20">
                {study.duration}
              </Badge>
              <Badge variant="outline" className="text-(--muted) border border-(--accent)/20">
                {study.teamSize}
              </Badge>
              {study.featured && (
                <Badge variant="success" className="ml-auto">
                  Featured
                </Badge>
              )}
            </div>

            {/* Title */}
            <Link
              href={`/projects/${study.githubUrl?.split("/").pop() || study.id}`}
              className="text-(--text) hover:text-(--accent) transition-colors"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                {study.title}
              </h2>
            </Link>

            {/* Problem | Solution split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Problem */}
              <div className="space-y-4">
                <h3 className="font-mono text-xs text-(--accent) mb-2">
                  # Problem
                </h3>
                <p className="text-(--muted) leading-relaxed text-sm md:text-base">
                  {study.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-4 border-l border-(--accent)/20 pl-6">
                <h3 className="font-mono text-xs text-(--accent) mb-2">
                  # Solution
                </h3>
                <p className="text-(--muted) leading-relaxed text-sm md:text-base">
                  {study.solution}
                </p>
              </div>
            </div>

            {/* Key Results */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 border-t border-(--accent)/10 pt-6">
              {study.results.map((result) => (
                <div
                  key={result.label}
                  className="text-center"
                >
                  <span className="block text-2xl md:text-3xl font-bold text-(--accent) font-mono">
                    {result.value}
                  </span>
                  <span className="block text-xs text-(--muted) mt-1">
                    {result.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer: tech stack + CTA */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-6 border-t border-(--accent)/10">
              <div className="flex flex-wrap gap-2">
                {study.techStack.slice(0, 5).map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-(--muted) border border-(--accent)/20 text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
                {study.techStack.length > 5 && (
                  <Badge variant="secondary" className="text-xs">
                    +{study.techStack.length - 5}
                  </Badge>
                )}
              </div>

              <Link
                href={study.liveUrl ?? study.githubUrl ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs text-(--accent) hover:text-(--accent-warm) hover:translate-x-1 transition-all"
              >
                Read Full Case Study <span>→</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
