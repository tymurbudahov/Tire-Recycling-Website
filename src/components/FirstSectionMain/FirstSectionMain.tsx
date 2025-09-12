import { useTranslations } from "next-intl";

export default function FirstSectionMain() {
  const t = useTranslations("IndexPage");

  const tireIconOne = "/images/indexPage/tire-three.webp";

  return (
    <section className=" bg-gray-900">
      <AutoplayVideo />
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-10 lg:px-6">
        <div className="font-light sm:text-lg text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            {t("title")}
          </h2>
          <p className="mb-4">{t("title-text-one")}</p>
          <p>{t("title-text-two")}</p>
        </div>
        <div className="grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src={tireIconOne}
            alt="office content 1"
          />
          {/* <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={tireIconOne}
            alt="office content 2"
          /> */}
        </div>
      </div>
    </section>
  );
}

function AutoplayVideo() {
  return (
    <div className="flex justify-center p-4">
      <video
        className="max-w-full rounded-xl shadow-lg"
        autoPlay
        muted
        loop
        playsInline
        controls
        poster="/images/indexPage/tire-three.webp"
      >
        <source src="/video/tire-recycling-video.mp4" type="video/mp4" />
        Sorry, your browser doesn’t support this video.
      </video>
    </div>
  );
}
