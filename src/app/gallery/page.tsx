import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";

export const metadata = {
  title: "Gallery",
  description: "A look inside Vaidyam's clinics, manufacturing facility, and team.",
};

const GALLERY_ITEMS = [
  {
    title: "Manufacturing Facility",
    image: "https://images.unsplash.com/photo-1745420052527-a75fcc6aba58?q=80&w=1200&auto=format&fit=crop",
    alt: "Bottles being filled on an automated pharmaceutical production line",
  },
  {
    title: "Herb Sourcing",
    image: "https://images.unsplash.com/photo-1637715179830-a0de86dc0c4e?q=80&w=1200&auto=format&fit=crop",
    alt: "A collection of freshly harvested medicinal leaves and herbs",
  },
  {
    title: "Quality Lab",
    image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=1200&auto=format&fit=crop",
    alt: "A scientist using a pipette with test tubes in a quality control lab",
  },
  {
    title: "Consultation Room",
    image: "https://images.unsplash.com/photo-1666886573531-48d2e3c2b684?q=80&w=1200&auto=format&fit=crop",
    alt: "A doctor showing a patient information on a tablet during a consultation",
  },
  {
    title: "Packaging Line",
    image: "https://images.unsplash.com/photo-1780145180040-0beda1df60e6?q=80&w=1200&auto=format&fit=crop",
    alt: "Bottles moving along a factory packaging conveyor belt",
  },
  {
    title: "Doctor Team",
    image: "https://images.unsplash.com/photo-1778230123972-07eafe417fc4?q=80&w=1200&auto=format&fit=crop",
    alt: "A group of smiling Vaidyam doctors in white coats",
  },
  {
    title: "Warehouse",
    image: "https://images.unsplash.com/photo-1672552226380-486fe900b322?q=80&w=1200&auto=format&fit=crop",
    alt: "A warehouse filled with stacked boxes and pallets of finished product",
  },
  {
    title: "Herb Garden",
    image: "https://images.unsplash.com/photo-1623280293345-6b88f36fa46d?q=80&w=1200&auto=format&fit=crop",
    alt: "A flowering herb garden used for cultivating Ayurvedic ingredients",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader eyebrow="Behind the Scenes" title="Gallery" breadcrumbs={[{ label: "Gallery" }]} />
        <div className="container-vaidyam py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={item.title}
                className={`relative aspect-square rounded-2xl bg-gradient-to-br from-sage-400/15 to-turmeric-400/15 overflow-hidden ${
                  i % 5 === 0 ? "col-span-2 row-span-2 aspect-auto" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 right-3 font-display text-ivory-50 text-sm text-center px-2 py-1 rounded-lg bg-forest-950/50 backdrop-blur-sm">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
