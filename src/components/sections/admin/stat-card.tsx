import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils/cn";
import { ArrowUp, ArrowDown, type LucideIcon } from "lucide-react";

export function StatCard({
  label,
  value,
  change,
  trend,
  icon: Icon,
}: {
  label: string;
  value: string;
  change?: string;
  trend?: "up" | "down";
  icon: LucideIcon;
}) {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <div className="h-10 w-10 rounded-xl bg-forest-900/5 flex items-center justify-center">
          <Icon className="h-5 w-5 text-forest-800" strokeWidth={1.75} />
        </div>
        {change && (
          <span
            className={cn(
              "flex items-center gap-0.5 text-xs font-medium",
              trend === "up" ? "text-sage-600" : "text-clay-500"
            )}
          >
            {trend === "up" ? (
              <ArrowUp className="h-3 w-3" />
            ) : (
              <ArrowDown className="h-3 w-3" />
            )}
            {change}
          </span>
        )}
      </div>
      <p className="font-display text-2xl font-medium text-forest-900 mt-4">{value}</p>
      <p className="text-xs text-ink-500 mt-0.5">{label}</p>
    </Card>
  );
}
