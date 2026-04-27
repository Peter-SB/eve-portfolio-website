/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // enables static HTML export
  basePath: '/eve-portfolio-website', // your GitHub repo name
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
