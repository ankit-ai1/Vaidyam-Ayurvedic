"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Star, ShoppingBag } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FormulationStrip } from "@/components/shared/formulation-strip";
import { formatCurrency, discountPercent } from "@/lib/utils/format";
import type { Product } from "@/lib/data/products";
import { cn } from "@/lib/utils/cn";
import { useCart } from "@/lib/context/cart-context";

export function ProductCard({ product }: { product: Product }) {
  const discount = discountPercent(product.mrp, product.price);
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const wishlisted = isWishlisted(product.id);

  return (
    <Card className="overflow-hidden group hover:shadow-lifted h-full flex flex-col">
      <Link href={`/products/${product.slug}`} className="relative block">
        <div className="aspect-square bg-gradient-to-br from-sage-400/15 via-ivory-200 to-turmeric-400/15 relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />

          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {discount > 0 && <Badge variant="clay">{discount}% off</Badge>}
            {product.badge === "bestseller" && (
              <Badge variant="gold">Bestseller</Badge>
            )}
            {product.badge === "new" && <Badge variant="sage">New</Badge>}
          </div>

          <button
            className="absolute top-4 right-4 h-9 w-9 rounded-full bg-ivory-50/90 flex items-center justify-center shadow-soft opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Add to wishlist"
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product);
            }}
          >
            <Heart
              className={cn(
                "h-4 w-4",
                wishlisted ? "text-clay-500 fill-current" : "text-forest-900"
              )}
            />
          </button>
        </div>
      </Link>

      <CardHeader className="pb-1">
        <FormulationStrip ingredients={product.ingredients} dense />
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-display text-lg font-medium text-ink-900 mt-2 hover:text-forest-700 transition-colors leading-snug">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 text-turmeric-600 text-sm mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-3.5 w-3.5",
                i < Math.round(product.rating) ? "fill-current" : "fill-current opacity-25"
              )}
            />
          ))}
          <span className="text-ink-500 ml-1">({product.reviewCount})</span>
        </div>
      </CardHeader>

      <CardContent className="pt-1 flex-1">
        <p className="text-sm text-ink-500 leading-relaxed line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="flex items-baseline gap-2 mt-3">
          <span className="font-mono text-lg font-medium text-forest-900">
            {formatCurrency(product.price)}
          </span>
          {product.mrp > product.price && (
            <span className="font-mono text-sm text-ink-300 line-through">
              {formatCurrency(product.mrp)}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter>
        <Button
          variant="primary"
          className="w-full"
          size="sm"
          onClick={() => addToCart(product, 1)}
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
