// src/components/ThemeToggle.jsx
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle({ darkMode, setDarkMode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <FaSun className="w-5 h-5 text-yellow-300" />
      ) : (
        <FaMoon className="w-5 h-5 text-blue-200" />
      )}
    </button>
  );
}

export default ThemeToggle;
