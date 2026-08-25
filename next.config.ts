import type { NextConfig } from "next";

// Static export for GitHub Pages. On a project page the site is served from
// https://<user>.github.io/<repo>/, so basePath/assetPrefix must match the repo
// name — supplied via NEXT_PUBLIC_BASE_PATH by the deploy workflow.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
