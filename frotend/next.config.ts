import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   env: {
    HOSTNAME: "localhost",
    APIBASEURL: "http://localhost:8080",
  },
};

export default nextConfig;
