import Link from "next/link";
import Image from "next/image";
import type { Project } from "../data/projects";

// A single reusable project card. Used on both the home page and /projects,
// so the styling only lives in one place.
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.04] hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.45)]"
    >
      <div className="overflow-hidden border-b border-white/10">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={675}
          className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-cyan-300">
          {project.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-cyan-400">
          View project
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
