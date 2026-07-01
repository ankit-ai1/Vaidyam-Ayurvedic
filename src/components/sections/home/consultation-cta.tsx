import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormulationStrip } from "@/components/shared/formulation-strip";

export function ConsultationCTA() {
  return (
    <section className="py-24 bg-ivory-100">
      <div className="container-vaidyam">
        <div className="relative rounded-[2rem] bg-gradient-to-br from-forest-900 to-forest-800 overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center">
          <Image
            src="https://images.unsplash.com/photo-1637715179830-a0de86dc0c4e?q=80&w=1400&auto=format&fit=crop"
            alt=""
            fill
            aria-hidden="true"
            sizes="100vw"
            className="object-cover opacity-15 mix-blend-luminosity"
          />
          <div
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-turmeric-500/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative max-w-2xl mx-auto">
            <FormulationStrip
              ingredients={["Personalized", "Doctor-Reviewed", "Ongoing Support"]}
              className="justify-center text-turmeric-400 mb-6"
            />
            <h2 className="font-display text-4xl md:text-5xl font-medium text-ivory-50 text-balance">
              Ready to start with a real conversation?
            </h2>
            <p className="text-ivory-100/60 mt-4 text-lg">
              Book a 1:1 consultation and walk away with a plan built for your
              body, not a general recommendation.
            </p>
            <Link href="/consultation" className="inline-block mt-8">
              <Button variant="gold" size="lg">
                Book Your Consultation <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
