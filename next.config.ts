import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.API_HOST}/:path*`,
      },
      {
        source: "/media/:path*",
        destination: "https://twtsl.ccu.edu.tw/:path*",
      },
    ];
  },
};

export default nextConfig;
