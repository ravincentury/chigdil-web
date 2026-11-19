import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,

  images: {
    qualities: [75, 85, 90, 100],
  },
};

export default nextConfig;