import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SKILLS_DATA } from "../../constants/constants";

function Skills() {
  const { t } = useTranslation();

  return (
    <>
      <section
        id="skills"
        className="min-h-screen py-20 md:py-28 px-6 md:px-12 lg:px-24 transition-colors duration-500 flex items-center"
      >
        <div className="max-w-6xl mx-auto space-y-14">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-brand-primary dark:text-brand-accent">
            {t("skills.title")}
          </h2>

          <p className="text-center text-lg max-w-3xl mx-auto text-text-muted dark:text-text-mutedDark">
            {t("skills.description")}
          </p>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS_DATA.map(({ id, icon, titleKey, itemsKeys }) => (
              <div
                key={id}
                className="bg-surface-light dark:bg-surface-dark/80 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-brand.accent dark:border-brand.accent hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
              >
                <div className="flex justify-center mb-5">
                  <div className="bg-brand-base dark:bg-brand.accent p-4 rounded-full shadow-md">
                    <FontAwesomeIcon
                      icon={icon}
                      className="text-3xl text-brand-primary dark:text-brand.base"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center text-brand-primary dark:text-brand.accent mb-3">
                  {t(titleKey)}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-center text-text-muted dark:text-text-mutedDark">
                  {itemsKeys.map((itemKey) => (
                    <li key={itemKey}>{t(itemKey)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-text-footer dark:text-text-footerDark pt-8">
            {t("skills.footer")}
          </p>
        </div>
        {/* Indicador de scroll animado */}
        <button
          type="button"
          aria-label="Scroll to Projects"
          className="hidden sm:flex justify-center mt-2 animate-bounce focus:outline-none"
          onClick={() => {
            const nextSection = document.getElementById("projects");
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <span className="inline-block w-8 h-8 border-b-4 border-r-4 border-border-light dark:border-border-dark rounded-br-lg transform rotate-45"></span>
        </button>
      </section>
    </>
  );
}

export default Skills;
