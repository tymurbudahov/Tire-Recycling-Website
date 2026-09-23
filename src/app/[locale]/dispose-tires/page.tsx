import DisposeForm from "./DisposeForm/DisposeForm";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  //Metadata for dispose-tires contact page
  params,
}: Omit<Props, "children">) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "DisposeTireFormMetadata",
  });

  return {
    title: t("title"), //web title
    description: t("description"),
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  // Messages for the client-side form come from the
  // NextIntlClientProvider in the locale layout
  return (
    <section>
      <DisposeForm />
    </section>
  );
}
