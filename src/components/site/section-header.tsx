type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  lede: string;
  /** Max width of the lede paragraph in px. Most headers use the 760 default. */
  ledeWidth?: number;
  id?: string;
  className?: string;
};

/** The eyebrow / headline / lede block shared by six sections of the page. */
export function SectionHeader({
  eyebrow,
  title,
  lede,
  ledeWidth = 760,
  id,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      id={id}
      className={`flex w-full scroll-mt-12 flex-col items-center gap-5 text-center ${className}`}
    >
      <p className="text-[13px] font-bold tracking-[0.015em] text-accent uppercase">
        {eyebrow}
      </p>
      <h2 className="text-[32px] leading-[normal] font-extrabold text-ink lg:text-[44px]">
        {title}
      </h2>
      <p
        className="text-[16px] leading-[1.6] text-body lg:text-[18px]"
        style={{ maxWidth: ledeWidth }}
      >
        {lede}
      </p>
    </div>
  );
}
