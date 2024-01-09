/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: "/api"
      }
    ]
  }
}

module.exports = nextConfig
