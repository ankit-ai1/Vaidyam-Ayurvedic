import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, formatDate } from "@/lib/utils/format";

const ORDERS = [
  { id: "VYD10234", date: "2026-06-28", status: "Processing", total: 1548, items: 2 },
  { id: "VYD10198", date: "2026-06-15", status: "Delivered", total: 899, items: 1 },
  { id: "VYD10156", date: "2026-05-30", status: "Delivered", total: 2247, items: 3 },
];

const STATUS_VARIANT: Record<string, "gold" | "sage" | "forest"> = {
  Processing: "gold",
  Delivered: "sage",
  Shipped: "forest",
};

export default function OrderHistoryPage() {
  return (
    <div className="space-y-4">
      {ORDERS.map((order) => (
        <Card key={order.id} className="p-5 flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="font-mono text-sm text-ink-900">{order.id}</p>
            <p className="text-xs text-ink-500 mt-0.5">
              {formatDate(order.date)} · {order.items} item{order.items > 1 ? "s" : ""}
            </p>
          </div>
          <Badge variant={STATUS_VARIANT[order.status] ?? "forest"}>{order.status}</Badge>
          <span className="font-mono text-sm font-medium text-forest-900">
            {formatCurrency(order.total)}
          </span>
        </Card>
      ))}
    </div>
  );
}
