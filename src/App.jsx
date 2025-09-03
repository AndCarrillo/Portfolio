import "./i18n/i18n";
import "./index.css";
import { useState, useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import AboutMe from "./components/sections/AboutMe";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Section from "./components/common/Section";
import BlurBlob from "./components/common/BlurBlob";

function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", darkMode);
    root.classList.add("scroll-smooth");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="relative min-h-[100vh] transition-colors duration-300 text-gray-800 dark:text-gray-400">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Fondo base con degradado suave y patrón */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#f4f0ff] via-[#eae4ff] to-[#faf9ff] dark:from-[#0d0d1a] dark:via-[#0b0b16] dark:to-[#070612]">
        <div className="absolute inset-0 bg-[radial-gradient(#00000011_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0c_1px,transparent_1px)] bg-[size:16px_24px] pointer-events-none mix-blend-overlay" />
      </div>

      {/* Blobs decorativos suaves */}
      <BlurBlob
        position={{ top: "30%", left: "15%" }}
        size={{ width: "32%", height: "38%" }}
        className="bg-pastel1 dark:bg-pastel5 opacity-30 blur-2xl"
      />
      <BlurBlob
        position={{ top: "60%", left: "65%" }}
        size={{ width: "25%", height: "25%" }}
        className="bg-pastel2 dark:bg-pastel6 opacity-20 blur-3xl"
      />

      {/* Secciones del portafolio */}
      <main className="relative z-10">
        <Hero />
        <Section id="about" withWave flipWave bgColor="bg-transparent">
          <AboutMe />
        </Section>
        <Section id="skills" withWave bgColor="bg-transparent">
          <Skills />
        </Section>
        <Section id="projects" withWave flipWave bgColor="bg-transparent">
          <Projects darkMode={darkMode} />
        </Section>
        <Section id="contact" bgColor="bg-pastel1 dark:bg-pastel5">
          <Contact />
        </Section>
      </main>
    </div>
  );
}

export default App;
