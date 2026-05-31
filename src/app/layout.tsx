import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { buildMetadata, buildOrganizationSchema } from "@/lib/seo";
import { buildWebsiteSchema } from "@/lib/structured-data";
import { Analytics } from "@/components/analytics";
import { JsonLd } from "@/components/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Local SEO Wiser | Premium Local SEO Agency in Pittsburgh, PA",
    description:
      "Pittsburgh-based Local SEO Wiser helps ambitious local businesses improve Google Maps visibility, reputation, and qualified customer growth through strategic local SEO.",
    path: "/",
    keywords: [
      "local seo agency pittsburgh",
      "pittsburgh local seo",
      "google maps seo",
      "google business profile optimization",
      "citation building",
      "review management",
    ],
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = await buildOrganizationSchema();
  const siteUrl = organizationSchema.url as string;
  const websiteSchema = buildWebsiteSchema(siteUrl);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Analytics />
        <Header />
        {children}
        <Footer />
        <JsonLd data={[organizationSchema, websiteSchema]} />
      </body>
    </html>
  );
}
