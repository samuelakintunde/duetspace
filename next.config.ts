import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The project sits under a parent directory that also holds a lockfile,
  // so pin the workspace root explicitly.
  turbopack: { root: path.resolve(".") },
};

export default nextConfig;
