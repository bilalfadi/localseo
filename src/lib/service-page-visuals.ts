export type ServiceVisual = {
  banner: string;
  gradient: string;
  accent: string;
  line: string;
};

const categoryDefaults: Record<string, Omit<ServiceVisual, "banner">> = {
  "search-engine-optimization": {
    gradient: "from-slate-950/90 via-violet-950/80 to-cyan-950/70",
    accent: "border-violet-400/30 bg-violet-500/10 text-violet-200",
    line: "from-violet-400 to-cyan-400",
  },
  "search-engine-marketing": {
    gradient: "from-slate-950/90 via-orange-950/75 to-rose-950/70",
    accent: "border-orange-400/30 bg-orange-500/10 text-orange-200",
    line: "from-orange-400 to-rose-400",
  },
  "web-design-development": {
    gradient: "from-slate-950/90 via-blue-950/80 to-indigo-950/70",
    accent: "border-cyan-400/30 bg-cyan-500/10 text-cyan-200",
    line: "from-cyan-400 to-blue-400",
  },
  "social-media": {
    gradient: "from-slate-950/90 via-fuchsia-950/75 to-pink-950/70",
    accent: "border-pink-400/30 bg-pink-500/10 text-pink-200",
    line: "from-pink-400 to-fuchsia-400",
  },
  "marketing-automation": {
    gradient: "from-slate-950/90 via-emerald-950/75 to-teal-950/70",
    accent: "border-emerald-400/30 bg-emerald-500/10 text-emerald-200",
    line: "from-emerald-400 to-teal-400",
  },
};

const slugBanners: Record<string, { banner: string; categoryId: string }> = {
  "local-seo": {
    banner: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    categoryId: "search-engine-optimization",
  },
  "google-map-optimization": {
    banner: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80",
    categoryId: "search-engine-optimization",
  },
  "seo-for-small-business": {
    banner: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
    categoryId: "search-engine-optimization",
  },
  "local-business-citation": {
    banner: "https://images.unsplash.com/photo-1454165804603-c3d0499a19cc?auto=format&fit=crop&w=1600&q=80",
    categoryId: "search-engine-optimization",
  },
  "landing-page-optimization": {
    banner: "https://images.unsplash.com/photo-1467232004584-d24d6f560724?auto=format&fit=crop&w=1600&q=80",
    categoryId: "search-engine-optimization",
  },
  "technical-seo": {
    banner: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
    categoryId: "search-engine-optimization",
  },
  "ppc-advertising": {
    banner: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    categoryId: "search-engine-marketing",
  },
  "google-ads": {
    banner: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    categoryId: "search-engine-marketing",
  },
  "wordpress-development": {
    banner: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    categoryId: "web-design-development",
  },
  "shopify-development": {
    banner: "https://images.unsplash.com/photo-1472851294577-337a48d1ea10?auto=format&fit=crop&w=1600&q=80",
    categoryId: "web-design-development",
  },
  "bricks-builder-development": {
    banner: "https://images.unsplash.com/photo-1517694712202-9839d79bd4a2?auto=format&fit=crop&w=1600&q=80",
    categoryId: "web-design-development",
  },
  "social-media-management": {
    banner: "https://images.unsplash.com/photo-1611162617474-5b21eee9793a?auto=format&fit=crop&w=1600&q=80",
    categoryId: "social-media",
  },
  "crm-development": {
    banner: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    categoryId: "marketing-automation",
  },
};

export function getServiceVisual(slug: string): ServiceVisual {
  const entry = slugBanners[slug] ?? slugBanners["local-seo"];
  const defaults = categoryDefaults[entry.categoryId] ?? categoryDefaults["search-engine-optimization"];
  return { banner: entry.banner, ...defaults };
}

export function formatCategoryLabel(title: string) {
  return title
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
