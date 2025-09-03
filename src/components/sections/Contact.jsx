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
    <section id="contact">
      <footer className="bg-[#0b0b16] text-gray-100 py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Título e introducción */}
          <h3 className="text-2xl font-semibold text-center">
            {t("contact.title")}
          </h3>
          <p className="text-center text-gray-300">{t("contact.intro")}</p>

          {/* Botón de correo */}
          <div className="flex justify-center">
            <a
              href={`mailto:${EMAIL_URL}`}
              className="inline-flex items-center gap-2 bg-[#1e1f26] text-white font-medium px-4 py-2 rounded-full shadow-md hover:bg-[#2a2b35] transition-all duration-300 border border-pastel3"
            >
              <FaEnvelope className="w-5 h-5 text-white hover:text-pastel3 transition duration-300" />
              <span>{EMAIL_URL}</span>
            </a>
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center gap-6 pt-2">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="w-12 h-12 text-white hover:text-pastel1 hover:scale-110 transition-all duration-300" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-12 h-12 text-white hover:text-pastel1 hover:scale-110 transition-all duration-300" />
            </a>
          </div>

          {/* Ubicación */}
          <div className="text-center text-sm text-gray-400">
            <p className="flex items-center justify-center gap-2">
              <FaMapMarkerAlt className="text-white hover:text-pastel1 hover:scale-110 transition-all duration-300" />
              {LOCATION}
            </p>
          </div>

          {/* Derechos reservados */}
          <p className="text-sm text-center text-gray-500 mt-4">
            © {new Date().getFullYear()} {COPYRIGHT_NAME}. {t("footer.rights")}
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
