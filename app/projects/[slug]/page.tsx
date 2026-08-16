import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

// Tells Next which project pages to pre-build. Required for `output: export`
// because there is no server to generate pages on demand.
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-cyan-300"
      >
        <span>←</span> Back to projects
      </Link>

      <h1 className="mt-8 text-4xl font-bold tracking-tight text-white">
        {project.title}
      </h1>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_60px_-20px_rgba(34,211,238,0.4)]">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={675}
          className="h-auto w-full"
          priority
        />
      </div>

      {/* max-w-3xl keeps the description readable on wide screens */}
      <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
        {project.description}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
          >
            Live demo ↗
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </main>
  );
}
