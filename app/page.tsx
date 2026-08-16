import Link from "next/link";
import Image from "next/image";
import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";
import Reveal from "./components/Reveal";

export default function Home() {
  // Show the first two projects on the home page as a teaser.
  const featured = projects.slice(0, 2);

  return (
    <main className="flex-1">
      <section className="relative mx-auto w-full max-w-5xl px-6 pt-24 pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-linear-to-br from-indigo-600 to-cyan-500 opacity-20 blur-3xl"
        />

        <Reveal>
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Seeking Summer 2027 Internship
              </span>

              <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
                Hi, I&apos;m{" "}
                <span className="bg-linear-to-r from-indigo-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  Lyhorng Heng
                </span>
              </h1>

              <h2 className="mt-4 text-xl font-medium text-slate-300 sm:text-2xl">
               I build full-stack software and AI-driven applications.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                A Computer Science & Mathematics student at Mississippi College focused on engineering scalable web platforms
                and practical AI integrations.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_-8px_rgba(34,211,238,0.6)] transition-all hover:bg-cyan-400 hover:shadow-[0_0_40px_-6px_rgba(34,211,238,0.8)]"
                >
                  View my work
                </Link>
                <a
                  href="mailto:lyhorngheng278@gmail.com"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                >
                  Get in touch
                </a>
              </div>

              <div className="mt-8 flex gap-5 text-sm text-slate-400">
                <a
                  href="https://github.com/Lyhorng-labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan-300"
                >
                  GitHub
                </a>
                <a
                  href="mailto:lyhorngheng278@gmail.com"
                  className="transition-colors hover:text-cyan-300"
                >
                  Email
                </a>
              </div>
            </div>

            <div className="relative shrink-0 self-center">
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-full bg-linear-to-br from-indigo-500 to-cyan-400 opacity-40 blur-2xl"
              />
              <Image
                src="/MyPhoto.png"
                alt="Lyhorng Heng"
                width={400}
                height={400}
                priority
                className="h-48 w-48 rounded-full border border-white/10 object-cover shadow-xl sm:h-60 sm:w-60"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------- SELECTED WORK ---------- */}
      <section className="mx-auto w-full max-w-5xl px-6 py-12">
        <Reveal>
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Selected work
            </h2>
            <Link
              href="/projects"
              className="text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
            >
              All projects →
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
