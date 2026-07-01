import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full font-medium text-xs px-3 py-1 border",
  {
    variants: {
      variant: {
        sage: "bg-sage-500/10 text-sage-600 border-sage-500/20",
        gold: "bg-turmeric-500/10 text-turmeric-700 border-turmeric-500/25",
        clay: "bg-clay-500/10 text-clay-600 border-clay-500/20",
        forest: "bg-forest-900/5 text-forest-800 border-forest-900/10",
        outline: "bg-transparent text-ink-500 border-ink-100",
      },
    },
    defaultVariants: {
      variant: "forest",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
