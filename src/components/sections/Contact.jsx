import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  EMAIL_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  LOCATION,
  COPYRIGHT_NAME,
} from "../../constants";

function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="w-full bg-[#0b0b16] dark:bg-pastel5 text-gray-100 py-10 px-6 md:px-12"
    >
      <footer className="w-full max-w-6xl mx-auto space-y-8">
        {/* Identidad */}
        <div className="flex flex-col items-center gap-2">
          <img
            src="/src/assets/avatar/avatar.jpg"
            alt="Andrea Carrillo"
            className="w-16 h-16 rounded-full border-2 border-pastel3 shadow-md"
          />
          <span className="text-xl font-bold">Andrea Carrillo</span>
          <span className="text-sm text-gray-400 italic">
            {t("contact.slogan")}
          </span>
        </div>

        {/* Frase de contacto */}
        <p className="text-center text-gray-300 max-w-xl mx-auto">
          {t("contact.intro")}
        </p>

        {/* Información de contacto principal */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-gray-300">
            <FaMapMarkerAlt className="text-pastel1" />
            <span>Heredia, Costa Rica</span>
          </div>
          <div className="flex justify-center">
            <a
              href="mailto:acarrillo.vlk@gmail.com"
              className="inline-flex items-center gap-2 bg-[#1e1f26] text-white font-medium px-4 py-2 rounded-full shadow-md hover:bg-[#2a2b35] transition-all duration-300 border border-pastel3 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/80"
            >
              <FaEnvelope className="w-5 h-5 text-white hover:text-pastel3 transition duration-300" />
              <span>acarrillo.vlk@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Navegación secundaria */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mt-4">
          <a
            href="#home"
            className="hover:text-pastel1 transition underline underline-offset-4 decoration-pastel1"
          >
            {t("contact.nav_home")}
          </a>
          <span>|</span>
          <a
            href="#about"
            className="hover:text-pastel1 transition underline underline-offset-4 decoration-pastel1"
          >
            {t("contact.nav_about")}
          </a>
          <span>|</span>
          <a
            href="#skills"
            className="hover:text-pastel1 transition underline underline-offset-4 decoration-pastel1"
          >
            {t("contact.nav_skills")}
          </a>
          <span>|</span>
          <a
            href="#projects"
            className="hover:text-pastel1 transition underline underline-offset-4 decoration-pastel1"
          >
            {t("contact.nav_projects")}
          </a>
        </nav>

        {/* Redes sociales */}
        <div className="flex flex-col items-center gap-2 mt-2">
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/AndCarrillo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-b from-white via-[#f3eaff] to-[#e0d6ff] dark:from-[#23234a] dark:via-[#1a1a2e] dark:to-[#18182c] border-t-2 border-b-4 border-l border-r border-white/80 border-b-[#bdb4e6] dark:border-t-[#3a3a6a] dark:border-b-[#6a5acd] shadow-md shadow-indigo-200/40 dark:shadow-[#1a1a2e]/60 hover:shadow-lg hover:brightness-105 active:translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/80 min-w-[100px] justify-center"
            >
              <FaGithub className="w-5 h-5 text-brand-primary dark:text-brand-accent group-hover:text-pastel1 transition-colors duration-300" />
              <span className="font-medium text-brand-primary dark:text-brand-accent group-hover:text-pastel1 transition-colors duration-300">
                GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/andrea-carrillo-vlk/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-b from-white via-[#eafffa] to-[#d6f7ff] dark:from-[#23234a] dark:via-[#1a1a2e] dark:to-[#18324a] border-t-2 border-b-4 border-l border-r border-white/80 border-b-[#b4e6e0] dark:border-t-[#3a3a6a] dark:border-b-[#5ad6cd] shadow-md shadow-cyan-200/40 dark:shadow-[#1a1a2e]/60 hover:shadow-lg hover:brightness-105 active:translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/80 min-w-[100px] justify-center"
            >
              <FaLinkedin className="w-5 h-5 text-brand-primary dark:text-brand-accent group-hover:text-pastel1 transition-colors duration-300" />
              <span className="font-medium text-brand-primary dark:text-brand-accent group-hover:text-pastel1 transition-colors duration-300">
                LinkedIn
              </span>
            </a>
          </div>
        </div>

        {/* Avisos legales */}
        <div className="flex flex-col items-center gap-1 mt-6 text-xs text-gray-500">
          <span>
            © {new Date().getFullYear()} Andrea Carrillo. {t("footer.rights")}
          </span>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
