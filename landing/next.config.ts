import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit plain HTML/CSS/JS to `out/` so the page can be served by any static host.
  output: "export",
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
