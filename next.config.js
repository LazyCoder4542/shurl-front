/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/ap1/v1/:path*',
        destination:
          process.env.NODE_ENV === 'production'
            ? '/ap1/v1/:path*'
            : 'https://qlnkr.vercel.app/api/v1/:path*',
      },
    ];
  },

}

module.exports = nextConfig
