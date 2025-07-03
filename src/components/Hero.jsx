import React from "react";
import { useTranslation } from "react-i18next";
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from "../constants";
import profileImage from "../assets/avatar/avatar.jpg";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import WaveDivider from "./WaveDivider";

function Hero() {
  const { t } = useTranslation();

  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden py-24 md:py-32 px-6 md:px-12 bg-gradient-to-br from-[#f4f0ff] via-[#eae4ff] to-[#faf9ff] dark:from-[#0d0d1a] dark:via-[#0b0b16] dark:to-[#070612] text-gray-800 dark:text-gray-100 transition-all duration-500"
      >
        {/* Patrón decorativo */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#0000000b_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:16px_24px] pointer-events-none" />

        {/* Blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[80%] bg-pastel1 dark:bg-pastel5 opacity-20 blur-3xl rounded-full z-0" />

        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto gap-12">
          <div className="text-center md:text-left space-y-8 md:space-y-8 max-w-xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              {t("hero.name")}
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-[#3b3054] dark:text-[#e3d9f7]">
              {t("hero.subtitle")}
            </h2>
            <p className="text-lg md:text-xl text-[#5a5a5a] dark:text-[#d7f9f1]">
              {t("hero.description")}
            </p>

            <div className="flex justify-center md:justify-start gap-6 pt-6">
              {/* Correo */}
              <a
                href={`mailto:${EMAIL_URL}`}
                className="inline-flex items-center gap-2 bg-[#1e1f26] text-pastel3 font-medium px-4 py-2 rounded-full shadow-md hover:bg-[#2a2b35] hover:text-pastel1 transition-all duration-300 border border-pastel3"
              >
                <FaEnvelope className="w-5 h-5 text-white" />
                <span className="text-white">{EMAIL_URL}</span>
              </a>

              {/* GitHub */}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-all duration-300 hover:scale-110 hover:text-pastel1"
              >
                <FaGithub className="w-10 h-10 text-gray-700 dark:text-white" />
              </a>

              {/* LinkedIn */}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-all duration-300 hover:scale-110 hover:text-pastel1"
              >
                <FaLinkedin className="w-10 h-10 text-gray-700 dark:text-white" />
              </a>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <img
              src={profileImage}
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-full shadow-xl border-4 border-white dark:border-[#1e1f26]"
            />
          </div>
        </div>
      </section>

      <WaveDivider className="text-pastel1 dark:text-gray-900 h-16" />
    </>
  );
}

export default Hero;
