export const SITE_CONFIG = {
  name: "Vaidyam",
  tagline: "Rooted in Ayurveda, Backed by Science",
  description:
    "Premium, doctor-formulated Ayurvedic medicines and wellness products.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const HEALTH_CATEGORIES = [
  { name: "Immunity", slug: "immunity" },
  { name: "Liver Care", slug: "liver-care" },
  { name: "Skin Care", slug: "skin-care" },
  { name: "Hair Care", slug: "hair-care" },
  { name: "Kidney Care", slug: "kidney-care" },
  { name: "Women's Health", slug: "womens-health" },
  { name: "Men's Health", slug: "mens-health" },
  { name: "Heart Care", slug: "heart-care" },
  { name: "Digestion", slug: "digestion" },
  { name: "Children's Health", slug: "childrens-health" },
  { name: "Respiratory Care", slug: "respiratory-care" },
  { name: "Joint & Muscle Care", slug: "joint-muscle-care" },
  { name: "Brain & Nervous System", slug: "brain-nervous-system" },
  { name: "Diabetes Support", slug: "diabetes-support" },
  { name: "Weight Management", slug: "weight-management" },
] as const;

export const MAIN_NAV = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Health Concerns", href: "/health-concerns" },
  { label: "Doctors", href: "/doctors" },
  { label: "Knowledge Hub", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
