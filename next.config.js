const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })

// next.js configuration
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['lh3.googleusercontent.com', 'storage.opensea.io'],
  },
}

// plugins
module.exports = withPlugins(
  [withMDX({ pageExtensions: ['js', 'mdx'] })],
  nextConfig,
)
