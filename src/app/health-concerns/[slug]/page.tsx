import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { ProductCard } from "@/components/shared/product-card";
import { HEALTH_CATEGORIES } from "@/lib/constants/site";
import { getProductsByCategory } from "@/lib/data/products";

export function generateStaticParams() {
  return HEALTH_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = HEALTH_CATEGORIES.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: category.name,
    description: `Ayurvedic formulations for ${category.name.toLowerCase()}, reviewed by certified Vaidyas.`,
  };
}

export default async function HealthConcernDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = HEALTH_CATEGORIES.find((c) => c.slug === slug);
  if (!category) notFound();

  const products = getProductsByCategory(slug);

  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Health Concern"
          title={category.name}
          description={`Formulations selected by our medical team to support ${category.name.toLowerCase()}.`}
          breadcrumbs={[
            { label: "Health Concerns", href: "/health-concerns" },
            { label: category.name },
          ]}
        />
        <div className="container-vaidyam py-12">
          {products.length === 0 ? (
            <p className="text-ink-500">
              No products are currently listed under this concern. Check back
              soon, or browse{" "}
              <Link href="/products" className="text-forest-900 underline">
                all products
              </Link>
              .
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
