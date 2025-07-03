import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

function Navbar({ darkMode, setDarkMode }) {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setMenuOpen(false); // cerrar menú en móvil al cambiar idioma
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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

        {/* Botón Hamburguesa */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-20 text-pastel3"
          aria-label="Menú"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Menú central - Escritorio */}
        <nav className="hidden md:flex gap-4 z-10">
          {["about", "skills", "projects", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className="px-4 py-2 rounded-md text-gray-200 hover:text-pastel3 hover:bg-[#1e1f26] transition duration-300"
            >
              {t(`${section}.title`)}
            </button>
          ))}
        </nav>

        {/* Idioma + tema - Escritorio */}
        <div className="hidden md:flex gap-2 items-center z-10">
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

        {/* Menú móvil */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#0b0b16] flex flex-col items-center gap-4 py-6 shadow-md md:hidden z-10 border-t border-pastel3">
            {["about", "skills", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="text-gray-200 hover:text-pastel3 transition"
              >
                {t(`${section}.title`)}
              </button>
            ))}

            <div className="flex gap-4 mt-4">
              {["en", "es"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => toggleLanguage(lang)}
                  className="px-3 py-1 text-sm font-medium text-gray-100 bg-[#1e1f26] border border-pastel3 rounded-md hover:bg-[#2a2b35] hover:text-pastel1 transition-all duration-300"
                >
                  {lang.toUpperCase()}
                </button>
              ))}
              <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
