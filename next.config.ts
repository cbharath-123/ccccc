import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure images work correctly on production
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  // Ensure trailing slashes are handled consistently
  trailingSlash: false,
  // Enable production source maps for debugging
  productionBrowserSourceMaps: false,
};

export default nextConfig;
