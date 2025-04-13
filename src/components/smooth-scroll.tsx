"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    // Set smooth scrolling for the entire document
    document.documentElement.style.scrollBehavior = "smooth";

    // Add IDs to sections if they don't exist
    const sections = ["home", "features", "testimonial", "faq"];
    sections.forEach((id) => {
      // Check if section exists but doesn't have an ID
      const section = document.querySelector(`section[data-section="${id}"]`);
      if (section && !document.getElementById(id)) {
        section.id = id;
      }
    });

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return null;
}
