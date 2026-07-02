"use client";

import { projects } from "@/src/data/projects";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 px-6 md:px-12 py-24 max-w-6xl mx-auto lg:px-0"
    >
      <SectionHeading eyebrow="~/projects $ ls -la" title="Featured Projects" />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
