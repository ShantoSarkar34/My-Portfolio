import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub, FiArrowLeft } from "react-icons/fi";
import type { Metadata } from "next";
import { projects } from "@/src/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Md. Shanto Sarkar`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [project.thumbnail],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="px-6 md:px-12 py-24 max-w-5xl mx-auto">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 font-mono text-sm text-(--muted) hover:text-(--accent) transition-colors mb-8"
      >
        <FiArrowLeft /> Back to projects
      </Link>

      {/* Hero image */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-(--accent)/20 mb-8">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Title + links */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-(--text) mb-3">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs text-(--accent) bg-(--accent)/10 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 shrink-0">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-(--accent) text-(--bg) text-sm font-semibold hover:scale-105 transition-transform"
            >
              Live Demo <FiExternalLink />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-(--accent)/30 text-(--text) text-sm font-semibold hover:border-(--accent) transition-colors"
          >
            <FiGithub /> Client Code
          </a>
        </div>
      </div>

      {/* Description */}
      <section className="mb-10">
        <h2 className="font-mono text-sm text-(--accent) mb-3"># Overview</h2>
        <p className="text-(--muted) leading-relaxed">{project.description}</p>
      </section>

      {/* Features */}
      {project.features.length > 0 && (
        <section className="mb-10">
          <h2 className="font-mono text-sm text-(--accent) mb-3"># Features</h2>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-(--muted) leading-relaxed"
              >
                <span className="text-(--accent) mt-1 shrink-0 font-mono">▸</span>
                {feature}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Challenges */}
      <section className="mb-10">
        <h2 className="font-mono text-sm text-(--accent) mb-3"># Challenges Faced</h2>
        <p className="text-(--muted) leading-relaxed">{project.challenges}</p>
      </section>

      {/* Future improvements */}
      <section className="mb-10 rounded-2xl border border-(--accent)/20 bg-(--surface) p-6">
        <h2 className="font-mono text-sm text-(--accent) mb-3">
          # Future Improvements
        </h2>
        <p className="text-(--muted) leading-relaxed">
          {project.futureImprovements}
        </p>
      </section>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section>
          <h2 className="font-mono text-sm text-(--accent) mb-4"># Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.gallery.map((img, i) => (
              <div
                key={i}
                className="relative aspect-video rounded-xl overflow-hidden border border-(--accent)/20"
              >
                <Image src={img} alt={`${project.title} screenshot ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}