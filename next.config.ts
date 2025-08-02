import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/knowledge-vault-notin-comprehensive-guide',
  assetPrefix: '/knowledge-vault-notin-comprehensive-guide/'
};

export default nextConfig;
