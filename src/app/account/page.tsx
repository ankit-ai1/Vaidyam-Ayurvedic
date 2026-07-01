import { Card } from "@/components/ui/card";
import { Package, Heart, MapPin } from "lucide-react";

export default function AccountOverviewPage() {
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-3 gap-4">
        <Card className="p-5">
          <Package className="h-5 w-5 text-sage-600 mb-3" />
          <p className="text-2xl font-display text-forest-900">3</p>
          <p className="text-xs text-ink-500 mt-0.5">Total Orders</p>
        </Card>
        <Card className="p-5">
          <Heart className="h-5 w-5 text-clay-500 mb-3" />
          <p className="text-2xl font-display text-forest-900">2</p>
          <p className="text-xs text-ink-500 mt-0.5">Wishlist Items</p>
        </Card>
        <Card className="p-5">
          <MapPin className="h-5 w-5 text-turmeric-600 mb-3" />
          <p className="text-2xl font-display text-forest-900">1</p>
          <p className="text-xs text-ink-500 mt-0.5">Saved Address</p>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="font-display text-lg text-forest-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { label: "Order #VYD10198 delivered", time: "2 days ago" },
            { label: "Consultation with Dr. Anjali Rao completed", time: "1 week ago" },
            { label: "Order #VYD10156 placed", time: "2 weeks ago" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between text-sm border-b border-ink-900/[0.06] pb-4 last:border-0 last:pb-0">
              <span className="text-ink-700">{item.label}</span>
              <span className="text-ink-400 text-xs">{item.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
