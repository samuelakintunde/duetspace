import Link from "next/link";
import { BetaSignupButton } from "./beta-signup";
import { Logo } from "./logo";

const NAV_LINKS = [
  { label: "Product", href: "/#product" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Who it's for", href: "/#who-its-for" },
  { label: "Beta", href: "/#join-the-beta" },
];

export function NavBar() {
  return (
    <header className="h-[88px] border-b border-line bg-navy">
      <nav className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-[120px]">
        <Link href="/">
          <Logo size={28} />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[14px] font-semibold text-body transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <BetaSignupButton className="flex items-center justify-center rounded-[10px] border border-transparent bg-brand px-4 py-3 text-[14px] font-semibold whitespace-nowrap text-navy shadow-brand-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand-md active:translate-y-0 sm:px-7 sm:py-3.5 sm:text-[15px]">
            Join the Beta
          </BetaSignupButton>
        </div>
      </nav>
    </header>
  );
}
