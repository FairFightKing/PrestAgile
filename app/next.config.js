/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    STRAPI_URL: process.env.STRAPI_URL,
  },
  trailingSlash: true,
}

module.exports = nextConfig
