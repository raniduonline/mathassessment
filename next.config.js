/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/mathassessment' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mathassessment' : '',
  images: { 
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  trailingSlash: true,
}

module.exports = nextConfig 