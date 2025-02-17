/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/cynamoon",
  assetPrefix: "/cynamoon/",
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
};

module.exports = nextConfig;
