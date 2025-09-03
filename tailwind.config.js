// tailwind.config.js
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          base: "#e9d5ff", // base pastel suave (lavanda gris)
          accent: "#c7b6f2", // lila claro
          primary: "#40196b", // celeste pastel
          secondary: "#a0e7e5", // menta suave
          link: "#5b8dfd", // azul vibrante para enlaces

          gradientLight1: "#f4f0ff", // fondo lavanda claro
          gradientLight2: "#eae4ff",
          gradientLight3: "#f9f7ff",

          gradientDark1: "#10101a",
          gradientDark2: "#0b0b16",
          gradientDark3: "#070612",
        },
        surface: {
          light: "#ecf4ff", // azul cielo pastel claro
          dark: "#1a2533", // azul noche profundo
        },
        text: {
          primary: "#1e293b", // azul oscuro neutro
          light: "#e8f0fc", // casi blanco azulado (modo dark)
          muted: "#000", // gris azulado
          mutedDark: "#9acaff", // celeste suave
          footer: "#5b8dfd", // azul más fuerte para texto
          footerDark: "#cde5ff", // celeste grisáceo (modo dark)
        },
        border: {
          light: "#8372AC", // lavanda
          dark: "#ECD0EF", // rosado lavanda
        },
      },
    },
  },
  plugins: [],
};
