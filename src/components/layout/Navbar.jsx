import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaCode,
  FaBars,
  FaTimes,
  FaUser,
  FaTools,
  FaFolderOpen,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";
import ThemeToggle from "../common/ThemeToggle";

// Secciones del menú
const sections = ["hero", "about", "skills", "projects", "contact"];

// Íconos asociados a cada sección
const menuIcons = {
  hero: <FaHome className="mr-2" />,
  about: <FaUser className="mr-2" />,
  skills: <FaTools className="mr-2" />,
  projects: <FaFolderOpen className="mr-2" />,
  contact: <FaEnvelope className="mr-2" />,
};

function Navbar({ darkMode, setDarkMode }) {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavClick = (section) => {
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 right-0 w-full bg-[#0b0b16] text-white shadow-md z-50 backdrop-blur-sm transition-colors duration-500">
      <div className="relative max-w-screen-xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-lg font-semibold z-20">
          <FaCode className="text-2xl text-pastel3" />
          <span className="tracking-wide text-white">{t("siteName")}</span>
        </div>

        {/* Menú Escritorio */}
        <nav className="hidden md:flex gap-4 items-center z-10">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className="px-4 py-2 rounded-md text-gray-200 hover:text-pastel1 hover:bg-[#1e1f26] transition-colors duration-300 flex items-center"
            >
              {menuIcons[section]}
              {t(`${section}.title`)}
            </button>
          ))}
        </nav>

        {/* Idioma + Tema (siempre visibles) */}
        <div className="flex gap-2 items-center z-10">
          {["en", "es"].map((lang) => (
            <button
              key={lang}
              onClick={() => toggleLanguage(lang)}
              className="px-3 py-2 text-sm font-medium text-gray-100 bg-[#1e1f26] border border-pastel3 rounded-md hover:bg-[#2a2b35] hover:text-pastel1 transition-all duration-300"
            >
              {lang.toUpperCase()}
            </button>
          ))}
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {/* Botón Hamburguesa */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-20 text-pastel3"
          aria-label="Menú"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-4 flex flex-col items-center gap-4 bg-[#0b0b16] shadow-md z-10 border-t border-pastel3">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className="text-gray-200 hover:text-pastel1 transition-colors duration-300 flex items-center"
            >
              {menuIcons[section]}
              {t(`${section}.title`)}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
