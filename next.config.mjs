// import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/assets/**",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "meta-q.cdn.bubble.io/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn2.gstatic.com/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn3.gstatic.com/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com/**",
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com/**",
      },
      {
        protocol: "https",
        hostname: "flower.elevateegy.com/**",
      },
      {
        protocol: "https",
        hostname: "texttofloss.com/**",
      },
      {
        protocol: "https",
        hostname: "c0.klipartz.com/**",
      },
    ],
  },
};
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
