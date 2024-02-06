/** @type {import('next').NextConfig} */
const nextConfig = (module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
    domains: ["res.cloudinary.com"],
  },

  env: {
    DB_URI:
      "mongodb+srv://Dev-scott:Scotty-dev-camer123@devstyle.45jjjdi.mongodb.net/devstyle?retryWrites=true&w=majority",
    API_URL: "http://localhost:3000",
  },
});
module.exports = nextConfig;
