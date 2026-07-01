import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { HEALTH_CATEGORIES } from "@/lib/constants/site";
import { getProductsByCategory } from "@/lib/data/products";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Health Concerns",
  description: "Browse Ayurvedic formulations by the health concern you're addressing.",
};

export default function HealthConcernsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Browse"
          title="Shop by Health Concern"
          description="Every category is curated by our medical team — start with what's actually bothering you."
          breadcrumbs={[{ label: "Health Concerns" }]}
        />
        <div className="container-vaidyam py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HEALTH_CATEGORIES.map((cat) => {
              const count = getProductsByCategory(cat.slug).length;
              return (
                <Link
                  key={cat.slug}
                  href={`/health-concerns/${cat.slug}`}
                  className="group rounded-2xl bg-ivory-50 border border-ink-900/[0.06] p-7 hover:border-turmeric-400/40 hover:shadow-soft transition-all"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-medium text-ink-900 group-hover:text-forest-700 transition-colors">
                      {cat.name}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-ink-300 group-hover:text-turmeric-500 transition-colors" />
                  </div>
                  <p className="text-sm text-ink-500 mt-2">
                    {count} formulation{count === 1 ? "" : "s"} available
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
