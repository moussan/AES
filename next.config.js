/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configure for GitHub Pages deployment
  basePath: process.env.GITHUB_ACTIONS ? '/AES' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // This setting is required for static export
  output: 'export',
}

module.exports = nextConfig 