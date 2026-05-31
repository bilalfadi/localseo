import type { ServicePageConfig } from "@/lib/service-catalog";

type ServiceSeed = {
  slug: string;
  title: string;
  intro: string;
  painPoint: string;
  idealFor: string[];
  stepTitles: string[];
  keywords: string[];
  benefits: string[];
  included: string[];
  steps: string[];
  whyChoose: string[];
  faq: { question: string; answer: string }[];
};

function page(seed: ServiceSeed): ServicePageConfig {
  return {
    slug: seed.slug,
    metaTitle: `${seed.title} | Local SEO Wiser`,
    metaDescription: seed.intro,
    keywords: seed.keywords,
    title: seed.title,
    intro: seed.intro,
    painPoint: seed.painPoint,
    idealFor: seed.idealFor,
    stepTitles: seed.stepTitles,
    benefits: seed.benefits,
    included: seed.included,
    steps: seed.steps,
    whyChoose: seed.whyChoose,
    faq: seed.faq,
  };
}

const sharedWhyChoose = [
  "Pittsburgh-based team with nationwide campaign experience",
  "Clear reporting tied to calls, clicks, and qualified leads",
  "Strategy-first execution without overpromising rankings",
  "Dedicated support from audit through ongoing optimization",
];

const serviceSeeds: ServiceSeed[] = [
  {
    slug: "local-seo",
    title: "Local SEO",
    intro:
      "Build durable local visibility with a complete SEO system covering profiles, citations, content, and conversion-ready location signals.",
    painPoint:
      "Most local businesses lose high-intent searches because their Google profile, website, and directory listings tell different stories, confusing both customers and search engines.",
    idealFor: [
      "Service-area businesses competing in Google Maps",
      "Multi-location brands needing consistent local signals",
      "Teams that want SEO tied to calls and form fills",
    ],
    stepTitles: ["Local audit", "Priority fixes", "On-site execution", "Monthly tracking"],
    keywords: ["local seo services", "local search optimization", "google maps seo agency"],
    benefits: [
      "Stronger map pack and local organic visibility",
      "Better alignment between search intent and service pages",
      "Improved trust through reviews, citations, and profile activity",
      "Reporting that connects rankings to business outcomes",
    ],
    included: [
      "Local SEO audit and competitive benchmark",
      "Google Business Profile optimization roadmap",
      "Citation and NAP consistency management",
      "Location and service page recommendations",
      "Monthly performance reporting and next-step priorities",
    ],
    steps: [
      "Audit current local visibility and conversion paths",
      "Prioritize high-impact fixes across profile, site, and listings",
      "Execute on-page, citation, and content improvements",
      "Track calls, clicks, and ranking movement monthly",
    ],
    whyChoose: sharedWhyChoose,
    faq: [
      {
        question: "How long does local SEO take to show results?",
        answer:
          "Most businesses see directional improvements within 8 to 12 weeks, with stronger gains over 4 to 6 months depending on competition.",
      },
      {
        question: "Do you work with multi-location businesses?",
        answer: "Yes. We build scalable local SEO frameworks for single-location and multi-location brands.",
      },
    ],
  },
  {
    slug: "google-map-optimization",
    title: "Google Map Optimization",
    intro:
      "Turn your Google Business Profile and map presence into a reliable lead channel with category precision, media strategy, and active profile management.",
    painPoint:
      "An incomplete or inactive Google Business Profile means competitors capture map pack clicks even when your reviews and reputation are stronger.",
    idealFor: [
      "Businesses relying on near-me and map searches",
      "Teams with outdated categories or missing services",
      "Brands that need consistent posts, photos, and Q&A",
    ],
    stepTitles: ["Profile audit", "Entity setup", "Content rollout", "Review framework"],
    keywords: ["google map optimization", "google business profile", "map pack seo"],
    benefits: [
      "Stronger local relevance through category and service alignment",
      "Improved click-through with better descriptions, media, and offers",
      "Higher trust through profile completeness and active management",
      "Clear insight into calls, clicks, and direction requests",
    ],
    included: [
      "Category and service attribute optimization",
      "Conversion-focused business description rewrite",
      "Photo and post strategy with publishing cadence",
      "Q&A and messaging optimization",
      "Performance tracking for map interactions",
    ],
    steps: [
      "Baseline profile audit and competitor benchmark",
      "Entity and category refinement based on service focus",
      "Content updates for profile sections and posting schedule",
      "Review and Q&A response frameworks implementation",
    ],
    whyChoose: sharedWhyChoose,
    faq: [
      {
        question: "How often should my Google profile be updated?",
        answer: "Most businesses benefit from weekly posts, fresh photos, and consistent response management.",
      },
      {
        question: "Can map optimization work without a website redesign?",
        answer: "Yes. Profile improvements can increase visibility and conversions independently of site changes.",
      },
    ],
  },
  {
    slug: "seo-for-small-business",
    title: "SEO For Small Business",
    intro:
      "Practical SEO programs designed for small businesses that need measurable local growth without enterprise complexity or bloated retainers.",
    painPoint:
      "Small teams often waste budget on generic SEO tactics that do not match their market size, service area, or capacity to publish content.",
    idealFor: [
      "Owner-operated and small-team local businesses",
      "Companies launching their first serious SEO program",
      "Brands that need clear monthly priorities, not jargon",
    ],
    stepTitles: ["Keyword focus", "Foundation fixes", "Content rollout", "Lead measurement"],
    keywords: ["seo for small business", "small business local seo", "affordable local seo"],
    benefits: [
      "Focused priorities that match small-team capacity",
      "Local keyword and content plans built for your market",
      "Better discovery for near-me and service-area searches",
      "Simple monthly reporting with clear action items",
    ],
    included: [
      "Small business SEO audit and opportunity map",
      "Google profile and core citation setup",
      "On-page improvements for key service pages",
      "Review and reputation workflow guidance",
      "Monthly check-ins with prioritized recommendations",
    ],
    steps: [
      "Identify your highest-intent local keywords",
      "Fix foundational profile, citation, and site issues",
      "Publish and optimize location-focused content",
      "Measure lead signals and refine monthly",
    ],
    whyChoose: sharedWhyChoose,
    faq: [
      {
        question: "Is local SEO worth it for a small business?",
        answer:
          "Yes. Local search drives high-intent calls and visits, especially for service-area and storefront businesses.",
      },
      {
        question: "Do I need a large website to start?",
        answer: "No. We focus on core pages and profile assets that move visibility first, then expand as results grow.",
      },
    ],
  },
  {
    slug: "local-business-citation",
    title: "Local Business Citation",
    intro:
      "Strengthen local trust signals with consistent, accurate, and strategically selected citation placements across trusted directories.",
    painPoint:
      "Inconsistent name, address, and phone data across directories erodes trust and can suppress map rankings in competitive local markets.",
    idealFor: [
      "Businesses with outdated or duplicate listings",
      "Brands expanding into new cities or locations",
      "Teams preparing for a local SEO or rebrand push",
    ],
    stepTitles: ["NAP audit", "Data cleanup", "Quality expansion", "Ongoing monitoring"],
    keywords: ["local business citation", "nap consistency", "directory listings seo"],
    benefits: [
      "Improved listing consistency across platforms and aggregators",
      "Reduced confusion for search engines and customers",
      "Greater local authority through trusted source coverage",
      "Better support for map and organic local rankings",
    ],
    included: [
      "NAP consistency audit and correction map",
      "Citation cleanup across existing directory profiles",
      "New listing placements on trusted and relevant sources",
      "Duplicate suppression and verification workflow",
      "Citation health reporting by location",
    ],
    steps: [
      "Audit all active listings and identify inconsistencies",
      "Correct critical NAP and business data discrepancies",
      "Expand into relevant, quality directories by vertical and region",
      "Monitor and maintain listing quality over time",
    ],
    whyChoose: sharedWhyChoose,
    faq: [
      {
        question: "How many citations does my business need?",
        answer:
          "We prioritize authoritative, relevant directories and consistency rather than chasing bulk listing volume.",
      },
      {
        question: "Do citations still matter in 2026?",
        answer: "Yes. Citation accuracy still supports local trust and discoverability in competitive markets.",
      },
    ],
  },
  {
    slug: "landing-page-optimization",
    title: "Landing Page Optimization",
    intro:
      "Improve conversion rates on local landing pages with clearer messaging, stronger trust signals, and SEO-aligned page structure.",
    painPoint:
      "Traffic without conversions usually means the page message, offer, or trust signals do not match what searchers expect when they land.",
    idealFor: [
      "Businesses running Google Ads to local pages",
      "Sites with traffic but weak form fill or call rates",
      "Teams launching new service or city landing pages",
    ],
    stepTitles: ["Conversion audit", "Message rewrite", "Technical polish", "Performance testing"],
    keywords: ["landing page optimization", "local landing pages", "conversion rate optimization seo"],
    benefits: [
      "Higher conversion from local ad and organic traffic",
      "Better alignment between search intent and page content",
      "Stronger trust through social proof and clear CTAs",
      "Improved page speed and mobile usability",
    ],
    included: [
      "Landing page audit for SEO and conversion gaps",
      "Headline, offer, and CTA restructuring",
      "Schema and on-page SEO enhancements",
      "Form and call-tracking integration review",
      "A/B test recommendations and iteration plan",
    ],
    steps: [
      "Review traffic sources and conversion bottlenecks",
      "Rewrite page sections for clarity and local relevance",
      "Implement technical and on-page SEO improvements",
      "Track form fills, calls, and engagement metrics",
    ],
    whyChoose: sharedWhyChoose,
    faq: [
      {
        question: "Should every city have its own landing page?",
        answer:
          "Only where you genuinely serve that market with unique content. We avoid thin duplicate location pages.",
      },
      {
        question: "Can you optimize pages built in WordPress or Shopify?",
        answer: "Yes. We optimize landing pages across WordPress, Shopify, Bricks, and custom builds.",
      },
    ],
  },
  {
    slug: "technical-seo",
    title: "Technical SEO",
    intro:
      "Fix crawl, index, and site health issues that block local rankings, from Core Web Vitals to structured data and internal linking.",
    painPoint:
      "Slow, broken, or poorly structured sites often underperform in local search even when content and profiles are otherwise strong.",
    idealFor: [
      "Sites with speed, mobile, or indexation issues",
      "Businesses missing local schema or canonical fixes",
      "Teams rebuilding or migrating without SEO oversight",
    ],
    stepTitles: ["Technical audit", "Critical fixes", "Schema & links", "Validation"],
    keywords: ["technical seo", "local technical seo", "site health audit"],
    benefits: [
      "Cleaner crawl paths for search engines",
      "Faster pages that support better user experience",
      "Stronger structured data for local entities",
      "Fewer indexation and duplicate content issues",
    ],
    included: [
      "Technical SEO audit with prioritized fix list",
      "Core Web Vitals and mobile usability review",
      "Schema markup for local business and services",
      "Internal linking and canonical recommendations",
      "Post-fix validation and monitoring setup",
    ],
    steps: [
      "Run full technical audit and benchmark issues",
      "Fix critical crawl, index, and speed blockers",
      "Deploy schema and internal linking improvements",
      "Validate fixes and monitor ongoing site health",
    ],
    whyChoose: sharedWhyChoose,
    faq: [
      {
        question: "Do small business sites need technical SEO?",
        answer: "Yes. Even basic issues like slow speed or poor mobile UX can limit local ranking potential.",
      },
      {
        question: "Will you implement fixes or only recommend them?",
        answer: "We can implement directly or work with your developer, depending on your preferred workflow.",
      },
    ],
  },
  {
    slug: "ppc-advertising",
    title: "PPC Advertising",
    intro:
      "Capture high-intent local demand with pay-per-click campaigns that complement organic visibility and drive immediate qualified leads.",
    painPoint:
      "Without tight geo-targeting and conversion tracking, PPC budgets bleed into irrelevant clicks instead of qualified local leads.",
    idealFor: [
      "Businesses needing leads while SEO ramps up",
      "Competitive markets where organic takes time",
      "Teams ready to track cost per call and form fill",
    ],
    stepTitles: ["Goal mapping", "Campaign build", "Tracked launch", "Weekly optimization"],
    keywords: ["ppc advertising", "local ppc", "pay per click management"],
    benefits: [
      "Immediate visibility for competitive local keywords",
      "Tighter control over budget and lead volume",
      "Better alignment between ads and landing page intent",
      "Clear ROI tracking from click to conversion",
    ],
    included: [
      "PPC account audit and campaign structure plan",
      "Keyword, ad copy, and extension setup",
      "Geo-targeting for service-area businesses",
      "Conversion tracking for calls and form fills",
      "Monthly optimization and performance reporting",
    ],
    steps: [
      "Define campaign goals and target locations",
      "Build ad groups aligned to service intent",
      "Launch with conversion tracking in place",
      "Optimize bids, copy, and landing pages weekly",
    ],
    whyChoose: sharedWhyChoose,
    faq: [
      {
        question: "Should I run PPC if I am doing local SEO?",
        answer: "PPC can fill gaps while SEO builds momentum, especially for competitive or seasonal terms.",
      },
      {
        question: "Which platforms do you manage?",
        answer: "We primarily manage Google Ads and can coordinate with Meta or other platforms as needed.",
      },
    ],
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    intro:
      "Run strategic Google Ads campaigns for local services with location targeting, call extensions, and landing pages built to convert.",
    painPoint:
      "Poorly structured Google Ads accounts waste spend on broad keywords, weak ad copy, and landing pages that do not match search intent.",
    idealFor: [
      "Local service providers targeting high-intent searches",
      "Businesses wanting call and lead tracking from ads",
      "Teams scaling proven offers with controlled budgets",
    ],
    stepTitles: ["Keyword research", "Account setup", "Budget launch", "Bid refinement"],
    keywords: ["google ads management", "local google ads", "google ads agency"],
    benefits: [
      "Target buyers actively searching for your services",
      "Location and schedule controls for efficient spend",
      "Call and lead tracking tied to campaign performance",
      "Continuous testing to improve cost per lead",
    ],
    included: [
      "Google Ads account setup or restructure",
      "Search campaign build with local keyword themes",
      "Call extensions and location assets",
      "Negative keyword and bid optimization",
      "Monthly reporting with lead quality insights",
    ],
    steps: [
      "Research local keywords and competitor ad activity",
      "Configure campaigns, ad groups, and tracking",
      "Launch with controlled daily budgets",
      "Refine targeting and creative based on results",
    ],
    whyChoose: sharedWhyChoose,
    faq: [
      {
        question: "How much budget do I need for Google Ads?",
        answer: "Budget depends on your market and goals. We recommend starting with a test budget and scaling what works.",
      },
      {
        question: "Can Google Ads help my Google Maps visibility?",
        answer: "Local Services Ads and location extensions can complement map SEO, though organic map growth remains a separate strategy.",
      },
    ],
  },
  {
    slug: "wordpress-development",
    title: "Wordpress Development",
    intro:
      "Build fast, SEO-ready WordPress websites for local businesses with clean structure, mobile performance, and conversion-focused layouts.",
    painPoint:
      "Slow, bloated WordPress sites with poor structure make it harder to rank locally and convert mobile visitors into calls.",
    idealFor: [
      "Local businesses launching or redesigning a site",
      "Teams that need an easy-to-update CMS",
      "Brands wanting SEO foundations built in from day one",
    ],
    stepTitles: ["Site planning", "Design & build", "SEO setup", "Launch & handoff"],
    keywords: ["wordpress development", "local business wordpress", "wordpress seo website"],
    benefits: [
      "Flexible CMS your team can update easily",
      "SEO-friendly theme and plugin architecture",
      "Mobile-responsive design for local buyers",
      "Integration with forms, analytics, and call tracking",
    ],
    included: [
      "WordPress site planning and sitemap design",
      "Custom theme setup or child theme development",
      "Core service and location page templates",
      "Speed, security, and SEO baseline configuration",
      "Launch support and handoff documentation",
    ],
    steps: [
      "Define site structure and conversion goals",
      "Design and develop key page templates",
      "Implement SEO, schema, and tracking setup",
      "Test, launch, and train your team",
    ],
    whyChoose: sharedWhyChoose,
    faq: [
      {
        question: "Do you build on existing WordPress sites?",
        answer: "Yes. We can redesign, rebuild, or optimize existing WordPress installations.",
      },
      {
        question: "Will my WordPress site be fast on mobile?",
        answer: "Performance is a core requirement, so we optimize images, caching, and theme bloat from day one.",
      },
    ],
  },
  {
    slug: "shopify-development",
    title: "Shopify Development",
    intro:
      "Launch and optimize Shopify stores with local pickup, service-area messaging, and SEO foundations that support discoverability.",
    painPoint:
      "Generic Shopify themes and thin product pages limit both local discovery and checkout confidence for regional buyers.",
    idealFor: [
      "Retailers selling online with local pickup or delivery",
      "Brands migrating from another ecommerce platform",
      "Stores that need SEO-ready collection and product pages",
    ],
    stepTitles: ["Store planning", "Theme customization", "SEO & apps", "QA & launch"],
    keywords: ["shopify development", "shopify seo", "local shopify store"],
    benefits: [
      "Reliable ecommerce platform with local retail options",
      "Product and collection pages optimized for search",
      "Fast checkout experience on mobile devices",
      "Apps and integrations for reviews and local delivery",
    ],
    included: [
      "Shopify theme customization and branding",
      "Product, collection, and policy page setup",
      "Local SEO metadata and schema configuration",
      "Analytics and conversion tracking integration",
      "Training for product and content updates",
    ],
    steps: [
      "Plan store structure and local fulfillment model",
      "Customize theme and essential storefront pages",
      "Configure SEO, apps, and tracking",
      "Launch with QA across devices and checkout flow",
    ],
    whyChoose: sharedWhyChoose,
    faq: [
      {
        question: "Can Shopify work for local service businesses?",
        answer: "Yes, especially for businesses selling products online with local pickup or regional delivery.",
      },
      {
        question: "Do you migrate stores from other platforms?",
        answer: "We can support migrations from WooCommerce, Wix, and other platforms depending on catalog complexity.",
      },
    ],
  },
  {
    slug: "bricks-builder-development",
    title: "Bricks Builder Development",
    intro:
      "Create high-performance WordPress sites with Bricks Builder for lightweight pages, precise design control, and SEO-ready structure.",
    painPoint:
      "Heavy page builders drag down Core Web Vitals and make local SEO fixes harder than they need to be on WordPress.",
    idealFor: [
      "Performance-focused WordPress rebuilds",
      "Agencies and brands wanting lightweight markup",
      "Sites needing reusable service and location templates",
    ],
    stepTitles: ["Page wireframes", "Template build", "Content & SEO", "Speed testing"],
    keywords: ["bricks builder development", "bricks wordpress", "bricks seo website"],
    benefits: [
      "Lightweight pages with minimal plugin dependency",
      "Pixel-level design control for local brand experiences",
      "Reusable templates for service and location pages",
      "Strong Core Web Vitals potential out of the box",
    ],
    included: [
      "Bricks theme setup and design system",
      "Custom templates for key page types",
      "Responsive layouts for mobile local traffic",
      "SEO and schema integration within Bricks",
      "Documentation for ongoing content updates",
    ],
    steps: [
      "Wireframe core pages and component library",
      "Build Bricks templates and global styles",
      "Populate content and configure SEO settings",
      "Performance test and launch",
    ],
    whyChoose: sharedWhyChoose,
    faq: [
      {
        question: "Why use Bricks instead of page builders like Elementor?",
        answer: "Bricks typically produces cleaner markup and faster pages, which is important for SEO and mobile users.",
      },
      {
        question: "Can you convert an existing WordPress site to Bricks?",
        answer: "Yes, though scope depends on current theme complexity. We audit before recommending a rebuild vs migration.",
      },
    ],
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    intro:
      "Stay visible where local customers spend time with consistent social content, community engagement, and brand-aligned posting calendars.",
    painPoint:
      "Inconsistent posting and weak engagement make local brands look inactive, even when their service quality is excellent.",
    idealFor: [
      "Local businesses building trust on Facebook or Instagram",
      "Teams without in-house content capacity",
      "Brands supporting SEO with social proof and visibility",
    ],
    stepTitles: ["Platform audit", "Content pillars", "Publishing cadence", "Monthly review"],
    keywords: ["social media management", "local social media marketing", "social media for small business"],
    benefits: [
      "Consistent brand presence across key platforms",
      "Better engagement with local audiences",
      "Content that supports trust and referrals",
      "Clear monthly reporting on reach and engagement",
    ],
    included: [
      "Platform audit and content strategy",
      "Monthly content calendar and post creation",
      "Community monitoring and response guidelines",
      "Creative assets sized for each platform",
      "Performance recap with optimization notes",
    ],
    steps: [
      "Define brand voice and priority platforms",
      "Build content pillars tied to services and seasons",
      "Publish and engage on a consistent schedule",
      "Review metrics and refine content monthly",
    ],
    whyChoose: sharedWhyChoose,
    faq: [
      {
        question: "Which social platforms do you manage?",
        answer: "We commonly manage Facebook, Instagram, LinkedIn, and YouTube depending on your audience.",
      },
      {
        question: "Do you also run paid social ads?",
        answer: "We can coordinate organic management with paid campaigns when aligned to your lead goals.",
      },
    ],
  },
  {
    slug: "crm-development",
    title: "CRM Development",
    intro:
      "Connect marketing, sales, and follow-up with custom CRM workflows that capture leads from SEO, ads, and forms without manual chaos.",
    painPoint:
      "Leads from SEO, ads, and website forms often sit in inboxes or spreadsheets, slowing response time and losing revenue.",
    idealFor: [
      "Businesses getting leads from multiple channels",
      "Sales teams needing automated follow-up",
      "Marketers connecting ads, forms, and CRM pipelines",
    ],
    stepTitles: ["Pipeline mapping", "CRM configuration", "Integrations", "Team training"],
    keywords: ["crm development", "marketing automation", "lead management crm"],
    benefits: [
      "Fewer lost leads from forms, calls, and chat",
      "Automated follow-up sequences for new inquiries",
      "Clear pipeline visibility for your sales team",
      "Integration with website, ads, and email tools",
    ],
    included: [
      "CRM requirements and pipeline mapping",
      "Setup on HubSpot, GoHighLevel, or similar platforms",
      "Form, call, and ad lead routing automation",
      "Email and SMS nurture workflow templates",
      "Team training and documentation",
    ],
    steps: [
      "Map your lead sources and sales process",
      "Configure CRM fields, stages, and automations",
      "Integrate website forms and tracking tools",
      "Test workflows and train your team",
    ],
    whyChoose: sharedWhyChoose,
    faq: [
      {
        question: "Which CRM platforms do you work with?",
        answer: "We commonly implement HubSpot, GoHighLevel, Zoho, and custom integrations depending on your stack.",
      },
      {
        question: "Can CRM setup connect to my local SEO leads?",
        answer: "Yes. We route form fills, call tracking events, and ad leads directly into your CRM pipelines.",
      },
    ],
  },
];

export const servicePages: Record<string, ServicePageConfig> = Object.fromEntries(
  serviceSeeds.map((seed) => [seed.slug, page(seed)]),
);
