import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Plus, Pencil, Trash2 } from "lucide-react";

const ADDRESSES = [
  {
    label: "Home",
    name: "Priya Sharma",
    line: "402, Sunrise Apartments, Andheri West",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400058",
    phone: "9876543210",
    isDefault: true,
  },
];

export default function AddressesPage() {
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button variant="outline" size="sm">
          <Plus className="h-4 w-4" /> Add New Address
        </Button>
      </div>
      {ADDRESSES.map((addr, i) => (
        <Card key={i} className="p-5">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-sage-600 mt-0.5" />
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-ink-900">{addr.label}</p>
                  {addr.isDefault && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-turmeric-500/10 text-turmeric-700">
                      Default
                    </span>
                  )}
                </div>
                <p className="text-sm text-ink-600 mt-1">{addr.name}</p>
                <p className="text-sm text-ink-500">
                  {addr.line}, {addr.city}, {addr.state} — {addr.pincode}
                </p>
                <p className="text-sm text-ink-500">Phone: {addr.phone}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="text-ink-400 hover:text-forest-900" aria-label="Edit address">
                <Pencil className="h-4 w-4" />
              </button>
              <button className="text-ink-400 hover:text-clay-500" aria-label="Delete address">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
