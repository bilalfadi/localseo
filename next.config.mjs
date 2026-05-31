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
      "local-seo",
      "google-map-optimization",
      "seo-for-small-business",
      "local-business-citation",
      "landing-page-optimization",
      "technical-seo",
      "ppc-advertising",
      "google-ads",
      "wordpress-development",
      "shopify-development",
      "bricks-builder-development",
      "social-media-management",
      "crm-development",
      "google-business-profile-optimization",
      "local-citation-building",
      "review-management",
    ];

    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/4s-chemicals-local-seo", destination: "/portfolio", permanent: true },
      {
        source: "/google-business-profile-optimization",
        destination: "/google-map-optimization",
        permanent: true,
      },
      { source: "/local-citation-building", destination: "/local-business-citation", permanent: true },
      { source: "/review-management", destination: "/social-media-management", permanent: true },
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
