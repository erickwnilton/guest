/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV === "development";

const nextConfig = {
    env: {
        NEXTAUTH_URL: isDevelopment ? "http://localhost:3000" : "https://appguest.vercel.app/",
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
    }
};

export default nextConfig;
