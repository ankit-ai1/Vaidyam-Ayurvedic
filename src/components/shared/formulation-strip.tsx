import { cn } from "@/lib/utils/cn";

interface FormulationStripProps {
  ingredients: string[];
  className?: string;
  dense?: boolean;
}

/**
 * Signature UI element: mirrors how Ayurvedic formulations are listed on
 * real product packaging (e.g. "Ashwagandha · Turmeric · Neem"). Used near
 * hero content, product cards, and disease pages to ground the brand in
 * the actual material culture of Ayurvedic medicine rather than generic
 * leaf iconography.
 */
export function FormulationStrip({ ingredients, className, dense }: FormulationStripProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-2 gap-y-1.5 font-mono uppercase tracking-wide text-ink-500",
        dense ? "text-[10px]" : "text-xs",
        className
      )}
    >
      {ingredients.map((ingredient, i) => (
        <span key={ingredient} className="flex items-center gap-2">
          <span>{ingredient}</span>
          {i < ingredients.length - 1 && (
            <span className="text-turmeric-500" aria-hidden="true">
              ·
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
