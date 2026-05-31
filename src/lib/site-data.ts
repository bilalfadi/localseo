import { allServiceItems } from "@/lib/service-catalog";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const businessLocation = {
  city: "Pittsburgh",
  region: "PA",
  country: "United States",
  label: "Pittsburgh, Pennsylvania",
  serviceArea: "Pittsburgh, PA & nationwide clients",
  timezone: "Eastern Time (ET)",
};

export type MapCoverageLocation = {
  id: number;
  city: string;
  region: string;
  label: string;
  stat: string;
  detail: string;
  image: string;
  mapTop: string;
  mapLeft: string;
  href?: string;
};

export const mapCoverageStats = [
  { value: "18+", label: "Markets tracked on geo-grid maps" },
  { value: "858K", label: "Impressions improved in active campaigns" },
  { value: "1.66K", label: "Organic clicks in latest 6-month window" },
  { value: "50", label: "Peak monthly phone calls from local search" },
];

export const mapCoverageLocations: MapCoverageLocation[] = [
  {
    id: 1,
    city: "Pittsburgh",
    region: "PA",
    label: "Agency home base",
    stat: "+58% map visibility",
    detail: "Headquarters market with geo-grid tracking across Pittsburgh metro service areas.",
    image: "https://images.unsplash.com/photo-1512273222621-2c437774a43c?auto=format&fit=crop&w=900&q=80",
    mapTop: "34%",
    mapLeft: "78%",
  },
  {
    id: 2,
    city: "Norman",
    region: "OK",
    label: "4s Chemicals · GSC growth",
    stat: "1.66K organic clicks",
    detail: "Six-month Search Console lift with position gains from 52.2 to 37.5.",
    image: "/portfolio/4s-chemicals/gsc-overview-1.jpg",
    mapTop: "54%",
    mapLeft: "47%",
    href: "/4s-chemicals-report-1",
  },
  {
    id: 3,
    city: "Oklahoma City",
    region: "OK",
    label: "Impression surge market",
    stat: "44.3K impressions",
    detail: "Metro visibility expansion across industrial and local service keyword groups.",
    image: "/portfolio/4s-chemicals/gsc-overview-2.jpg",
    mapTop: "50%",
    mapLeft: "45%",
    href: "/4s-chemicals-report-2",
  },
  {
    id: 4,
    city: "Dallas",
    region: "TX",
    label: "Regional call tracking",
    stat: "28 tracked calls",
    detail: "Oklahoma & Texas service regions with ongoing phone lead activity.",
    image: "/portfolio/4s-chemicals/gsc-overview-7.jpg",
    mapTop: "60%",
    mapLeft: "43%",
    href: "/4s-chemicals-report-7",
  },
  {
    id: 5,
    city: "Chicago",
    region: "IL",
    label: "Midwest keyword market",
    stat: "35.7K impressions",
    detail: "Sustained impression growth across Gulf Coast and Midwest search clusters.",
    image: "/portfolio/4s-chemicals/gsc-overview-4.jpg",
    mapTop: "38%",
    mapLeft: "62%",
    href: "/4s-chemicals-report-4",
  },
  {
    id: 6,
    city: "London",
    region: "UK",
    label: "International client market",
    stat: "4.9/5 client rating",
    detail: "Multi-region campaigns with transparent reporting for competitive local markets.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80",
    mapTop: "28%",
    mapLeft: "84%",
  },
  {
    id: 7,
    city: "Toronto",
    region: "CA",
    label: "North America expansion",
    stat: "+42% direction requests",
    detail: "Neighborhood-level visibility and review-led trust for local service brands.",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=900&q=80",
    mapTop: "30%",
    mapLeft: "72%",
  },
  {
    id: 8,
    city: "Sydney",
    region: "AU",
    label: "APAC local SEO partner",
    stat: "+64% map pack uplift",
    detail: "Profile and review strategy for competitive healthcare and service-area markets.",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=900&q=80",
    mapTop: "78%",
    mapLeft: "88%",
  },
];

