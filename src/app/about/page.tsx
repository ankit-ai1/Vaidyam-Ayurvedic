import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { CertificationsStrip } from "@/components/sections/home/certifications-strip";
import { Card } from "@/components/ui/card";
import { Users, Target, Heart } from "lucide-react";

export const metadata = {
  title: "About Us",
  description: "The story behind Vaidyam and our commitment to transparent, doctor-backed Ayurveda.",
};

const VALUES = [
  {
    icon: Heart,
    title: "Patient First",
    description: "Every product decision starts with a real clinical need, not a marketing trend.",
  },
  {
    icon: Target,
    title: "Radical Transparency",
    description: "Full ingredient disclosure on every product — no proprietary blends hiding filler.",
  },
  {
    icon: Users,
    title: "Doctor-Led",
    description: "Every formulation is reviewed and approved by a certified Vaidya before release.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Our Story"
          title="Built by doctors, not marketers"
          description="Vaidyam started as a small clinic's effort to make trustworthy Ayurvedic medicine accessible beyond a single city — it's grown, but the standard hasn't changed."
          breadcrumbs={[{ label: "About" }]}
        />

        <section className="container-vaidyam py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-[2rem] bg-gradient-to-br from-sage-400/15 to-turmeric-400/15 relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=1200&auto=format&fit=crop"
                alt="Vaidyam doctors walking through the clinic hallway"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-medium text-forest-900 mb-4">
                Twenty years, one standard
              </h2>
              <p className="text-ink-600 leading-relaxed">
                What began as Dr. Rajesh Kumar&apos;s single-room clinic in
                2006 has grown into a team of over 100 certified Vaidyas —
                but every formulation we sell still goes through the same
                internal review process it did on day one: full disclosure,
                clinical rationale, and a doctor&apos;s sign-off before it
                reaches a shelf.
              </p>
              <p className="text-ink-600 leading-relaxed mt-4">
                We don&apos;t believe Ayurveda needs to be mysterious to be
                effective. If we can&apos;t explain why an ingredient is in a
                formulation and what it&apos;s meant to do, it doesn&apos;t
                go in the bottle.
              </p>
            </div>
          </div>
        </section>

        <CertificationsStrip />

        <section className="container-vaidyam py-16">
          <h2 className="font-display text-3xl font-medium text-forest-900 mb-10 text-center">
            What we stand for
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <Card key={v.title} className="p-7 text-center">
                <div className="h-12 w-12 rounded-2xl bg-forest-900/5 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-6 w-6 text-forest-800" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl text-ink-900 mb-2">{v.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{v.description}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
