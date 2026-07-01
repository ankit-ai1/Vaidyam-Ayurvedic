"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { Card } from "@/components/ui/card";
import { Input, Label } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/context/cart-context";
import { addressSchema, type AddressFormValues } from "@/lib/validations/address";
import { formatCurrency } from "@/lib/utils/format";
import { Truck, Wallet, ShieldCheck } from "lucide-react";

export default function CheckoutPage() {
  const { items, cartSubtotal, clearCart } = useCart();
  const router = useRouter();
  const [placing, setPlacing] = useState(false);
  const shipping = cartSubtotal >= 499 || cartSubtotal === 0 ? 0 : 60;
  const total = cartSubtotal + shipping;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormValues>({ resolver: zodResolver(addressSchema) });

  async function onSubmit() {
    setPlacing(true);
    await new Promise((r) => setTimeout(r, 1000));
    clearCart();
    router.push("/track-order?placed=1");
  }

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main>
          <PageHeader eyebrow="Checkout" title="Checkout" breadcrumbs={[{ label: "Checkout" }]} />
          <div className="container-vaidyam py-20 text-center">
            <p className="text-ink-500">Your cart is empty.</p>
            <Link href="/products" className="inline-block mt-6">
              <Button variant="primary">Browse Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <PageHeader eyebrow="Checkout" title="Checkout" breadcrumbs={[{ label: "Checkout" }]} />
        <div className="container-vaidyam py-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-[1fr_380px] gap-10">
              <div className="space-y-6">
                {/* Shipping address */}
                <Card className="p-6">
                  <h3 className="font-display text-lg text-forest-900 mb-5">
                    Shipping Address
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="fullName" required>Full Name</Label>
                      <Input id="fullName" {...register("fullName")} error={!!errors.fullName} />
                      {errors.fullName && <p className="text-xs text-clay-500 mt-1">{errors.fullName.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone" required>Phone Number</Label>
                      <Input id="phone" placeholder="9876543210" {...register("phone")} error={!!errors.phone} />
                      {errors.phone && <p className="text-xs text-clay-500 mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>
                  <div className="mt-5">
                    <Label htmlFor="addressLine1" required>Address Line 1</Label>
                    <Input id="addressLine1" {...register("addressLine1")} error={!!errors.addressLine1} />
                    {errors.addressLine1 && <p className="text-xs text-clay-500 mt-1">{errors.addressLine1.message}</p>}
                  </div>
                  <div className="mt-5">
                    <Label htmlFor="addressLine2">Address Line 2 (optional)</Label>
                    <Input id="addressLine2" {...register("addressLine2")} />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-5 mt-5">
                    <div>
                      <Label htmlFor="city" required>City</Label>
                      <Input id="city" {...register("city")} error={!!errors.city} />
                      {errors.city && <p className="text-xs text-clay-500 mt-1">{errors.city.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="state" required>State</Label>
                      <Input id="state" {...register("state")} error={!!errors.state} />
                      {errors.state && <p className="text-xs text-clay-500 mt-1">{errors.state.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="pincode" required>Pincode</Label>
                      <Input id="pincode" {...register("pincode")} error={!!errors.pincode} />
                      {errors.pincode && <p className="text-xs text-clay-500 mt-1">{errors.pincode.message}</p>}
                    </div>
                  </div>
                </Card>

                {/* Payment method */}
                <Card className="p-6">
                  <h3 className="font-display text-lg text-forest-900 mb-5">
                    Payment Method
                  </h3>
                  <div className="rounded-xl border-2 border-forest-900 bg-forest-900/5 p-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-forest-900 flex items-center justify-center shrink-0">
                      <Wallet className="h-5 w-5 text-ivory-50" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink-900">Cash on Delivery</p>
                      <p className="text-xs text-ink-500">
                        Pay in cash when your order arrives.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-ink-400 mt-3">
                    Online payment (cards, UPI) will be added soon.
                  </p>
                </Card>
              </div>

              {/* Order summary */}
              <div>
                <Card className="p-6 sticky top-24">
                  <h3 className="font-display text-lg text-forest-900 mb-5">
                    Order Summary
                  </h3>
                  <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                    {items.map((line) => (
                      <div key={line.product.id} className="flex justify-between text-sm">
                        <span className="text-ink-600">
                          {line.product.name} × {line.quantity}
                        </span>
                        <span className="font-mono text-ink-900">
                          {formatCurrency(line.product.price * line.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2 pt-4 border-t border-ink-900/[0.08] text-sm">
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
                  </div>
                  <div className="flex justify-between pt-4 mt-4 border-t border-ink-900/[0.08]">
                    <span className="font-medium text-ink-900">Total</span>
                    <span className="font-mono font-medium text-lg text-forest-900">
                      {formatCurrency(total)}
                    </span>
                  </div>
                  <Button type="submit" variant="primary" size="lg" className="w-full mt-6" loading={placing}>
                    Place Order
                  </Button>
                  <div className="flex items-center gap-2 mt-4 text-xs text-ink-400">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Your information is kept private and secure.
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs text-ink-400">
                    <Truck className="h-3.5 w-3.5" />
                    Estimated delivery in 3–5 business days.
                  </div>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
