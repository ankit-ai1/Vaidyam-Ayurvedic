import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names safely, resolving conflicting utility classes
 * (e.g. "px-2" and "px-4") in favor of the last one provided.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
