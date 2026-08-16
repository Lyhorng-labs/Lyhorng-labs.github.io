import Link from "next/link";

// The nav links live in an array so the markup stays short and adding a
// link later is a one-line change.
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-semibold text-white transition-colors hover:text-cyan-300"
        >
          Lyhorng<span className="text-cyan-400"></span>
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-400 transition-colors hover:text-cyan-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
