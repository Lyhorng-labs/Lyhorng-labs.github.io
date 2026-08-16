import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-slate-400 sm:flex-row">
        <p>© 2026 Lyhorng Heng. Built with Next.js &amp; Tailwind CSS.</p>
        <div className="flex gap-5">
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
          <Link href="/contact" className="transition-colors hover:text-cyan-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
