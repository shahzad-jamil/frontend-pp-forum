/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Add rule for SVG to be handled by @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,  // Make sure this is for JS/TS files
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