export const trustStats = [
  { value: "240+", label: "Local campaigns launched" },
  { value: "96%", label: "Clients staying beyond 12 months" },
  { value: "18.7M", label: "Map discovery views improved" },
  { value: "4.9/5", label: "Average review profile rating" },
];

export const serviceCards = allServiceItems.slice(0, 6).map((item) => ({
  title: item.title,
  description: item.subtitle,
  href: `/${item.slug}`,
}));

export const industries = [
  "Dentists",
  "Lawyers",
  "Plumbers",
  "Restaurants",
  "Clinics",
  "Real Estate",
  "Contractors",
  "Local Shops",
];

export const processSteps = [
  {
    title: "Audit",
    description:
      "We review your listings, website, citations, reviews, and competition to uncover missed local opportunities.",
  },
  {
    title: "Strategy",
    description:
      "You get a focused roadmap with priorities by effort, impact, and how quickly they can influence local visibility.",
  },
  {
    title: "Optimization",
    description:
      "Our team implements profile, content, citation, and reputation updates while preserving your brand voice.",
  },
  {
    title: "Tracking",
    description:
      "We monitor rankings by geo-grid, calls, bookings, and clicks to measure how local intent converts.",
  },
  {
    title: "Reporting",
    description:
      "Each month includes clear performance reporting, insights, and next-step recommendations.",
  },
];

export type PortfolioGallerySlide = {
  slug: string;
  name: string;
  image: string;
  label: string;
  period: string;
  location: string;
  highlight: string;
  caption: string;
  type: "gsc" | "calls";
};

export type PortfolioReportDetail = {
  slug: string;
  reportNumber: number;
  totalReports: number;
  category: string;
  client: string;
  name: string;
  location: string;
  reportTitle: string;
  period: string;
  metric: string;
  insight: string;
  image: string;
  prevSlug?: string;
  nextSlug?: string;
};

export type PortfolioCaseStudy = {
  slug: string;
  category: string;
  businessType: string;
  location: string;
  service: string;
  goal: string;
  completed: string;
  result: string;
  summary: string;
  image: string;
  stats: { label: string; value: string }[];
  gallery: PortfolioGallerySlide[];
};

export type PortfolioItem = {
  id: number;
  slug: string;
  category: string;
  client: string;
  name: string;
  location: string;
  reportTitle: string;
  period: string;
  metric: string;
  insight: string;
  image: string;
};

