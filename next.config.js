module.exports = {
  async rewrites() {
    return [
      {
        source: '/auth/:path*',
        destination: '/:path*', // The :path parameter is used here so will not be automatically passed in the query
      },
    ]
  },
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
