/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [["glass-js/swc", {}]],
    staleTimes: {
      dynamic: 30,
    },
  },
  serverExternalPackages: ["@node-rs/argon2"],
};

export default nextConfig;
