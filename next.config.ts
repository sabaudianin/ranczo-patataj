import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ranczopatataj.pl" }],
        destination: "https://ranczopatataj.pl/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
