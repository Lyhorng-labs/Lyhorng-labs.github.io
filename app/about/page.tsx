import Image from "next/image";
import Reveal from "../components/Reveal";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Python",
  "Tailwind CSS",
  "Node.js",
  "HTML",
  "CSS",
];
const openSource =[
  {
    name: "ESP-Website",
    url:"https://github.com/learning-unlimited/ESP-Website/pull/5729",
    note: "Contributed a pull request to the open-source ESP platform.",
  },
  {
    name:"mcp-server-datahub",
    url:"https://github.com/acryldata/mcp-server-datahub/pull/180",
    note:"Contributed a pull request to the DataHub MCP server project.",
  }
]

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-20">
      <Reveal>
        <h1 className="text-4xl font-bold tracking-tight text-white">About</h1>

        <div className="mt-6 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* LEFT: bio text (max-w-xl keeps lines readable) */}
          <div className="max-w-xl space-y-4 text-lg leading-8 text-slate-300">
            <p>
              I&apos;m Lyhorng — an international student at Mississippi Christian
              University, pursuing a double major in Computer Science and
              Mathematics.
            </p>
            <p>
            My focus is on building practical, end-to-end applications. Whether I&apos;m 
            developing security engines, crafting full-stack educational platforms, or 
            experimenting with local AI models, I love bringing complex ideas to life. 
            I am currently looking for Summer 2027 software engineering internships.
            </p>
          </div>

          {/* RIGHT: photo */}
          <div className="relative shrink-0 self-center md:self-start">
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-2xl bg-linear-to-br from-indigo-500 to-cyan-400 opacity-30 blur-2xl"
            />
            <Image
              src="/MyPhoto.png"
              alt="Lyhorng Heng"
              width={400}
              height={480}
              className="h-64 w-56 rounded-2xl border border-white/10 object-cover shadow-xl"
            />
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-12 text-2xl font-semibold text-white">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <h2 className="mt-12 text-2xl font-semibold text-white">Open Source</h2>
        <ul className="mt-4 space-y-3">
          {openSource.map((item) => (
            <li key={item.name}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-col rounded-xl border border-white/10 bg-white/2 p-4 transition-all hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/4"
              >
                <span className="font-medium text-white group-hover:text-cyan-300">
                  {item.name} ↗
                </span>
                <span className="mt-1 text-sm text-slate-400">{item.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </main>
  );
}
