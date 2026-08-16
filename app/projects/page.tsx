import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-20">
      <Reveal>
        <h1 className="text-4xl font-bold tracking-tight text-white">Projects</h1>
        <p className="mt-3 max-w-xl text-slate-400">
          A collection of things I&apos;ve designed and built — from security
          tooling to full-stack web apps.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.1}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </main>
  );
}
