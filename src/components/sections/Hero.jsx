import React from "react";
import { useTranslation } from "react-i18next";
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from "../../constants";
import profileImage from "../../assets/avatar/profile.png";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import WaveDivider from "../layout/WaveDivider";

function Hero() {
  const { t } = useTranslation();

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen overflow-hidden py-20 md:py-28 px-6 md:px-12 bg-gradient-to-br from-[#f4f0ff] via-[#eae4ff] to-[#faf9ff] dark:from-[#0d0d1a] dark:via-[#0b0b16] dark:to-[#070612] text-brand-primary dark:text-gray-100 transition-all duration-500 flex items-center"
      >
        {/* Patrón decorativo */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#0000000b_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:16px_24px] pointer-events-none" />

        {/* Blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[80%] bg-pastel1 dark:bg-pastel5 opacity-20 blur-3xl rounded-full z-0" />

        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto gap-12">
          <div className="text-center md:text-left space-y-8 md:space-y-8 max-w-xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight dark:text-brand-base">
              {t("hero.name")}
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-[#3b3054] dark:text-[#e3d9f7]">
              {t("hero.subtitle")}
            </h2>
            <p className="text-lg md:text-xl text-text-muted dark:text-[#d7f9f1]">
              {t("hero.description")}
            </p>

            <div className="flex justify-center md:justify-start gap-6 pt-6">
              {/* Correo */}
              <a
                href={`mailto:${EMAIL_URL}`}
                className="inline-flex items-center gap-2 bg-brand-primary dark:bg-brand-accent text-pastel3 font-medium px-4 py-2 rounded-full shadow-md hover:bg-[#2a2b35] dark:hover:bg-[#ffffff] hover:text-pastel1 transition-all duration-300 border border-pastel3"
              >
                <FaEnvelope className="w-5 h-5 text-white dark:text-text-primary" />
                <span className="text-white dark:text-text-primary">
                  {EMAIL_URL}
                </span>
              </a>

              {/* GitHub */}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-all duration-300 hover:scale-110 hover:text-pastel1"
              >
                <FaGithub className="w-10 h-10 text-brand-primary dark:text-brand-accent" />
              </a>

              {/* LinkedIn */}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-all duration-300 hover:scale-110 hover:text-pastel1"
              >
                <FaLinkedin className="w-10 h-10 text-brand-primary dark:text-brand-accent" />
              </a>
            </div>
          </div>

          {/* Imagen + elipse en un frame compartido */}
          <div className="relative flex items-end justify-center w-full md:w-1/2 mt-4 md:mt-0">
            {/* Frame: controla el tamaño de ambos y asegura sincronía */}
            <div className="relative w-72 sm:w-80 md:w-96 lg:w-[32rem] aspect-square overflow-visible mt-8 md:mt-12 lg:mt-16">
              {/* Elipse de fondo */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-full bg-violet-950 dark:bg-purple-200 pointer-events-none scale-y-[0.75] translate-y-6 md:translate-y-10 transition-transform duration-300"
              />
              {/* Imagen sobresaliente */}
              <img
                src={profileImage}
                alt="Profile"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="relative z-10 h-full w-full object-cover rounded-full -translate-y-8 md:-translate-y-12 lg:-translate-y-16 transition-transform duration-300"
                style={{ objectPosition: "top center" }}
              />
            </div>
          </div>
        </div>

        {/* Indicador de scroll animado */}
        <button
          type="button"
          aria-label="Scroll to About Me"
          className="flex justify-center mt-2 animate-bounce focus:outline-none"
          onClick={() => {
            const nextSection = document.getElementById("about");
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <span className="inline-block w-8 h-8 border-b-4 border-r-4 border-border-light dark:border-border-dark rounded-br-lg transform rotate-45"></span>
        </button>
      </section>
      <WaveDivider className="text-pastel1 dark:text-gray-900 h-16" />
    </>
  );
}

export default Hero;
