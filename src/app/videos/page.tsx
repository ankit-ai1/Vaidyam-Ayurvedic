import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock } from "lucide-react";

export const metadata = {
  title: "Video Library",
  description: "Watch doctor explainers, product demos, and daily wellness routines.",
};

const VIDEOS = [
  {
    title: "Understanding Your Dosha in 5 Minutes",
    category: "Fundamentals",
    duration: "5:24",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    alt: "A person meditating calmly on the floor",
  },
  {
    title: "How to Use Kumkumadi Face Oil Correctly",
    category: "Skin Care",
    duration: "3:12",
    image: "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?q=80&w=800&auto=format&fit=crop",
    alt: "A hand holding a dropper of facial oil",
  },
  {
    title: "A Morning Digestion Ritual",
    category: "Digestion",
    duration: "6:47",
    image: "https://images.unsplash.com/photo-1602153508668-80b6f872497e?q=80&w=800&auto=format&fit=crop",
    alt: "A white ceramic tea cup on a wooden table",
  },
  {
    title: "Panchakarma: What to Actually Expect",
    category: "Treatments",
    duration: "9:03",
    image: "https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?q=80&w=800&auto=format&fit=crop",
    alt: "A woman receiving a back massage at a wellness spa",
  },
  {
    title: "Ashwagandha — Sourcing to Bottle",
    category: "Behind the Scenes",
    duration: "4:56",
    image: "https://images.unsplash.com/photo-1492552296703-4ec0a2fb3715?q=80&w=800&auto=format&fit=crop",
    alt: "A gray ceramic mortar and pestle used for grinding herbs",
  },
  {
    title: "Managing Joint Pain Without Overmedicating",
    category: "Joint Care",
    duration: "7:18",
    image: "https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?q=80&w=800&auto=format&fit=crop",
    alt: "A massage therapist giving a back massage to relieve pain",
  },
];

export default function VideosPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Watch & Learn"
          title="Video Library"
          description="Short, doctor-led videos on everyday Ayurvedic practice."
          breadcrumbs={[{ label: "Videos" }]}
        />
        <div className="container-vaidyam py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VIDEOS.map((video) => (
              <Card key={video.title} className="overflow-hidden hover:shadow-lifted transition-shadow cursor-pointer group">
                <div className="aspect-video bg-gradient-to-br from-forest-800 to-forest-900 relative overflow-hidden">
                  <Image
                    src={video.image}
                    alt={video.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-forest-950/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-ivory-50/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-5 w-5 text-forest-900 fill-current ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 text-xs font-mono bg-forest-950/70 text-ivory-50 px-2 py-0.5 rounded flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {video.duration}
                  </span>
                </div>
                <div className="p-5">
                  <Badge variant="sage">{video.category}</Badge>
                  <h3 className="font-display text-base font-medium text-ink-900 mt-2 leading-snug">
                    {video.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
