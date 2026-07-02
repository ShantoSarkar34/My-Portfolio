"use client";

import { Project } from "@/src/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";


export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group rounded-2xl overflow-hidden border border-(--accent)/20 bg-(--surface) hover:border-(--accent)/50 transition-colors"
    >
      {/* Thumbnail with editor-tab header */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-(--accent)/10 bg-black/10">
        <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
        <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
        <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
        <span className="ml-2 font-mono text-xs text-(--muted) truncate">
          {project.slug}.tsx
        </span>
      </div>

      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.featured && (
          <span className="absolute top-3 right-3 font-mono text-xs bg-(--accent) text-(--bg) px-2.5 py-1 rounded-full font-semibold">
            Featured
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-(--text) mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-(--muted) leading-relaxed mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-(--muted) border border-(--accent)/20 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="font-mono text-xs text-(--muted) px-2 py-1">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-(--accent) hover:gap-2.5 transition-all"
        >
          View Details <FiArrowUpRight />
        </Link>
      </div>
    </motion.div>
  );
}