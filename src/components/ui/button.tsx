import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-body font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-forest-900 text-ivory-50 hover:bg-forest-800 active:bg-forest-950 shadow-soft hover:shadow-lifted",
        gold: "bg-turmeric-500 text-forest-950 hover:bg-turmeric-400 shadow-soft hover:shadow-lifted",
        outline:
          "border border-forest-900/20 text-forest-900 hover:border-forest-900 hover:bg-forest-900/5",
        ghost: "text-forest-900 hover:bg-forest-900/5",
        link: "text-forest-900 underline-offset-4 hover:underline p-0 h-auto",
        destructive: "bg-clay-500 text-ivory-50 hover:bg-clay-600",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-full",
        md: "h-11 px-6 text-sm rounded-full",
        lg: "h-14 px-8 text-base rounded-full",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
