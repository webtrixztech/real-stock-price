import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   env: {
    HOSTNAME: "localhost",
    APIBASEURL: "https://real-stock-price.onrender.com",
  },
};

export default nextConfig;
