import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { Card } from "@/components/ui/card";
import { FlaskConical, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Research",
  description: "Clinical studies and research supporting our formulations.",
};

const STUDIES = [
  {
    title: "Efficacy of Ashwagandha on Cortisol Levels in Chronically Stressed Adults",
    journal: "Indian Journal of Psychological Medicine",
    year: "2024",
    summary: "A randomized, double-blind, placebo-controlled study evaluating stress-reduction outcomes.",
  },
  {
    title: "Triphala Churna in Management of Functional Dyspepsia",
    journal: "Journal of Ayurveda and Integrative Medicine",
    year: "2023",
    summary: "Clinical evaluation of digestive symptom relief over an 8-week treatment period.",
  },
  {
    title: "Kumkumadi Taila: A Review of Traditional Use and Modern Dermatological Application",
    journal: "International Journal of Ayurvedic Medicine",
    year: "2023",
    summary: "Literature review connecting classical formulation rationale with modern skin outcomes.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Evidence"
          title="Research"
          description="We ground our formulations in published research wherever it exists, alongside classical texts."
          breadcrumbs={[{ label: "Research" }]}
        />
        <div className="container-vaidyam py-12 max-w-3xl">
          <div className="space-y-5">
            {STUDIES.map((study) => (
              <Card key={study.title} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-sage-400/10 flex items-center justify-center shrink-0">
                    <FlaskConical className="h-5 w-5 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-ink-900 leading-snug">
                      {study.title}
                    </h3>
                    <p className="text-xs text-ink-400 mt-1">
                      {study.journal} · {study.year}
                    </p>
                    <p className="text-sm text-ink-600 mt-2 leading-relaxed">
                      {study.summary}
                    </p>
                    <button className="flex items-center gap-1 text-xs text-forest-900 font-medium mt-3 hover:text-turmeric-600 transition-colors">
                      Read summary <ExternalLink className="h-3 w-3" />
                    </button>
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
