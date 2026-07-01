import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProductCard } from "@/components/shared/product-card";
import { PRODUCTS } from "@/lib/data/products";

export function FeaturedProducts() {
  const featured = PRODUCTS.slice(0, 8);

  return (
    <section className="py-24 bg-ivory-100">
      <div className="container-vaidyam">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wide text-turmeric-600">
              Featured
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-forest-900 mt-3 text-balance">
              Our most trusted formulations
            </h2>
          </div>
          <Link
            href="/products"
            className="flex items-center gap-1 text-sm font-medium text-forest-900 hover:text-turmeric-600 transition-colors shrink-0"
          >
            View all products <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
