/**
 * Format a number as Indian Rupee currency, e.g. 1499 -> "₹1,499"
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format a date string/Date into a readable form, e.g. "12 Jun 2026"
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(d);
}

/**
 * Compute a discount percentage given MRP and selling price.
 */
export function discountPercent(mrp: number, price: number): number {
  if (mrp <= 0 || price >= mrp) return 0;
  return Math.round(((mrp - price) / mrp) * 100);
}

/**
 * Convert a string into a URL-safe slug.
 */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Truncate text to a maximum length, breaking on a word boundary.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  return truncated.slice(0, truncated.lastIndexOf(" ")) + "…";
}

/**
 * Generate initials from a full name, e.g. "Dr. Anjali Rao" -> "AR"
 */
export function getInitials(name: string): string {
  return name
    .split(" ")
    .filter((w) => w.length > 0 && !w.endsWith("."))
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}
