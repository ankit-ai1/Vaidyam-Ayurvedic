import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DOCTORS, getDoctorBySlug } from "@/lib/data/doctors";
import { formatCurrency } from "@/lib/utils/format";
import { Star, Calendar, Languages, GraduationCap, Clock } from "lucide-react";

export function generateStaticParams() {
  return DOCTORS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return {};
  return {
    title: doctor.name,
    description: `${doctor.specialization} — ${doctor.qualification}, ${doctor.experienceYears}+ years of experience.`,
  };
}

const SLOTS = ["9:00 AM", "11:30 AM", "2:00 PM", "4:30 PM", "6:00 PM"];

export default async function DoctorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  return (
    <>
      <Header />
      <main>
        <PageHeader
          breadcrumbs={[
            { label: "Doctors", href: "/doctors" },
            { label: doctor.name },
          ]}
          title=""
        />

        <div className="container-vaidyam py-12">
          <div className="grid lg:grid-cols-[380px_1fr] gap-10">
            {/* Left: profile card */}
            <div>
              <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-forest-800 to-forest-900 relative overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={`Portrait of ${doctor.name}, ${doctor.specialization} specialist`}
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  priority
                  className="object-cover"
                />
              </div>
              <Card className="mt-4 p-5">
                <div className="flex items-center gap-1 text-sm text-ink-700">
                  <Star className="h-4 w-4 text-turmeric-500 fill-current" />
                  {doctor.rating} rating · {doctor.reviewCount} reviews
                </div>
                <div className="flex items-center gap-2 text-sm text-ink-600 mt-3">
                  <GraduationCap className="h-4 w-4 text-sage-600" /> {doctor.qualification}
                </div>
                <div className="flex items-center gap-2 text-sm text-ink-600 mt-2">
                  <Clock className="h-4 w-4 text-sage-600" /> {doctor.experienceYears}+ years experience
                </div>
                <div className="flex items-center gap-2 text-sm text-ink-600 mt-2">
                  <Languages className="h-4 w-4 text-sage-600" /> {doctor.languages.join(", ")}
                </div>
              </Card>
            </div>

            {/* Right: details + booking */}
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-medium text-forest-900">
                {doctor.name}
              </h1>
              <p className="text-turmeric-600 mt-1">{doctor.specialization}</p>
              <p className="text-ink-600 leading-relaxed mt-5 max-w-2xl">
                {doctor.about}
              </p>

              <Card className="mt-8 p-6">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-display text-lg text-forest-900">
                    Book a Consultation
                  </h3>
                  <span className="font-mono text-lg text-forest-900">
                    {formatCurrency(doctor.consultationFee)}
                  </span>
                </div>
                <p className="text-xs text-ink-500 uppercase tracking-wide font-mono mb-3">
                  Available today
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {SLOTS.map((slot) => (
                    <button
                      key={slot}
                      className="text-sm px-4 py-2 rounded-full border border-ink-100 text-ink-700 hover:border-forest-900 hover:bg-forest-900 hover:text-ivory-50 transition-colors"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                <Link href={`/consultation?doctor=${doctor.slug}`}>
                  <Button variant="primary" size="lg" className="w-full">
                    <Calendar className="h-4 w-4" /> Continue to Booking
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
