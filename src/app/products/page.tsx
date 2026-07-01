"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { ProductCard } from "@/components/shared/product-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PRODUCTS } from "@/lib/data/products";
import { HEALTH_CATEGORIES } from "@/lib/constants/site";
import { SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";

type SortOption = "featured" | "price-low" | "price-high" | "rating";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sort, setSort] = useState<SortOption>("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [maxPrice, setMaxPrice] = useState(1500);

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => p.price <= maxPrice);
    if (selectedCategory) {
      list = list.filter((p) => p.category === selectedCategory);
    }
    switch (sort) {
      case "price-low":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
    }
    return list;
  }, [selectedCategory, sort, maxPrice]);

  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Shop"
          title="All Products"
          description="Every formulation is doctor-reviewed and lists its full ingredient panel — no proprietary blends."
          breadcrumbs={[{ label: "Products" }]}
        />

        <div className="container-vaidyam py-12">
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <p className="text-sm text-ink-500">{filtered.length} products</p>
            <Button variant="outline" size="sm" onClick={() => setFiltersOpen(true)}>
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </Button>
          </div>

          <div className="grid lg:grid-cols-[260px_1fr] gap-10">
            {/* Sidebar filters (desktop) */}
            <aside className="hidden lg:block space-y-8">
              <FilterPanel
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
              />
            </aside>

            {/* Mobile filter drawer */}
            {filtersOpen && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div
                  className="absolute inset-0 bg-forest-950/40"
                  onClick={() => setFiltersOpen(false)}
                />
                <div className="absolute right-0 top-0 bottom-0 w-80 bg-ivory-50 p-6 overflow-y-auto animate-fade-in">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-display text-lg text-forest-900">Filters</h3>
                    <button onClick={() => setFiltersOpen(false)} aria-label="Close filters">
                      <X className="h-5 w-5 text-ink-500" />
                    </button>
                  </div>
                  <FilterPanel
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    maxPrice={maxPrice}
                    setMaxPrice={setMaxPrice}
                  />
                </div>
              </div>
            )}

            {/* Products grid */}
            <div>
              <div className="hidden lg:flex items-center justify-between mb-6">
                <p className="text-sm text-ink-500">{filtered.length} products</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-ink-500">Sort:</span>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortOption)}
                    className="text-sm border border-ink-100 rounded-full px-3 py-1.5 bg-ivory-50 text-ink-700"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-24">
                  <p className="text-ink-500">No products match these filters.</p>
                  <Button
                    variant="link"
                    className="mt-2"
                    onClick={() => {
                      setSelectedCategory(null);
                      setMaxPrice(1500);
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function FilterPanel({
  selectedCategory,
  setSelectedCategory,
  maxPrice,
  setMaxPrice,
}: {
  selectedCategory: string | null;
  setSelectedCategory: (v: string | null) => void;
  maxPrice: number;
  setMaxPrice: (v: number) => void;
}) {
  return (
    <>
      <div>
        <h3 className="text-sm font-medium text-ink-900 mb-3">Category</h3>
        <div className="space-y-1">
          <button
            onClick={() => setSelectedCategory(null)}
            className={cn(
              "w-full text-left text-sm px-3 py-2 rounded-lg transition-colors",
              !selectedCategory ? "bg-forest-900 text-ivory-50" : "text-ink-600 hover:bg-ink-900/5"
            )}
          >
            All Categories
          </button>
          {HEALTH_CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={cn(
                "w-full text-left text-sm px-3 py-2 rounded-lg transition-colors",
                selectedCategory === cat.slug
                  ? "bg-forest-900 text-ivory-50"
                  : "text-ink-600 hover:bg-ink-900/5"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-ink-900 mb-3">
          Max Price: <Badge variant="gold">₹{maxPrice}</Badge>
        </h3>
        <input
          type="range"
          min={200}
          max={1500}
          step={50}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-turmeric-500"
        />
      </div>
    </>
  );
}
