"use client";

import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { ProductCard } from "@/components/shared/product-card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/context/cart-context";
import { Heart } from "lucide-react";

export default function WishlistPage() {
  const { wishlist } = useCart();

  return (
    <>
      <Header />
      <main>
        <PageHeader eyebrow="Saved" title="Your Wishlist" breadcrumbs={[{ label: "Wishlist" }]} />
        <div className="container-vaidyam py-12">
          {wishlist.length === 0 ? (
            <div className="text-center py-20 max-w-md mx-auto">
              <div className="h-16 w-16 rounded-full bg-ivory-200 flex items-center justify-center mx-auto mb-5">
                <Heart className="h-7 w-7 text-ink-300" />
              </div>
              <h2 className="font-display text-2xl text-forest-900">
                Nothing saved yet
              </h2>
              <p className="text-ink-500 mt-2">
                Tap the heart icon on any product to save it here for later.
              </p>
              <Link href="/products" className="inline-block mt-6">
                <Button variant="primary">Browse Products</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {wishlist.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