const fourSChemicalsGallery: PortfolioGallerySlide[] = [
  {
    slug: "4s-chemicals-report-1",
    name: "4s Chemicals · 6-Month GSC Overview",
    image: "/portfolio/4s-chemicals/gsc-overview-1.jpg",
    label: "6-month search performance overview",
    period: "6-month overview · Dec 2025 to May 2026",
    location: "Norman, Oklahoma · organic search",
    highlight: "1.66K clicks vs 902 previous period",
    caption: "Organic clicks grew 84% while average position improved from 52.2 to 37.5.",
    type: "gsc",
  },
  {
    slug: "4s-chemicals-report-2",
    name: "4s Chemicals · Impression Surge Report",
    image: "/portfolio/4s-chemicals/gsc-overview-2.jpg",
    label: "Visibility acceleration phase",
    period: "Acceleration window · Feb to Apr 2026",
    location: "Oklahoma City & Norman metro",
    highlight: "44.3K impressions vs 1.43K previous period",
    caption: "Impressions jumped as the site started ranking for broader industrial search terms.",
    type: "gsc",
  },
  {
    slug: "4s-chemicals-report-3",
    name: "4s Chemicals · Early Traction Phase",
    image: "/portfolio/4s-chemicals/gsc-overview-3.jpg",
    label: "Early traction report",
    period: "Launch phase · Jan to Mar 2026",
    location: "Norman, OK · first ranking gains",
    highlight: "108 clicks vs 23 previous period",
    caption: "First measurable SEO lift, organic clicks increased 4.7x in the opening phase.",
    type: "gsc",
  },
  {
    slug: "4s-chemicals-report-4",
    name: "4s Chemicals · Sustained Growth Report",
    image: "/portfolio/4s-chemicals/gsc-overview-4.jpg",
    label: "Sustained impression growth",
    period: "Growth window · Mar to May 2026",
    location: "Gulf Coast & Midwest keyword markets",
    highlight: "35.7K impressions vs 2.09K previous period",
    caption: "Impressions climbed more than 16x across target keyword groups.",
    type: "gsc",
  },
  {
    slug: "4s-chemicals-report-5",
    name: "4s Chemicals · April Call Snapshot",
    image: "/portfolio/4s-chemicals/gsc-overview-5.jpg",
    label: "April call volume snapshot",
    period: "Single month · April 2026",
    location: "Norman, Oklahoma · phone lead tracking",
    highlight: "50 tracked phone calls (+6.4%)",
    caption: "Highest single-month call count recorded during the campaign.",
    type: "calls",
  },
  {
    slug: "4s-chemicals-report-6",
    name: "4s Chemicals · 6-Month Call Trend",
    image: "/portfolio/4s-chemicals/gsc-overview-6.jpg",
    label: "Six-month call trend",
    period: "Call trend · Dec 2025 to May 2026",
    location: "United States · discovery call volume",
    highlight: "40 calls tracked over 6 months",
    caption: "Steady call activity held through seasonal demand shifts.",
    type: "calls",
  },
  {
    slug: "4s-chemicals-report-7",
    name: "4s Chemicals · Recent Call Activity",
    image: "/portfolio/4s-chemicals/gsc-overview-7.jpg",
    label: "Recent call performance",
    period: "Recent window · Apr to May 2026",
    location: "Oklahoma & Texas service regions",
    highlight: "28 tracked phone calls",
    caption: "Recent two-month window shows ongoing lead generation.",
    type: "calls",
  },
  {
    slug: "4s-chemicals-report-8",
    name: "4s Chemicals · Call Baseline Report",
    image: "/portfolio/4s-chemicals/gsc-overview-8.jpg",
    label: "Call performance baseline",
    period: "Baseline window · Mar to Apr 2026",
    location: "Norman, OK · comparison period",
    highlight: "42 calls Mar to Apr 2026",
    caption: "Baseline period confirms search traffic converting to phone inquiries.",
    type: "calls",
  },
];

export const portfolioCaseStudy: PortfolioCaseStudy = {
  slug: "4s-chemicals-local-seo",
  category: "Local SEO Campaign",
  businessType: "4s Chemicals",
  location: "Norman, Oklahoma, United States",
  service: "Local SEO & GSC growth tracking",
  goal: "Increase organic search visibility and generate more qualified phone leads from local discovery.",
  completed:
    "Technical SEO fixes, local keyword mapping, on-page optimization, monthly GSC reporting, and call performance tracking.",
  result:
    "Organic clicks reached 1.66K in six months (up from 902), impressions grew to 858K, and local search visibility consistently converted into phone leads.",
  summary:
    "4s Chemicals needed stronger local search visibility in a competitive industrial category. We built a reporting-led local SEO program that improved Google Search Console performance, expanded impression volume, and turned search visibility into measurable phone call activity.",
  image: fourSChemicalsGallery[0].image,
  stats: [
    { label: "Organic clicks (6 months)", value: "1.66K" },
    { label: "Search impressions (6 months)", value: "858K" },
    { label: "Average position improved to", value: "37.5" },
    { label: "Peak monthly phone calls", value: "50" },
  ],
  gallery: fourSChemicalsGallery,
};

export const portfolioItems: PortfolioItem[] = fourSChemicalsGallery.map((slide, index) => ({
  id: index + 1,
  slug: slide.slug,
  category: slide.type === "gsc" ? "Google Search Console" : "Call Performance",
  client: portfolioCaseStudy.businessType,
  name: slide.name,
  location: slide.location,
  reportTitle: slide.label,
  period: slide.period,
  metric: slide.highlight,
  insight: slide.caption,
  image: slide.image,
}));

