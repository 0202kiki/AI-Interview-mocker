/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/dashboard', // Adjust this path to your dashboard route
          permanent: true, // Set to true if this redirect is permanent
        },
      ];
    },
  };
  
  export default nextConfig;
  