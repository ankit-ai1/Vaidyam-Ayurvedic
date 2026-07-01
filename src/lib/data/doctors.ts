export interface Doctor {
  id: string;
  slug: string;
  name: string;
  specialization: string;
  qualification: string;
  experienceYears: number;
  rating: number;
  reviewCount: number;
  consultationFee: number;
  image: string;
  languages: string[];
  about: string;
}

export const DOCTORS: Doctor[] = [
  {
    id: "1",
    slug: "dr-anjali-rao",
    name: "Dr. Anjali Rao",
    specialization: "Women's Health & Hormonal Balance",
    qualification: "BAMS, MD (Ayurveda)",
    experienceYears: 18,
    rating: 4.9,
    reviewCount: 512,
    consultationFee: 499,
    image: "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?q=80&w=800&auto=format&fit=crop",
    languages: ["English", "Hindi"],
    about:
      "Dr. Rao specializes in women's hormonal health, PCOS management, and prenatal Ayurvedic care, blending classical texts with modern diagnostics.",
  },
  {
    id: "2",
    slug: "dr-vikram-shah",
    name: "Dr. Vikram Shah",
    specialization: "Digestive & Liver Disorders",
    qualification: "BAMS, PhD (Panchakarma)",
    experienceYears: 22,
    rating: 4.8,
    reviewCount: 389,
    consultationFee: 599,
    image: "https://images.unsplash.com/photo-1678940805950-73f2127f9d4e?q=80&w=800&auto=format&fit=crop",
    languages: ["English", "Hindi", "Gujarati"],
    about:
      "With over two decades of clinical practice, Dr. Shah focuses on chronic digestive disorders, liver detoxification, and Panchakarma therapy.",
  },
  {
    id: "3",
    slug: "dr-meera-nair",
    name: "Dr. Meera Nair",
    specialization: "Skin & Hair Care",
    qualification: "BAMS, MD (Kayachikitsa)",
    experienceYears: 14,
    rating: 4.7,
    reviewCount: 276,
    consultationFee: 449,
    image: "https://images.unsplash.com/photo-1757125736482-328a3cdd9743?q=80&w=800&auto=format&fit=crop",
    languages: ["English", "Malayalam", "Hindi"],
    about:
      "Dr. Nair treats chronic skin conditions and hair loss using traditional Kerala Ayurvedic protocols alongside modern dermatological understanding.",
  },
  {
    id: "4",
    slug: "dr-arjun-mehta",
    name: "Dr. Arjun Mehta",
    specialization: "Joint & Muscle Care",
    qualification: "BAMS, MS (Ayurveda)",
    experienceYears: 16,
    rating: 4.8,
    reviewCount: 341,
    consultationFee: 549,
    image: "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?q=80&w=800&auto=format&fit=crop",
    languages: ["English", "Hindi", "Punjabi"],
    about:
      "Dr. Mehta specializes in arthritis, joint pain, and sports injury recovery through therapeutic oils, diet, and targeted Panchakarma.",
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return DOCTORS.find((d) => d.slug === slug);
}
