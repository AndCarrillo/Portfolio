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
                className="group relative inline-flex items-center gap-2 justify-center px-4 md:px-6 h-14 rounded-full bg-gradient-to-b from-white via-[#ffe0f0] to-[#f9c6e0] dark:from-[#23234a] dark:via-[#1a1a2e] dark:to-[#33213a] border-t-2 border-b-4 border-l border-r border-white/80 border-b-[#f9c6e0] dark:border-t-[#3a3a6a] dark:border-b-[#c97fa7] shadow-xl shadow-pink-200/40 dark:shadow-[#1a1a2e]/60 hover:shadow-2xl hover:brightness-105 active:translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/80 min-w-14 md:min-w-[180px] overflow-hidden"
              >
                {/* Brillo superior */}
                <span className="absolute top-0 left-0 w-full h-1/3 rounded-t-full bg-white/40 dark:bg-white/10 blur-sm pointer-events-none" />
                <FaEnvelope className="w-7 h-7 text-brand-primary dark:text-brand-accent group-hover:text-pastel1 transition-colors duration-300 z-10" />
                <span className="hidden md:inline font-semibold text-brand-primary dark:text-brand-accent group-hover:text-pastel1 transition-colors duration-300 z-10">
                  {EMAIL_URL}
                </span>
              </a>

              {/* GitHub */}

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group relative inline-flex items-center gap-2 justify-center px-4 md:px-6 h-14 rounded-full bg-gradient-to-b from-white via-[#f3eaff] to-[#e0d6ff] dark:from-[#23234a] dark:via-[#1a1a2e] dark:to-[#18182c] border-t-2 border-b-4 border-l border-r border-white/80 border-b-[#bdb4e6] dark:border-t-[#3a3a6a] dark:border-b-[#6a5acd] shadow-xl shadow-indigo-200/40 dark:shadow-[#1a1a2e]/60 hover:shadow-2xl hover:brightness-105 active:translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/80 min-w-14 md:min-w-[120px] overflow-hidden"
              >
                {/* Brillo superior */}
                <span className="absolute top-0 left-0 w-full h-1/3 rounded-t-full bg-white/40 dark:bg-white/10 blur-sm pointer-events-none" />
                <FaGithub className="w-7 h-7 text-brand-primary dark:text-brand-accent group-hover:text-pastel1 transition-colors duration-300 z-10" />
                <span className="hidden md:inline font-semibold text-brand-primary dark:text-brand-accent group-hover:text-pastel1 transition-colors duration-300 z-10">
                  GitHub
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group relative inline-flex items-center gap-2 justify-center px-4 md:px-6 h-14 rounded-full bg-gradient-to-b from-white via-[#eafffa] to-[#d6f7ff] dark:from-[#23234a] dark:via-[#1a1a2e] dark:to-[#18324a] border-t-2 border-b-4 border-l border-r border-white/80 border-b-[#b4e6e0] dark:border-t-[#3a3a6a] dark:border-b-[#5ad6cd] shadow-xl shadow-cyan-200/40 dark:shadow-[#1a1a2e]/60 hover:shadow-2xl hover:brightness-105 active:translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/80 min-w-14 md:min-w-[120px] overflow-hidden"
              >
                {/* Brillo superior */}
                <span className="absolute top-0 left-0 w-full h-1/3 rounded-t-full bg-white/40 dark:bg-white/10 blur-sm pointer-events-none" />
                <FaLinkedin className="w-7 h-7 text-brand-primary dark:text-brand-accent group-hover:text-pastel1 transition-colors duration-300 z-10" />
                <span className="hidden md:inline font-semibold text-brand-primary dark:text-brand-accent group-hover:text-pastel1 transition-colors duration-300 z-10">
                  LinkedIn
                </span>
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
          className="hidden sm:flex justify-center mt-2 animate-bounce focus:outline-none"
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