export function getPortfolioReport(slug: string): PortfolioReportDetail | undefined {
  const index = fourSChemicalsGallery.findIndex((slide) => slide.slug === slug);
  if (index === -1) {
    return undefined;
  }

  const slide = fourSChemicalsGallery[index];
  return {
    slug: slide.slug,
    reportNumber: index + 1,
    totalReports: fourSChemicalsGallery.length,
    category: slide.type === "gsc" ? "Google Search Console" : "Call Performance",
    client: portfolioCaseStudy.businessType,
    name: slide.name,
    location: slide.location,
    reportTitle: slide.label,
    period: slide.period,
    metric: slide.highlight,
    insight: slide.caption,
    image: slide.image,
    prevSlug: index > 0 ? fourSChemicalsGallery[index - 1].slug : undefined,
    nextSlug: index < fourSChemicalsGallery.length - 1 ? fourSChemicalsGallery[index + 1].slug : undefined,
  };
}

export function getPortfolioItem(slug: string) {
  if (slug === portfolioCaseStudy.slug) {
    return portfolioCaseStudy;
  }
  return undefined;
}

export type ProjectWebsite = {
  id: number;
  name: string;
  domain: string;
  url: string;
  category: string;
  location: string;
  description: string;
  services: string[];
  image?: string;
  caseStudySlug?: string;
};

export const ourProjects: ProjectWebsite[] = [
  {
    id: 1,
    name: "D Pet Care",
    domain: "dpetcare.ae",
    url: "https://dpetcare.ae/",
    category: "Pet Services",
    location: "Dubai, United Arab Emirates",
    description:
      "Licensed in-home pet sitting website for Dubai pet owners, built to convert vacation and busy-work searches into booked visits with clear service pages, pricing, and trust signals.",
    services: ["Web Design", "Local SEO", "WordPress"],
    image: "/portfolio/projects/dpetcare-ae.jpg",
  },
  {
    id: 2,
    name: "Fil Xpat Cleaning",
    domain: "filxpatcleaning.ae",
    url: "https://filxpatcleaning.ae/",
    category: "Cleaning Services",
    location: "Dubai, United Arab Emirates",
    description:
      "Deep cleaning and home service website for residential and commercial clients across Dubai, Sharjah, and Ajman, with service funnels for same-day bookings and recurring visits.",
    services: ["Web Design", "Local SEO", "Landing Pages"],
    image: "/portfolio/projects/filxpatcleaning-ae.jpg",
  },
  {
    id: 3,
    name: "MBC Renovation",
    domain: "mbcrenovation.ae",
    url: "https://mbcrenovation.ae/",
    category: "Renovation",
    location: "Dubai, United Arab Emirates",
    description:
      "Renovation and fit-out brand website showcasing project credibility, service coverage, and lead capture for homeowners and commercial clients across the UAE.",
    services: ["Web Design", "WordPress", "Lead Generation"],
    image: "/portfolio/projects/mbcrenovation-ae.jpg",
  },
  {
    id: 4,
    name: "Yara Luxe Interiors",
    domain: "yaraluxeinteriors.com.au",
    url: "https://yaraluxeinteriors.com.au/",
    category: "Interior Design",
    location: "Bentleigh, Victoria, Australia",
    description:
      "Premium interior design studio website with portfolio galleries, testimonials, and consultation flows for residential and commercial design projects in Melbourne.",
    services: ["Web Design", "Portfolio UX", "SEO"],
    image: "/portfolio/projects/yaraluxeinteriors-au.jpg",
  },
  {
    id: 5,
    name: "SmFame",
    domain: "smfame.us",
    url: "https://smfame.us/",
    category: "Social Media",
    location: "United States",
    description:
      "Conversion-focused social growth website for US creators and businesses, structured around service packages, trust proof, FAQs, and fast checkout paths.",
    services: ["Web Design", "Conversion UX", "Technical SEO"],
    image: "/portfolio/projects/smfame-us.jpg",
  },
];

