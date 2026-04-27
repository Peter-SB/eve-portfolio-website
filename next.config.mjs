/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',        // enables static HTML export
  // basePath: '/eve-portfolio-website', // your GitHub repo name
  // env: {
  //   NEXT_PUBLIC_BASE_PATH: '/eve-portfolio-website',
  // },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
