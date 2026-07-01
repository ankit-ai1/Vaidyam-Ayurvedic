import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Case Studies",
  description: "Real, anonymized patient journeys from consultation to outcome.",
};

const CASES = [
  {
    title: "Managing PCOS Symptoms Over 6 Months",
    concern: "Women's Health",
    summary:
      "A 29-year-old patient presented with irregular cycles and fatigue. A combined approach of dietary adjustment, Shatavari-based formulation, and monthly follow-ups led to cycle regularity within 4 months.",
  },
  {
    title: "Chronic Digestive Discomfort Resolution",
    concern: "Digestion",
    summary:
      "A 41-year-old patient with 3 years of intermittent bloating and acid reflux saw significant symptom reduction after 8 weeks on a Triphala-based protocol combined with meal-timing changes.",
  },
  {
    title: "Joint Mobility in Early-Stage Osteoarthritis",
    concern: "Joint Care",
    summary:
      "A 55-year-old patient with knee stiffness improved mobility scores by 40% over 12 weeks using a combination of Mahanarayan oil massage and internal anti-inflammatory formulation.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Real Outcomes"
          title="Case Studies"
          description="Anonymized patient journeys, shared with consent, to illustrate what a full treatment plan can look like."
          breadcrumbs={[{ label: "Case Studies" }]}
        />
        <div className="container-vaidyam py-12 max-w-3xl space-y-6">
          {CASES.map((c) => (
            <Card key={c.title} className="p-7">
              <Badge variant="forest">{c.concern}</Badge>
              <h3 className="font-display text-xl text-ink-900 mt-3 mb-2">{c.title}</h3>
              <p className="text-ink-600 leading-relaxed text-sm">{c.summary}</p>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
