"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/badge";
import { caseStudies } from "@/src/data/case-studies";

export default function CaseStudies() {
  return (
    <section
      id="casestudies"
      className="scroll-mt-24 px-6 md:px-12 py-16 max-w-6xl mx-auto lg:px-0"
    >
      <SectionHeading
        eyebrow="~/case-studies $ cat architecture.md"
        title="Case Studies"
        align="left"
      />
      <p className="text-(--muted) max-w-2xl mb-12">
        Deep dives into how I designed, built, and shipped full-stack products
        — from architecture decisions to production challenges.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, i) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group rounded-2xl border border-(--accent)/20 bg-(--surface) hover:border-(--accent)/50 transition-colors flex flex-col"
          >
            <div className="relative aspect-video rounded-t-2xl overflow-hidden">
              <Link
                href={`/projects/${study.githubUrl?.split("/").pop() || study.id}`}
                className="block w-full h-full"
              >
                <Image
                  src={study.thumbnail}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute top-3 right-3">
                  <Badge variant="outline">Case Study</Badge>
                </div>
                {study.featured && (
                  <div className="absolute top-3 left-3">
                    <Badge variant="success">Featured</Badge>
                  </div>
                )}
              </Link>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <Link
                href={`/projects/${study.githubUrl?.split("/").pop() || study.id}`}
                className="text-(--text) hover:text-(--accent) transition-colors"
              >
                <h3 className="text-lg font-bold mb-1">{study.title}</h3>
              </Link>
              <p className="text-sm text-(--muted) mb-4 line-clamp-2">
                {study.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {study.techStack.slice(0, 4).map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-(--muted) border border-(--accent)/20"
                  >
                    {tech}
                  </Badge>
                ))}
                {study.techStack.length > 4 && (
                  <Badge variant="secondary">
                    +{study.techStack.length - 4}
                  </Badge>
                )}
              </div>

              <div className="mt-auto flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-(--muted)">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--accent)" />
                  <span>{study.role}</span>
                </div>
                <Link
                  href={study.liveUrl ?? study.githubUrl ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-(--accent) hover:underline transition-colors"
                >
                  View Details →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
