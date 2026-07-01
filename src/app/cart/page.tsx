"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/lib/context/cart-context";
import { formatCurrency } from "@/lib/utils/format";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, cartSubtotal } = useCart();
  const shipping = cartSubtotal >= 499 || cartSubtotal === 0 ? 0 : 60;
  const total = cartSubtotal + shipping;

  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Cart"
          title="Your Cart"
          breadcrumbs={[{ label: "Cart" }]}
        />
        <div className="container-vaidyam py-12">
          {items.length === 0 ? (
            <div className="text-center py-20 max-w-md mx-auto">
              <div className="h-16 w-16 rounded-full bg-ivory-200 flex items-center justify-center mx-auto mb-5">
                <ShoppingBag className="h-7 w-7 text-ink-300" />
              </div>
              <h2 className="font-display text-2xl text-forest-900">Your cart is empty</h2>
              <p className="text-ink-500 mt-2">
                Add a few formulations to get started, or explore products by
                health concern.
              </p>
              <Link href="/products" className="inline-block mt-6">
                <Button variant="primary">Browse Products</Button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_380px] gap-10">
              {/* Items */}
              <div className="space-y-4">
                {items.map((line) => (
                  <Card key={line.product.id} className="p-5 flex gap-4">
                    <Link
                      href={`/products/${line.product.slug}`}
                      className="h-24 w-24 shrink-0 rounded-xl bg-gradient-to-br from-sage-400/15 to-turmeric-400/15 relative overflow-hidden block"
                    >
                      <Image
                        src={line.product.image}
                        alt={line.product.name}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <Link href={`/products/${line.product.slug}`}>
                          <h3 className="font-display text-base font-medium text-ink-900 hover:text-forest-700 transition-colors">
                            {line.product.name}
                          </h3>
                        </Link>
                        <button
                          onClick={() => removeFromCart(line.product.id)}
                          className="text-ink-300 hover:text-clay-500 transition-colors shrink-0"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-xs text-ink-500 mt-1">
                        {line.product.shortDescription}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-ink-100 rounded-full">
                          <button
                            className="h-8 w-8 flex items-center justify-center text-ink-700"
                            onClick={() => updateQuantity(line.product.id, line.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-6 text-center font-mono text-xs">
                            {line.quantity}
                          </span>
                          <button
                            className="h-8 w-8 flex items-center justify-center text-ink-700"
                            onClick={() => updateQuantity(line.product.id, line.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="font-mono text-sm font-medium text-forest-900">
                          {formatCurrency(line.product.price * line.quantity)}
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Summary */}
              <div>
                <Card className="p-6 sticky top-24">
                  <h3 className="font-display text-lg text-forest-900 mb-5">Order Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-ink-600">
                      <span>Subtotal</span>
                      <span className="font-mono">{formatCurrency(cartSubtotal)}</span>
                    </div>
                    <div className="flex justify-between text-ink-600">
                      <span>Shipping</span>
                      <span className="font-mono">
                        {shipping === 0 ? "Free" : formatCurrency(shipping)}
                      </span>
                    </div>
                    {shipping > 0 && (
                      <p className="text-xs text-turmeric-600">
                        Add {formatCurrency(499 - cartSubtotal)} more for free shipping
                      </p>
                    )}
                  </div>
                  <div className="flex justify-between pt-4 mt-4 border-t border-ink-900/[0.08]">
                    <span className="font-medium text-ink-900">Total</span>
                    <span className="font-mono font-medium text-lg text-forest-900">
                      {formatCurrency(total)}
                    </span>
                  </div>
                  <Link href="/checkout" className="block mt-6">
                    <Button variant="primary" size="lg" className="w-full">
                      Proceed to Checkout <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
