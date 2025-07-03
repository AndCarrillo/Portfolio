// tailwind.config.js
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          base: "#e5e7fa", // tono base más fuerte que #f4f0ff
          accent: "#b8a8ec", // tono acentuado más definido
          primary: "#75aadb", // azul medio
          secondary: "#89d7e6", // celeste
          link: "#3b82f6",

          gradientLight1: "#eae4ff",
          gradientLight2: "#d8cfff",
          gradientLight3: "#f0ebff",

          gradientDark1: "#0d0d1a",
          gradientDark2: "#0b0b16",
          gradientDark3: "#070612",
        },
        surface: {
          light: "#e8f0fa",
          dark: "#1a2533",
        },
        text: {
          primary: "#1e293b",
          light: "#e4f0f8",
          muted: "#64748b",
          mutedDark: "#94a3b8",
          footer: "#7dd3fc",
          footerDark: "#bae6fd",
        },
        border: {
          light: "#cbd5e1",
          dark: "#475569",
        },
      },
    },
  },
  plugins: [],
};
