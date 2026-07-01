import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-12 w-full rounded-[var(--radius-tight)] border bg-ivory-50 px-4 text-sm text-ink-900 placeholder:text-ink-300 transition-colors",
          "border-ink-100 focus-visible:border-forest-900",
          error && "border-clay-500 focus-visible:border-clay-500",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-32 w-full rounded-[var(--radius-tight)] border bg-ivory-50 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 transition-colors resize-y",
          "border-ink-100 focus-visible:border-forest-900",
          error && "border-clay-500 focus-visible:border-clay-500",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

function Label({ className, children, required, ...props }: LabelProps) {
  return (
    <label className={cn("text-sm font-medium text-ink-700 mb-1.5 inline-block", className)} {...props}>
      {children}
      {required && <span className="text-clay-500 ml-0.5">*</span>}
    </label>
  );
}

export { Input, Textarea, Label };
