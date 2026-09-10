import Image from "next/image";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#teaching", label: "Teaching" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      {/* rest of Nav component remains unchanged */}
      <div className="container-page flex items-center justify-between h-16">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display font-semibold text-ink"
        >
          <Image
  src="/profile-photo.jpeg"
  alt="Emmanuel Adegbaju"
  width={32}
  height={32}
  className="rounded-sm object-cover h-8 w-8"
/>
          <span className="hidden sm:inline text-[0.95rem] tracking-tight">
            Emmanuel Adegbaju
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[0.95rem] text-ink-soft">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center rounded-sm bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-accent-strong transition-colors"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
