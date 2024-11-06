/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable source maps in development mode
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.devtool = "inline-source-map"; // Enables a different source map style
    }
    return config;
  },
  productionBrowserSourceMaps: true, // Enable source maps for production if needed
};

export default nextConfig;
