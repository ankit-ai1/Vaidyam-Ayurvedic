export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  price: number;
  mrp: number;
  rating: number;
  reviewCount: number;
  ingredients: string[];
  category: string;
  image: string;
  badge?: "bestseller" | "new" | "sale";
  inStock: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "immunity-care-capsules",
    name: "Immunity Care Capsules",
    shortDescription: "Daily immunity support with Ashwagandha and Giloy",
    price: 899,
    mrp: 1299,
    rating: 4.6,
    reviewCount: 214,
    ingredients: ["Ashwagandha", "Giloy", "Amla"],
    category: "immunity",
    image: "https://images.unsplash.com/photo-1763668331599-487470fb85b2?q=80&w=800&auto=format&fit=crop",
    badge: "bestseller",
    inStock: true,
  },
  {
    id: "2",
    slug: "liver-detox-tablets",
    name: "Liver Detox Tablets",
    shortDescription: "Supports healthy liver function and digestion",
    price: 649,
    mrp: 899,
    rating: 4.4,
    reviewCount: 156,
    ingredients: ["Bhumi Amla", "Kalmegh", "Punarnava"],
    category: "liver-care",
    image: "https://images.unsplash.com/photo-1664216294573-b28282de564b?q=80&w=800&auto=format&fit=crop",
    inStock: true,
  },
  {
    id: "3",
    slug: "radiant-skin-oil",
    name: "Radiant Skin Face Oil",
    shortDescription: "Cold-pressed facial oil for glowing, even-toned skin",
    price: 549,
    mrp: 699,
    rating: 4.8,
    reviewCount: 302,
    ingredients: ["Kumkumadi", "Saffron", "Sandalwood"],
    category: "skin-care",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop",
    badge: "bestseller",
    inStock: true,
  },
  {
    id: "4",
    slug: "hair-growth-serum",
    name: "Hair Growth Serum",
    shortDescription: "Strengthens roots and reduces hair fall",
    price: 749,
    mrp: 999,
    rating: 4.5,
    reviewCount: 189,
    ingredients: ["Bhringraj", "Amla", "Neem"],
    category: "hair-care",
    image: "https://images.unsplash.com/photo-1671493234254-15fc6c91aa87?q=80&w=800&auto=format&fit=crop",
    badge: "new",
    inStock: true,
  },
  {
    id: "5",
    slug: "kidney-wellness-tablets",
    name: "Kidney Wellness Tablets",
    shortDescription: "Supports natural kidney function and detoxification",
    price: 799,
    mrp: 999,
    rating: 4.3,
    reviewCount: 98,
    ingredients: ["Punarnava", "Gokshura", "Varun"],
    category: "kidney-care",
    image: "https://images.unsplash.com/photo-1670850757263-6efc07d410f8?q=80&w=800&auto=format&fit=crop",
    inStock: true,
  },
  {
    id: "6",
    slug: "womens-balance-capsules",
    name: "Women's Hormonal Balance Capsules",
    shortDescription: "Eases hormonal fluctuations, supports cycle regularity",
    price: 899,
    mrp: 1199,
    rating: 4.7,
    reviewCount: 267,
    ingredients: ["Shatavari", "Ashoka", "Lodhra"],
    category: "womens-health",
    image: "https://images.unsplash.com/photo-1664216294580-079bc527ae49?q=80&w=800&auto=format&fit=crop",
    badge: "bestseller",
    inStock: true,
  },
  {
    id: "7",
    slug: "mens-vitality-capsules",
    name: "Men's Vitality Capsules",
    shortDescription: "Supports stamina, strength and overall vitality",
    price: 999,
    mrp: 1399,
    rating: 4.5,
    reviewCount: 178,
    ingredients: ["Ashwagandha", "Safed Musli", "Shilajit"],
    category: "mens-health",
    image: "https://images.unsplash.com/photo-1670850756917-8ed6c2a71e12?q=80&w=800&auto=format&fit=crop",
    inStock: true,
  },
  {
    id: "8",
    slug: "heart-care-tablets",
    name: "Heart Care Tablets",
    shortDescription: "Supports healthy cholesterol and cardiac function",
    price: 749,
    mrp: 949,
    rating: 4.4,
    reviewCount: 132,
    ingredients: ["Arjuna", "Pushkarmool", "Guggul"],
    category: "heart-care",
    image: "https://images.unsplash.com/photo-1664786908163-85ca46f85138?q=80&w=800&auto=format&fit=crop",
    inStock: true,
  },
  {
    id: "9",
    slug: "digestive-care-syrup",
    name: "Digestive Care Syrup",
    shortDescription: "Relieves bloating, gas and indigestion naturally",
    price: 349,
    mrp: 449,
    rating: 4.6,
    reviewCount: 421,
    ingredients: ["Triphala", "Ajwain", "Saunf"],
    category: "digestion",
    image: "https://images.unsplash.com/photo-1671492248078-a4bda519c852?q=80&w=800&auto=format&fit=crop",
    badge: "bestseller",
    inStock: true,
  },
  {
    id: "10",
    slug: "kids-immunity-syrup",
    name: "Kids Immunity Syrup",
    shortDescription: "Gentle immunity booster formulated for children",
    price: 399,
    mrp: 499,
    rating: 4.7,
    reviewCount: 245,
    ingredients: ["Giloy", "Amla", "Mulethi"],
    category: "childrens-health",
    image: "https://images.unsplash.com/photo-1635166304271-04931640a450?q=80&w=800&auto=format&fit=crop",
    inStock: true,
  },
  {
    id: "11",
    slug: "respiratory-care-syrup",
    name: "Respiratory Care Syrup",
    shortDescription: "Eases cough, congestion and supports lung health",
    price: 299,
    mrp: 399,
    rating: 4.5,
    reviewCount: 167,
    ingredients: ["Vasaka", "Tulsi", "Mulethi"],
    category: "respiratory-care",
    image: "https://images.unsplash.com/photo-1608571702600-5a5419d31475?q=80&w=800&auto=format&fit=crop",
    inStock: true,
  },
  {
    id: "12",
    slug: "joint-pain-relief-oil",
    name: "Joint Pain Relief Oil",
    shortDescription: "Fast-acting massage oil for joint and muscle pain",
    price: 449,
    mrp: 599,
    rating: 4.6,
    reviewCount: 389,
    ingredients: ["Mahanarayan", "Nirgundi", "Eucalyptus"],
    category: "joint-muscle-care",
    image: "https://images.unsplash.com/photo-1671493229066-f36e86b35841?q=80&w=800&auto=format&fit=crop",
    badge: "bestseller",
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, limit);
}
