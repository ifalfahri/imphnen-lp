import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smoothly scrolls to an element with the specified ID
 */
export function scrollToElement(elementId: string) {
  // Remove the # if it exists
  const id = elementId.startsWith("#") ? elementId.substring(1) : elementId;

  // Find the element
  const element = document.getElementById(id);

  // If the element exists, scroll to it smoothly
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
