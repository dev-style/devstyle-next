/** @type {import('next').NextConfig} */
const nextConfig = (module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["res.cloudinary.com"], // Ajoutez le domaine ici
  },

  env: {
    DB_URI:
      // "mongodb+srv://Dev-scott:Scotty-dev-camer123@devstyle.45jjjdi.mongodb.net/devstyle?retryWrites=true&w=majority",
      "mongodb+srv://Dev-scott:Scotty-dev-camer123@devstyle.45jjjdi.mongodb.net/devstyle?retryWrites=true&w=majority&appName=devstyle",
    API_URL: "http://localhost:8000/api/v1",
  },
});
module.exports = nextConfig;
