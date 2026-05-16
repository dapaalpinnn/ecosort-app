import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * merge conditional and tailwind class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
