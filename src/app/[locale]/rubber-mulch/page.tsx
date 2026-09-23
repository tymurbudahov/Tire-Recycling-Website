import FinalComp from "./FinalComp/FinalComp";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  //Metadata for rubber mulch
  params,
}: Omit<Props, "children">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "RubberMulchMetadata" });

  return {
    title: t("title"), //web title
    description: t("description"),
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <FinalComp />;
}
