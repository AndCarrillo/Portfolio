import { useTranslation } from "react-i18next";
import { WORK_ITEMS, LEARNING_ITEMS } from "../constants";

function AboutMe() {
  const { t } = useTranslation();

  const renderList = (items) =>
    items.map(({ id, descriptionKey }) => (
      <li key={id}>{t(descriptionKey)}</li>
    ));

  return (
    <>
      <section
        id="about"
        className="py-20 md:py-28 px-6 md:px-12 lg:px-24 transition-colors duration-500"
      >
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-brand.primary dark:text-brand.accent">
            {t("about.title")}
          </h2>

          <p className="text-lg text-center max-w-3xl mx-auto text-text-muted dark:text-text-mutedDark leading-relaxed">
            {t("about.description")}
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-brand.secondary dark:text-brand.accent mb-2">
                {t("about.work_title")}
              </h3>
              <ul className="list-disc list-inside text-text-muted dark:text-text-mutedDark space-y-1">
                {renderList(WORK_ITEMS)}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand.secondary dark:text-brand.accent mb-2">
                {t("about.learn_title")}
              </h3>
              <ul className="list-disc list-inside text-text-muted dark:text-text-mutedDark space-y-1">
                {renderList(LEARNING_ITEMS)}
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-text-footer dark:text-text-footerDark pt-8">
            {t("about.footer")}
          </p>
        </div>
        {/* Indicador de scroll animado */}
        <div className="flex justify-center mt-2 animate-bounce">
          <span className="inline-block w-8 h-8 border-b-4 border-r-4 border-gray-700 dark:border-white rounded-br-lg transform rotate-45"></span>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
