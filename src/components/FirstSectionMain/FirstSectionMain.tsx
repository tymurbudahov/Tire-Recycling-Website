import { useTranslations } from "next-intl";

export default function FirstSectionMain() {
  const t = useTranslations("IndexPage");

  return (
    <section className="home-hero">
      <div className="home-hero__stage">
        <video autoPlay muted loop playsInline controls>
          <source src="/video/tire-recycling-video.mp4" type="video/mp4" />
          Sorry, your browser doesn’t support this video.
        </video>
        <div className="home-hero__content">
          <span className="eyebrow">Tire Recycling UA</span>
          <h1>{t("title")}</h1>
          <p>{t("title-text-one")}</p>
          <p>{t("title-text-two")}</p>
        </div>
      </div>
    </section>
  );
}
