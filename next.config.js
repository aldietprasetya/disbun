module.exports = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
