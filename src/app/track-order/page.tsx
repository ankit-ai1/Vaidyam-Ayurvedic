"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { Card } from "@/components/ui/card";
import { Input, Label } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Package, CheckCircle2, Truck, Home } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const STAGES = [
  { label: "Order Placed", icon: CheckCircle2 },
  { label: "Processing", icon: Package },
  { label: "Shipped", icon: Truck },
  { label: "Delivered", icon: Home },
];

function TrackOrderContent() {
  const searchParams = useSearchParams();
  const justPlaced = searchParams.get("placed") === "1";
  const [tracked, setTracked] = useState(justPlaced);
  const [orderId, setOrderId] = useState(justPlaced ? "VYD10234" : "");
  const currentStage = 1;

  return (
    <div className="max-w-xl mx-auto">
      {justPlaced && (
        <Card className="p-5 mb-6 bg-sage-400/10 border-sage-400/30">
          <p className="text-sm text-sage-700 font-medium">
            Your order has been placed successfully! Order ID: VYD10234
          </p>
        </Card>
      )}

      {!tracked ? (
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="orderId" required>Order ID</Label>
              <Input
                id="orderId"
                placeholder="e.g. VYD10234"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="phone" required>Registered Phone Number</Label>
              <Input id="phone" placeholder="9876543210" />
            </div>
            <Button
              variant="primary"
              className="w-full"
              onClick={() => setTracked(true)}
              disabled={!orderId}
            >
              Track Order
            </Button>
          </div>
        </Card>
      ) : (
        <Card className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs text-ink-500 font-mono">ORDER ID</p>
              <p className="font-display text-lg text-forest-900">{orderId}</p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-turmeric-500/10 text-turmeric-700 font-medium">
              Processing
            </span>
          </div>

          <div className="relative">
            {STAGES.map((stage, i) => (
              <div key={stage.label} className="flex gap-4 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      "h-9 w-9 rounded-full flex items-center justify-center shrink-0",
                      i <= currentStage
                        ? "bg-forest-900 text-ivory-50"
                        : "bg-ink-100 text-ink-300"
                    )}
                  >
                    <stage.icon className="h-4 w-4" />
                  </div>
                  {i < STAGES.length - 1 && (
                    <div
                      className={cn(
                        "w-0.5 flex-1 mt-1",
                        i < currentStage ? "bg-forest-900" : "bg-ink-100"
                      )}
                    />
                  )}
                </div>
                <div className="pt-1.5">
                  <p
                    className={cn(
                      "text-sm font-medium",
                      i <= currentStage ? "text-ink-900" : "text-ink-300"
                    )}
                  >
                    {stage.label}
                  </p>
                  {i === currentStage && (
                    <p className="text-xs text-ink-500 mt-0.5">
                      Your order is being prepared for shipment.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}

export default function TrackOrderPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Orders"
          title="Track Your Order"
          breadcrumbs={[{ label: "Track Order" }]}
        />
        <div className="container-vaidyam py-12">
          <Suspense fallback={<div className="text-center text-ink-400">Loading…</div>}>
            <TrackOrderContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
