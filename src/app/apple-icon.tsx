import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Home-screen icon. Unlike the favicon this needs an opaque ground, because
 * iOS composites the icon onto the wallpaper rather than the browser chrome.
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          background: "#0B132A",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 32,
            top: 32,
            width: 84,
            height: 84,
            background: "#00F5D4",
            borderRadius: "42px 0 42px 42px",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 64,
            top: 64,
            width: 84,
            height: 84,
            background: "#3B82F6",
            borderRadius: "42px 42px 42px 0",
          }}
        />
      </div>
    ),
    size,
  );
}
