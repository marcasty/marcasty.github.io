  /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: "export",  // This tells Next.js to generate static files
    basePath: process.env.NODE_ENV === 'production' ? '/marcasty.github.io' : '',  // Adjust if your site is not at the root
    images: {
      unoptimized: true  // Required for static export
    }
  }
  module.exports = nextConfig