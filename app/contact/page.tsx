import Reveal from "../components/Reveal";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-20">
      <Reveal>
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Get in touch
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-slate-400">
          Have an opportunity, a question, or just want to say hi? I&apos;d love
          to hear from you.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:lyhorngheng278@gmail.com"
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.04]"
          >
            <p className="text-sm text-slate-400">Email</p>
            <p className="mt-1 font-medium text-white group-hover:text-cyan-300">
              lyhorngheng278@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/Lyhorng-labs"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.04]"
          >
            <p className="text-sm text-slate-400">GitHub</p>
            <p className="mt-1 font-medium text-white group-hover:text-cyan-300">
              @Lyhorng-labs
            </p>
          </a>
        </div>
      </Reveal>
    </main>
  );
}
