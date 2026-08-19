/**
 * The duetspace identifier: dual petal logomark plus the custom-spaced
 * logotype (style guide, node 147:247 / 147:419).
 *
 * The mark is two intersecting rounded squares rather than an exported SVG —
 * that is literally how it is drawn in Figma: a 21px teal petal at (3,3) and a
 * 21px blue petal at (11,11) inside a 32px box, each with one square corner.
 * Geometry is scaled from that 32px original so the proportions hold.
 */
export function LogoMark({ size = 32 }: { size?: number }) {
  const scale = size / 32;
  const petal = 21 * scale;
  const radius = 11 * scale;

  return (
    <span
      aria-hidden="true"
      className="relative block shrink-0"
      style={{ width: size, height: size }}
    >
      <span
        className="absolute block bg-brand"
        style={{
          width: petal,
          height: petal,
          left: 3 * scale,
          top: 3 * scale,
          borderRadius: `${radius}px 0 ${radius}px ${radius}px`,
        }}
      />
      <span
        className="absolute block bg-accent"
        style={{
          width: petal,
          height: petal,
          left: 11 * scale,
          top: 11 * scale,
          borderRadius: `${radius}px ${radius}px ${radius}px 0`,
        }}
      />
    </span>
  );
}

export function Logo({
  size = 32,
  textClassName = "text-[22px]",
}: {
  size?: number;
  textClassName?: string;
}) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark size={size} />
      <span className={`${textClassName} tracking-[-0.01em] lowercase`}>
        <span className="font-bold text-ink">duet</span>
        <span className="font-normal text-brand">space</span>
      </span>
    </span>
  );
}
