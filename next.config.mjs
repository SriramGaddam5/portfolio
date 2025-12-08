export default {
  output: "export", // Enable static HTML export
  basePath: "", // Leave empty if using custom domain
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.itch.zone",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
