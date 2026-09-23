import { defineRouting } from "next-intl/routing";
import { defaultLocale, locales } from "@/config";

export const routing = defineRouting({
  locales,
  defaultLocale,
  // Always serve the default locale (uk) instead of guessing from the browser
  localeDetection: false,
});
