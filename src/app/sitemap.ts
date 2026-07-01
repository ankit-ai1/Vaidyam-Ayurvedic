import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/data/products";
import { DOCTORS } from "@/lib/data/doctors";
import { BLOG_POSTS } from "@/lib/data/content";
import { HEALTH_CATEGORIES } from "@/lib/constants/site";
import { SITE_CONFIG } from "@/lib/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;

  const staticRoutes = [
    "",
    "/products",
    "/health-concerns",
    "/doctors",
    "/consultation",
    "/blog",
    "/about",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
    "/shipping-policy",
    "/refund-policy",
    "/gallery",
    "/testimonials",
    "/videos",
    "/recipes",
    "/research",
    "/case-studies",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const productRoutes = PRODUCTS.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const categoryRoutes = HEALTH_CATEGORIES.map((c) => ({
    url: `${base}/health-concerns/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const doctorRoutes = DOCTORS.map((d) => ({
    url: `${base}/doctors/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes = BLOG_POSTS.map((b) => ({
    url: `${base}/blog/${b.slug}`,
    lastModified: new Date(b.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...productRoutes, ...categoryRoutes, ...doctorRoutes, ...blogRoutes];
}
