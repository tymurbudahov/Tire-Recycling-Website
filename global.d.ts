import en from "./messages/en.json";

declare module "next-intl" {
  // Use type safe message keys with `next-intl`
  interface AppConfig {
    Messages: typeof en;
  }
}
