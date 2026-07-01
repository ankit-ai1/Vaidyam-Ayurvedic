"use client";

import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ADMIN_ORDERS } from "@/lib/data/admin";
import { formatCurrency, formatDate } from "@/lib/utils/format";
import { Search, Eye } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const STATUS_VARIANT: Record<string, "gold" | "sage" | "forest" | "clay" | "outline"> = {
  Pending: "outline",
  Processing: "gold",
  Shipped: "forest",
  Delivered: "sage",
  Cancelled: "clay",
};

const STATUS_FILTERS = ["All", "Pending", "Processing", "Shipped", "Delivered", "Cancelled"];

export default function AdminOrdersPage() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = useMemo(() => {
    return ADMIN_ORDERS.filter((o) => {
      const matchesQuery =
        o.id.toLowerCase().includes(query.toLowerCase()) ||
        o.customer.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = statusFilter === "All" || o.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [query, statusFilter]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl text-forest-900">Orders</h1>
        <p className="text-sm text-ink-500 mt-1">{ADMIN_ORDERS.length} total orders</p>
      </div>

      <Card className="p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-300" />
            <Input
              placeholder="Search by order ID or customer..."
              className="pl-10 h-10"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {STATUS_FILTERS.map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={cn(
                  "text-xs px-3 py-1.5 rounded-full border transition-colors",
                  statusFilter === status
                    ? "bg-forest-900 text-ivory-50 border-forest-900"
                    : "border-ink-100 text-ink-600 hover:border-ink-300"
                )}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </Card>

      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-ink-400 border-b border-ink-900/[0.06] bg-ivory-100/60">
                <th className="p-4 font-medium">Order ID</th>
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Items</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Total</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((order) => (
                <tr key={order.id} className="border-b border-ink-900/[0.04] last:border-0 hover:bg-ivory-100/40">
                  <td className="p-4 font-mono text-ink-900">{order.id}</td>
                  <td className="p-4">
                    <p className="text-ink-900">{order.customer}</p>
                    <p className="text-xs text-ink-400">{order.email}</p>
                  </td>
                  <td className="p-4 text-ink-500">{formatDate(order.date)}</td>
                  <td className="p-4 text-ink-600">{order.items}</td>
                  <td className="p-4">
                    <Badge variant={STATUS_VARIANT[order.status]}>{order.status}</Badge>
                  </td>
                  <td className="p-4 text-right font-mono text-ink-900">
                    {formatCurrency(order.total)}
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-ink-400 hover:text-forest-900" aria-label="View order">
                      <Eye className="h-4 w-4" />
                    </button>
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
