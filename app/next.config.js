/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    STRAPI_URL: process.env.STRAPI_URL
  },
  trailingSlash: true,
}
