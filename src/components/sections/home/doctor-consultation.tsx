import Image from "next/image";
import Link from "next/link";
import { Star, Calendar, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DOCTORS } from "@/lib/data/doctors";
import { formatCurrency } from "@/lib/utils/format";

export function DoctorConsultation() {
  return (
    <section className="py-24 bg-forest-900 text-ivory-100">
      <div className="container-vaidyam">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wide text-turmeric-400">
              Consult a Vaidya
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-ivory-50 mt-3 text-balance">
              Talk to a doctor before you self-prescribe
            </h2>
          </div>
          <Link
            href="/doctors"
            className="flex items-center gap-1 text-sm font-medium text-ivory-100 hover:text-turmeric-400 transition-colors shrink-0"
          >
            View all doctors <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((doctor) => (
            <Card
              key={doctor.id}
              className="bg-forest-800 border-ivory-100/10 overflow-hidden hover:shadow-lifted transition-shadow"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-forest-700 to-forest-800 relative overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={`Portrait of ${doctor.name}, ${doctor.specialization} specialist`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-medium text-ivory-50">
                  {doctor.name}
                </h3>
                <p className="text-xs text-turmeric-400 mt-0.5">
                  {doctor.specialization}
                </p>
                <p className="text-xs text-ivory-100/50 mt-1">
                  {doctor.qualification} · {doctor.experienceYears}+ yrs
                </p>
                <div className="flex items-center gap-1 mt-3 text-xs text-ivory-100/70">
                  <Star className="h-3.5 w-3.5 text-turmeric-400 fill-current" />
                  {doctor.rating} ({doctor.reviewCount})
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-ivory-100/10">
                  <span className="font-mono text-sm text-ivory-50">
                    {formatCurrency(doctor.consultationFee)}
                  </span>
                  <Link href={`/consultation?doctor=${doctor.slug}`}>
                    <Button variant="gold" size="sm">
                      <Calendar className="h-3.5 w-3.5" />
                      Book
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
