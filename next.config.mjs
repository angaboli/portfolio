/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyimage.com",
      },
      {
        protocol: "https",
        hostname: "cvfacto.mizi.fr",
      },
      {
        protocol: "https",
        hostname: "anteno.fr",
      },
      {
        protocol: "https",
        hostname: "utileo.eu",
      },
      {
        protocol: "https",
        hostname: "www.ngaboimages.com",
      },
      {
        protocol: "https",
        hostname: "consentio.cloud",
      },
      {
        protocol: "https",
        hostname: "www.bellemme.com",
      },
      {
        protocol: "https",
        hostname: "shiva.fr",
      },
      {
        protocol: "https",
        hostname: "cocogo.cloud",
      },
      {
        protocol: "https",
        hostname: "pragmea.fr",
      },
      {
        protocol: "http",
        hostname: "#",
      },
      {
        protocol: "https",
        hostname: "#",
      },
    ],
  },
};

export default nextConfig;
