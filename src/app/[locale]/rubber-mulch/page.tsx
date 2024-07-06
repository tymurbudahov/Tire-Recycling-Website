import FinalComp from "./FinalComp/FinalComp";
import { unstable_setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  //Metadata for rubber mulch
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "RubberMulchMetadata" });

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
