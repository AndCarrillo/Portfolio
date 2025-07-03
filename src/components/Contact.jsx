import React from "react";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from "../constants";

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact">
      <footer className="bg-[#0b0b16] dark:bg-[#0b0b16] text-gray-100 py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-8">
          <h3 className="text-2xl font-semibold text-center">
            {t("contact.title")}
          </h3>
          <p className="text-center text-gray-300">{t("contact.intro")}</p>

          {/* Correo con icono en línea */}
          <div className="flex justify-center">
            <a
              href={`mailto:${EMAIL_URL}`}
              className="inline-flex items-center gap-2 bg-[#1e1f26] text-white font-medium px-4 py-2 rounded-full shadow-md hover:bg-[#2a2b35] transition-all duration-300 border border-pastel3"
            >
              <FaEnvelope className="w-5 h-5 text-white" />
              <span className="text-white">{EMAIL_URL}</span>
            </a>
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center gap-6 text-xl pt-2">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pastel3 transition"
              aria-label="GitHub"
            >
              <FaGithub className="w-12 h-12 text-white" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pastel3 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-12 h-12 text-white" />
            </a>
          </div>

          {/* Sección de contacto con dirección */}
          <div className="text-center text-sm space-y-1 text-gray-400">
            <p>Heredia, Costa Rica</p>
          </div>

          {/* Derechos reservados */}
          <p className="text-sm text-center text-gray-500 mt-4">
            © {new Date().getFullYear()} Andrea Carrillo. {t("footer.rights")}
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
