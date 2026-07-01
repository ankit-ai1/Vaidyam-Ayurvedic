import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DOCTORS } from "@/lib/data/doctors";
import { formatCurrency } from "@/lib/utils/format";
import { Star, Calendar } from "lucide-react";

export const metadata = {
  title: "Our Doctors",
  description: "Meet our certified Vaidyas across specializations, and book a consultation.",
};

export default function DoctorsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Our Team"
          title="Certified Vaidyas"
          description="Every doctor on Vaidyam holds a BAMS qualification at minimum, with years of clinical practice behind them."
          breadcrumbs={[{ label: "Doctors" }]}
        />
        <div className="container-vaidyam py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOCTORS.map((doctor) => (
              <Card key={doctor.id} className="overflow-hidden hover:shadow-lifted transition-shadow">
                <Link href={`/doctors/${doctor.slug}`}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-sage-400/15 to-turmeric-400/15 relative overflow-hidden">
                    <Image
                      src={doctor.image}
                      alt={`Portrait of ${doctor.name}, ${doctor.specialization} specialist`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Link>
                <div className="p-5">
                  <Link href={`/doctors/${doctor.slug}`}>
                    <h3 className="font-display text-lg font-medium text-ink-900 hover:text-forest-700 transition-colors">
                      {doctor.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-turmeric-600 mt-0.5">{doctor.specialization}</p>
                  <p className="text-xs text-ink-500 mt-1">
                    {doctor.qualification} · {doctor.experienceYears}+ yrs
                  </p>
                  <div className="flex items-center gap-1 mt-3 text-xs text-ink-600">
                    <Star className="h-3.5 w-3.5 text-turmeric-500 fill-current" />
                    {doctor.rating} ({doctor.reviewCount})
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-ink-900/[0.06]">
                    <span className="font-mono text-sm text-forest-900">
                      {formatCurrency(doctor.consultationFee)}
                    </span>
                    <Link href={`/consultation?doctor=${doctor.slug}`}>
                      <Button variant="primary" size="sm">
                        <Calendar className="h-3.5 w-3.5" /> Book
                      </Button>
                    </Link>
                  </div>
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
