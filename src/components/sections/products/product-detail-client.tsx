"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { FormulationStrip } from "@/components/shared/formulation-strip";
import { ProductCard } from "@/components/shared/product-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, discountPercent } from "@/lib/utils/format";
import { useCart } from "@/lib/context/cart-context";
import type { Product } from "@/lib/data/products";
import {
  Star, Heart, Minus, Plus, ShoppingBag, Truck, ShieldCheck, RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

const TABS = ["Description", "Ingredients", "How to Use", "Reviews"] as const;

export function ProductDetailClient({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Description");
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const wishlisted = isWishlisted(product.id);
  const discount = discountPercent(product.mrp, product.price);

  return (
    <>
      <Header />
      <main>
        <PageHeader
          breadcrumbs={[
            { label: "Products", href: "/products" },
            { label: product.name },
          ]}
          title=""
          eyebrow=""
        />

        <div className="container-vaidyam py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <div>
              <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-sage-400/15 via-ivory-200 to-turmeric-400/15 relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                  className="object-cover"
                />
                {discount > 0 && (
                  <Badge variant="clay" className="absolute top-6 left-6">
                    {discount}% off
                  </Badge>
                )}
              </div>
              <div className="grid grid-cols-4 gap-3 mt-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl bg-ivory-200 relative overflow-hidden"
                  >
                    <Image
                      src={product.image}
                      alt={`${product.name} view ${i}`}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              {product.badge && (
                <Badge variant={product.badge === "new" ? "sage" : "gold"} className="mb-3">
                  {product.badge === "bestseller" ? "Bestseller" : "New"}
                </Badge>
              )}
              <h1 className="font-display text-3xl md:text-4xl font-medium text-forest-900">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 mt-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < Math.round(product.rating)
                          ? "text-turmeric-500 fill-current"
                          : "text-ink-100 fill-current"
                      )}
                    />
                  ))}
                </div>
                <span className="text-sm text-ink-500">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <FormulationStrip ingredients={product.ingredients} className="mt-4" />

              <p className="text-ink-600 leading-relaxed mt-4">
                {product.shortDescription}. Formulated under the supervision
                of certified Vaidyas using traditional extraction methods,
                with every batch tested for purity before release.
              </p>

              <div className="flex items-baseline gap-3 mt-6">
                <span className="font-mono text-3xl font-medium text-forest-900">
                  {formatCurrency(product.price)}
                </span>
                {product.mrp > product.price && (
                  <span className="font-mono text-lg text-ink-300 line-through">
                    {formatCurrency(product.mrp)}
                  </span>
                )}
              </div>
              <p className="text-xs text-sage-600 mt-1">Inclusive of all taxes</p>

              {/* Quantity + actions */}
              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center border border-ink-100 rounded-full">
                  <button
                    className="h-11 w-11 flex items-center justify-center text-ink-700 hover:text-forest-900"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-mono text-sm">{quantity}</span>
                  <button
                    className="h-11 w-11 flex items-center justify-center text-ink-700 hover:text-forest-900"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  className="flex-1"
                  onClick={() => addToCart(product, quantity)}
                >
                  <ShoppingBag className="h-4 w-4" /> Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => toggleWishlist(product)}
                  aria-label="Toggle wishlist"
                >
                  <Heart
                    className={cn(
                      "h-4 w-4",
                      wishlisted && "text-clay-500 fill-current"
                    )}
                  />
                </Button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-ink-900/[0.06]">
                <div className="flex flex-col items-center text-center gap-2">
                  <Truck className="h-5 w-5 text-sage-600" />
                  <span className="text-xs text-ink-500">Free shipping over ₹499</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-sage-600" />
                  <span className="text-xs text-ink-500">GMP certified</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <RotateCcw className="h-5 w-5 text-sage-600" />
                  <span className="text-xs text-ink-500">15-day returns</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-16">
            <div className="flex gap-8 border-b border-ink-900/[0.08]">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "pb-4 text-sm font-medium border-b-2 transition-colors -mb-px",
                    activeTab === tab
                      ? "border-forest-900 text-forest-900"
                      : "border-transparent text-ink-500 hover:text-ink-700"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="py-8 max-w-2xl text-ink-600 leading-relaxed text-sm">
              {activeTab === "Description" && (
                <p>
                  {product.name} is formulated to support {product.category.replace(/-/g, " ")}{" "}
                  through a blend of classical Ayurvedic herbs, each included
                  at clinically informed dosages. Unlike many over-the-counter
                  formulations, every ingredient here is disclosed on the
                  label, and the manufacturing process follows GMP protocols
                  from raw material sourcing through to packaging.
                </p>
              )}
              {activeTab === "Ingredients" && (
                <ul className="space-y-2">
                  {product.ingredients.map((ing) => (
                    <li key={ing} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-turmeric-500" />
                      {ing}
                    </li>
                  ))}
                </ul>
              )}
              {activeTab === "How to Use" && (
                <p>
                  Take as directed by your consulting Vaidya, typically 1–2
                  units twice daily after meals with warm water. Consistency
                  matters more than dosage — most patients report noticeable
                  change after 4–6 weeks of regular use.
                </p>
              )}
              {activeTab === "Reviews" && (
                <p>
                  {product.reviewCount} verified patients have reviewed this
                  product with an average rating of {product.rating} out of 5.
                  Reviews are collected only from confirmed purchases.
                </p>
              )}
            </div>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="font-display text-2xl font-medium text-forest-900 mb-6">
                You may also like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
