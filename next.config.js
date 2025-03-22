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
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: [],
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/assessment': { page: '/assessment' },
      '/parents': { page: '/parents' }
    };
  },
  webpack: (config) => {
    config.plugins.push(
      new config.webpack.DefinePlugin({
        'process.env.NEXT_PUBLIC_BASE_PATH': JSON.stringify(
          process.env.NODE_ENV === 'production' ? '/mathassessment' : ''
        ),
      })
    );
    return config;
  },
}

module.exports = nextConfig 