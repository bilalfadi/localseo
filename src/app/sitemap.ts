import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";
import { getAllPublicPaths } from "@/lib/slug-pages";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = await getSiteUrl();

  return getAllPublicPaths().map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/4s-chemicals-report") ? 0.6 : 0.8,
  }));
}
