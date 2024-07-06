import FinalComp from "./FinalComp/FinalComp";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  //Metadata for crumb rubber
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "CrumbRubberMetadata" });

  return {
    title: t("title"), //web title
    description: t("description"),
  };
}

export default function Page({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return <FinalComp />;
}
