/** @type {import('next').NextConfig} */

const basePath = process.env.NODE_ENV === 'production' ? '/gamelab-catalog' : ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath,
  images: { unoptimized: true }
}

module.exports = nextConfig
