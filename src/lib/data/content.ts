export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  productUsed?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    quote:
      "After three months on the Immunity Care Capsules, I've had far fewer seasonal colds. The consultation before starting made all the difference.",
    productUsed: "Immunity Care Capsules",
  },
  {
    id: "2",
    name: "Rohit Verma",
    location: "Delhi",
    rating: 5,
    quote:
      "Dr. Shah took the time to understand my digestion issues properly, not just prescribe something generic. Genuinely felt heard.",
    productUsed: "Liver Detox Tablets",
  },
  {
    id: "3",
    name: "Ananya Iyer",
    location: "Bengaluru",
    rating: 4,
    quote:
      "The skin oil has a lovely texture and smell, unlike other Ayurvedic oils I've tried. My skin tone has evened out noticeably.",
    productUsed: "Radiant Skin Face Oil",
  },
  {
    id: "4",
    name: "Karan Malhotra",
    location: "Chandigarh",
    rating: 5,
    quote:
      "Ordering was simple, delivery was fast, and the joint pain oil actually works — I was skeptical at first.",
    productUsed: "Joint Pain Relief Oil",
  },
];

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readTimeMinutes: number;
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "understanding-your-dosha",
    title: "Understanding Your Dosha: A Practical Starting Point",
    excerpt:
      "Vata, Pitta, and Kapha aren't abstract labels — they're a practical framework for understanding your own patterns of energy, digestion, and stress response.",
    category: "Fundamentals",
    author: "Dr. Anjali Rao",
    publishedAt: "2026-05-14",
    readTimeMinutes: 6,
    image: "https://images.unsplash.com/photo-1517363898874-737b62a7db91?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "2",
    slug: "five-foods-for-better-digestion",
    title: "Five Everyday Foods That Support Better Digestion",
    excerpt:
      "Small, consistent dietary choices often matter more than any single remedy. Here's where to start if digestion has been a persistent issue.",
    category: "Nutrition",
    author: "Dr. Vikram Shah",
    publishedAt: "2026-04-28",
    readTimeMinutes: 5,
    image: "https://images.unsplash.com/photo-1714062105876-1756a22c4caf?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "3",
    slug: "building-a-morning-skincare-ritual",
    title: "Building a Morning Skincare Ritual With Ayurvedic Oils",
    excerpt:
      "A simple, repeatable morning routine, and what each step is actually doing for your skin over time.",
    category: "Skin Care",
    author: "Dr. Meera Nair",
    publishedAt: "2026-06-02",
    readTimeMinutes: 4,
    image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1000&auto=format&fit=crop",
  },
];
