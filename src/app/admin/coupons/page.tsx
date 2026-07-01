"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils/format";
import { Plus, Pencil, Trash2 } from "lucide-react";

interface Coupon {
  code: string;
  type: "Percentage" | "Flat";
  value: string;
  minOrder: string;
  expiresAt: string;
  status: "Active" | "Expired" | "Scheduled";
  uses: number;
}

const COUPONS: Coupon[] = [
  { code: "WELCOME10", type: "Percentage", value: "10%", minOrder: "₹499", expiresAt: "2026-12-31", status: "Active", uses: 342 },
  { code: "MONSOON50", type: "Flat", value: "₹50", minOrder: "₹399", expiresAt: "2026-08-15", status: "Active", uses: 128 },
  { code: "FIRSTCONSULT", type: "Percentage", value: "20%", minOrder: "₹0", expiresAt: "2026-07-31", status: "Active", uses: 89 },
  { code: "SUMMER2026", type: "Flat", value: "₹100", minOrder: "₹999", expiresAt: "2026-06-30", status: "Expired", uses: 456 },
];

const STATUS_VARIANT: Record<string, "sage" | "clay" | "gold"> = {
  Active: "sage",
  Expired: "clay",
  Scheduled: "gold",
};

export default function AdminCouponsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl text-forest-900">Coupons</h1>
          <p className="text-sm text-ink-500 mt-1">{COUPONS.length} discount codes</p>
        </div>
        <Button variant="primary">
          <Plus className="h-4 w-4" /> Create Coupon
        </Button>
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-ink-400 border-b border-ink-900/[0.06] bg-ivory-100/60">
                <th className="p-4 font-medium">Code</th>
                <th className="p-4 font-medium">Discount</th>
                <th className="p-4 font-medium">Min. Order</th>
                <th className="p-4 font-medium">Expires</th>
                <th className="p-4 font-medium">Uses</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {COUPONS.map((coupon) => (
                <tr key={coupon.code} className="border-b border-ink-900/[0.04] last:border-0 hover:bg-ivory-100/40">
                  <td className="p-4 font-mono text-ink-900 font-medium">{coupon.code}</td>
                  <td className="p-4 text-ink-600">{coupon.value} {coupon.type === "Percentage" ? "off" : "flat"}</td>
                  <td className="p-4 text-ink-500">{coupon.minOrder}</td>
                  <td className="p-4 text-ink-500">{formatDate(coupon.expiresAt)}</td>
                  <td className="p-4 text-ink-600">{coupon.uses}</td>
                  <td className="p-4">
                    <Badge variant={STATUS_VARIANT[coupon.status]}>{coupon.status}</Badge>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-3">
                      <button className="text-ink-400 hover:text-forest-900" aria-label="Edit coupon">
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button className="text-ink-400 hover:text-clay-500" aria-label="Delete coupon">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
