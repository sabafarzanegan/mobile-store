/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yhjkodrsmetqxvpacyfs.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/phone/**",
      },
    ],
  },
};

export default nextConfig;
