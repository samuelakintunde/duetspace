import Link from "next/link";
import { Icon } from "./icon";

const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Who it's for", href: "#who-its-for" },
  { label: "Beta", href: "#join-the-beta" },
];

export function NavBar() {
  return (
    <header className="h-[88px] border-b border-line bg-white">
      <nav className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-[120px]">
        <Link href="/" className="flex items-center gap-2">
          <Icon name="logo-mark" size={28} />
          <span className="text-[22px] font-extrabold text-ink">DuetSpace</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[14px] font-semibold text-body transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <a
            href="#join-the-beta"
            className="flex items-center justify-center rounded-[10px] border border-transparent bg-brand px-4 py-3 text-[14px] font-semibold whitespace-nowrap text-white shadow-brand-sm sm:px-7 sm:py-3.5 sm:text-[15px]"
          >
            Join the Beta
          </a>
        </div>
      </nav>
    </header>
  );
}
