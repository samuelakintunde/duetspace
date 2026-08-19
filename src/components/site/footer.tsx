import Link from "next/link";
import { Icon } from "./icon";
import { Logo } from "./logo";

/* Column contents mirror the Figma frame, including the Legal / Resources
   overlap (Privacy vs Privacy Policy, Terms vs Terms of Service). */
const LINK_COLUMNS = [
  {
    heading: "Product",
    links: ["How it works", "Who it's for", "Beta", "Contact"],
  },
  {
    heading: "Legal",
    links: ["Privacy", "Terms", "Security", "Contact Support"],
  },
  {
    heading: "Resources",
    links: ["Terms of Service", "Privacy Policy", "Documentation", "Support"],
  },
];

const SOCIALS = [
  { icon: "twitter", label: "DuetSpace on X" },
  { icon: "github", label: "DuetSpace on GitHub" },
  { icon: "linkedin", label: "DuetSpace on LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-panel px-6 pt-16 pb-12 md:px-12 lg:px-[120px] lg:pt-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-start">
          <div className="flex w-full max-w-[401px] flex-col gap-4">
            <Link href="/">
              <Logo size={24} textClassName="text-[18px]" />
            </Link>
            <p className="text-[13px] leading-[1.5] text-body">
              DuetSpace gives every collaboration a shared home, from the first
              agreement to the final product.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 lg:gap-16">
            {LINK_COLUMNS.map((column) => (
              <div
                key={column.heading}
                className="flex w-[120px] flex-col gap-4"
              >
                <p className="eyebrow text-[11px] font-semibold text-brand">
                  {column.heading}
                </p>
                {column.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[13px] text-body transition-colors hover:text-brand"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-[13px] text-faint">
            © 2026 DuetSpace Systems Inc. All rights reserved.
          </p>
          <div className="flex items-start gap-4">
            {SOCIALS.map((social) => (
              <a key={social.icon} href="#" aria-label={social.label}>
                <Icon name={social.icon} size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
