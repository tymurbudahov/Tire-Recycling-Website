import NavigationTwo from "./NavigationTwo";

export default function Navigation() {
  // Translations reach the client-side NavigationTwo through the
  // NextIntlClientProvider in `app/[locale]/layout.tsx`.
  return <NavigationTwo />;
}
