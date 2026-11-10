import type { CSSProperties } from "react";

/**
 * Inline SVG icon from the sprite. Defaults to the .ico sizing (20px, 1.7 stroke).
 * `id` is the sprite symbol; `name` is accepted as an alias. `width`/`height`
 * merge into inline style for one-off sizing.
 */
export default function Icon({
  id,
  name,
  className = "ico",
  style,
  width,
  height,
}: {
  id?: string;
  name?: string;
  className?: string;
  style?: CSSProperties;
  width?: number;
  height?: number;
}) {
  const s = { ...(style ?? {}) };
  if (width != null) s.width = width;
  if (height != null) s.height = height;
  return (
    <svg className={className} style={s} aria-hidden="true">
      <use href={`#${id ?? name}`} />
    </svg>
  );
}
