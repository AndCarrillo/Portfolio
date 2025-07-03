import React from "react";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS } from "../constants";

function Projects({ darkMode }) {
  const { t } = useTranslation();
  const isDark = darkMode;

  return (
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
              techs = [],
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

                    {/* Badges de tecnologías */}
                    {techs.length > 0 && (
                      <div className="flex flex-wrap justify-center gap-2 pt-2">
                        {techs.map((tech) => (
                          <span
                            key={tech}
                            className={`text-xs font-medium px-2.5 py-1.5 border rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105
                              ${
                                isDark
                                  ? "bg-[#ffffff0a] text-pastel1 border-pastel1"
                                  : "bg-[#0b0b160a] text-pastel3 border-pastel3"
                              }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="text-center pt-2">
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-brand.link dark:text-brand.accent hover:underline transition-colors duration-300"
                      >
                        {t("projects.view_repo")}
                        <FaExternalLinkAlt className="w-3 h-3" />
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
  );
}

export default Projects;
