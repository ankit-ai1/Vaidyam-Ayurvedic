import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { Card } from "@/components/ui/card";
import { Truck, Clock, MapPin, Package } from "lucide-react";

export const metadata = {
  title: "Shipping Policy",
  description: "Delivery timelines, charges, and coverage for Vaidyam orders.",
};

const POINTS = [
  {
    icon: Clock,
    title: "Processing Time",
    description: "Orders are processed within 24 hours on business days, before being handed to our logistics partner.",
  },
  {
    icon: Truck,
    title: "Delivery Timeline",
    description: "Standard delivery takes 3–5 business days for most pin codes; metro cities typically see 2–3 days.",
  },
  {
    icon: MapPin,
    title: "Coverage",
    description: "We currently ship across India. Enter your pincode at checkout to confirm serviceability.",
  },
  {
    icon: Package,
    title: "Shipping Charges",
    description: "Free shipping on orders above ₹499. A flat ₹60 charge applies below that threshold.",
  },
];

export default function ShippingPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader eyebrow="Legal" title="Shipping Policy" breadcrumbs={[{ label: "Shipping Policy" }]} />
        <div className="container-vaidyam py-12">
          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            {POINTS.map((point) => (
              <Card key={point.title} className="p-6">
                <point.icon className="h-5 w-5 text-sage-600 mb-3" />
                <h3 className="font-display text-lg text-ink-900 mb-1.5">{point.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{point.description}</p>
              </Card>
            ))}
          </div>
          <div className="max-w-3xl space-y-6 text-ink-700 leading-relaxed">
            <section>
              <h2 className="font-display text-xl text-forest-900 mb-3">Order Tracking</h2>
              <p>
                Once shipped, you&apos;ll receive a tracking link via email and
                SMS. You can also track any order from the Track Order page
                using your order ID and registered phone number.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl text-forest-900 mb-3">Delayed or Missing Deliveries</h2>
              <p>
                If your order hasn&apos;t arrived within the estimated window,
                contact care@vaidyam.com with your order ID and we&apos;ll
                investigate with our logistics partner within 24 hours.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
