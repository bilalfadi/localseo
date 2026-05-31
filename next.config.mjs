/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
    ],
  },
  async redirects() {
    const portfolioSlugs = [
      "dental-clinic-gbp",
      "family-law-local-seo",
      "hvac-citation-sync",
      "medical-clinic-reviews",
      "restaurant-website-seo",
      "real-estate-multi-location",
    ];
    const blogSlugs = [
      "google-business-profile-wins",
      "local-citation-quality-vs-quantity",
      "review-management-playbook",
    ];
    const serviceSlugs = [
      "google-business-profile-optimization",
      "local-citation-building",
      "review-management",
    ];

    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      ...portfolioSlugs.map((slug) => ({
        source: `/portfolio/${slug}`,
        destination: `/${slug}`,
        permanent: true,
      })),
      ...blogSlugs.map((slug) => ({
        source: `/blog/${slug}`,
        destination: `/${slug}`,
        permanent: true,
      })),
      ...serviceSlugs.map((slug) => ({
        source: `/services/${slug}`,
        destination: `/${slug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
