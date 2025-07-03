import React from "react";
import { useTranslation } from "react-i18next";
import { PROJECTS } from "../constants";

function Projects({ darkMode }) {
  const { t } = useTranslation();
  const isDark = darkMode;

  return (
    <>
      <section
        id="projects"
        className="py-24 px-6 md:px-12 lg:px-24 transition-colors duration-500"
      >
        <div className="max-w-6xl mx-auto space-y-14">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-brand.primary dark:text-brand.accent">
            {t("projects.title")}
          </h2>

          <p className="text-center text-lg max-w-3xl mx-auto text-text-muted dark:text-text-mutedDark">
            {t("projects.description")}
          </p>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map(
              ({
                id,
                titleKey,
                descriptionKey,
                image,
                imageLight,
                imageDark,
                link,
              }) => {
                const projectImage =
                  imageLight && imageDark
                    ? isDark
                      ? imageDark
                      : imageLight
                    : image;

                return (
                  <div
                    key={id}
                    className="bg-surface-light dark:bg-surface-dark/80 backdrop-blur-md rounded-3xl shadow-xl border border-brand.accent dark:border-brand.accent overflow-hidden hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
                  >
                    <img
                      src={projectImage}
                      alt={t(titleKey)}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold text-center text-brand.primary dark:text-brand.accent">
                        {t(titleKey)}
                      </h3>
                      <p className="text-sm text-text-muted dark:text-text-mutedDark text-center">
                        {t(descriptionKey)}
                      </p>
                      <div className="text-center pt-2">
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-brand.link dark:text-brand.accent hover:underline"
                        >
                          {t("projects.view_repo")} ↗
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>

          <p className="text-center text-sm text-text-footer dark:text-text-footerDark pt-8">
            {t("projects.footer")}
          </p>
        </div>
      </section>
    </>
  );
}

export default Projects;
