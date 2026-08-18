/* eslint-disable @next/next/no-img-element */

/**
 * Renders an icon exported from Figma (public/figma/*.svg) at its designed
 * leaf dimensions. Colours are baked into the exported SVGs, so nothing here
 * recolours them. Non-square assets pass `width`/`height` explicitly.
 */
type IconProps = {
  name: string;
  size?: number;
  width?: number;
  height?: number;
  className?: string;
};

export function Icon({ name, size, width, height, className }: IconProps) {
  const w = width ?? size;
  const h = height ?? size;

  if (w === undefined || h === undefined) {
    throw new Error(`Icon "${name}" needs a size, or a width and height.`);
  }

  return (
    <img
      src={`/figma/${name}.svg`}
      alt=""
      aria-hidden="true"
      width={w}
      height={h}
      style={{ width: w, height: h }}
      className={className}
    />
  );
}