export const testimonials = [
  {
    name: "Angela Park",
    role: "Owner, Midtown Smiles",
    quote:
      "Local SEO Wiser gave us a clear roadmap and handled the execution. We now see consistent calls from map results.",
    flag: "🇺🇸",
  },
  {
    name: "Joseph Reed",
    role: "Managing Partner, Reed Family Law",
    quote:
      "The team improved our local visibility without overpromising. The reporting is transparent and strategic.",
    flag: "🇬🇧",
  },
  {
    name: "Olivia Chen",
    role: "Director, Harbour Clinic",
    quote:
      "Their review and profile strategy helped us stand out in a competitive area. Lead quality has noticeably improved.",
    flag: "🇦🇺",
  },
  {
    name: "Maria Santos",
    role: "Marketing Lead, Riverstone Realty",
    quote:
      "Their local content and map strategy helped us attract higher-intent buyers from nearby neighborhoods.",
    flag: "🇨🇦",
  },
  {
    name: "David Carter",
    role: "Owner, Carter HVAC Services",
    quote:
      "We finally have consistent calls from discovery searches. The monthly insights are clear and actionable.",
    flag: "🇳🇿",
  },
  {
    name: "Lisa Williams",
    role: "Practice Manager, Northside Wellness",
    quote:
      "The review workflow and profile updates made a measurable difference in booked appointments within weeks.",
    flag: "🇺🇸",
  },
];

export const faqs = [
  {
    question: "How long does local SEO usually take to show progress?",
    answer:
      "Most campaigns begin showing directional improvements within 8 to 12 weeks, while stronger competitive gains can take 4 to 6 months depending on your market and baseline.",
  },
  {
    question: "Do you guarantee #1 rankings on Google Maps?",
    answer:
      "No. Ethical local SEO agencies should not promise guaranteed #1 rankings. We focus on proven optimization, measurable growth, and sustainable performance.",
  },
  {
    question: "Can you support multi-location businesses?",
    answer:
      "Yes. We build scalable frameworks for profile optimization, citation management, localized pages, and reporting across all locations.",
  },
  {
    question: "Will I get transparent reporting each month?",
    answer:
      "Absolutely. You receive clear performance dashboards, actionable insights, and recommendations tied to business outcomes such as calls and bookings.",
  },
];

export const packages = [
  {
    title: "Starter Local SEO",
    focus: "For single-location businesses establishing local visibility",
    features: [
      "Google Business Profile setup and optimization",
      "Core citation cleanup and consistency checks",
      "Monthly local ranking tracking",
      "Review response guidance",
    ],
  },
  {
    title: "Growth Local SEO",
    focus: "For businesses ready to scale lead volume and map exposure",
    features: [
      "Everything in Starter, plus expanded citations",
      "Location page enhancements and internal linking",
      "Review generation workflows",
      "Competitor gap analysis and strategy updates",
    ],
  },
  {
    title: "Advanced Local SEO",
    focus: "For multi-location or highly competitive service markets",
    features: [
      "Everything in Growth, plus multi-location architecture",
      "Advanced geo-grid map tracking",
      "Custom reporting dashboards and quarterly roadmaps",
      "Strategic consulting with implementation support",
    ],
  },
];

export const blogPosts = [
  {
    slug: "google-business-profile-wins",
    category: "Google Business Profile",
    title: "9 Google Business Profile Wins That Improve Local Leads",
    excerpt:
      "Simple but high-impact profile updates that help local businesses convert searchers into paying customers.",
    author: "Sara Khan",
    date: "May 18, 2026",
    readTime: "8 min read",
  },
  {
    slug: "local-citation-quality-vs-quantity",
    category: "Citation Building",
    title: "Local Citations: Why Quality Beats Quantity in 2026",
    excerpt:
      "How to prioritize trusted sources, maintain consistency, and avoid noisy directories that add little value.",
    author: "Ibrahim Hayes",
    date: "May 04, 2026",
    readTime: "7 min read",
  },
  {
    slug: "review-management-playbook",
    category: "Review Management",
    title: "The Review Management Playbook for High-Intent Local Buyers",
    excerpt:
      "A practical framework for asking, responding, and learning from customer feedback at scale.",
    author: "Nadia Brooks",
    date: "Apr 21, 2026",
    readTime: "10 min read",
  },
];
