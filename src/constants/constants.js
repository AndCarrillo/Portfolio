// IMPORTACIONES DE ASSETS
import projectImageLight from "../assets/project_Image/lightMode.png";
import projectImageDark from "../assets/project_Image/darkMode.png";
import projectImage2 from "../assets/project_Image/pokeGIF.gif";
import projectImage3 from "../assets/project_Image/powerBI.png";

// ICONOS (FontAwesome)
import { faCode, faDatabase, faTools } from "@fortawesome/free-solid-svg-icons";

// ========== INFORMACIÓN PERSONAL ==========
export const GITHUB_URL = "https://github.com/AndCarrillo";
export const LINKEDIN_URL = "https://www.linkedin.com/in/andrea-carrillo-vlk/";
export const EMAIL_URL = "acarrillo.vlk@gmail.com";

// ========== INFORMACIÓN DE CONTACTO ==========
export const LOCATION = "Heredia, Costa Rica";
export const COPYRIGHT_NAME = "Andrea Carrillo";

// ========== EXPERIENCIA LABORAL ==========
export const WORK_ITEMS = [
  { id: "work_1", descriptionKey: "about.work_1" },
  { id: "work_2", descriptionKey: "about.work_2" },
  { id: "work_3", descriptionKey: "about.work_3" },
];

// ========== APRENDIZAJES ==========
export const LEARNING_ITEMS = [
  { id: "learn_1", descriptionKey: "about.learn_1" },
  { id: "learn_2", descriptionKey: "about.learn_2" },
  { id: "learn_3", descriptionKey: "about.learn_3" },
];

// ========== HABILIDADES ==========
export const SKILLS_DATA = [
  {
    id: "languages",
    icon: faCode,
    titleKey: "skills.languages_title",
    itemsKeys: [
      "skills.languages_1",
      "skills.languages_2",
      "skills.languages_3",
    ],
  },
  {
    id: "databases",
    icon: faDatabase,
    titleKey: "skills.databases_title",
    itemsKeys: [
      "skills.databases_1",
      "skills.databases_2",
      "skills.databases_3",
    ],
  },
  {
    id: "tools",
    icon: faTools,
    titleKey: "skills.tools_title",
    itemsKeys: [
      "skills.tools_1",
      "skills.tools_2",
      "skills.tools_3",
      "skills.tools_4",
    ],
  },
];

// ========== PROYECTOS ==========
export const PROJECTS = [
  {
    id: "ahorcado",
    titleKey: "projects.p1.title",
    descriptionKey: "projects.p1.description",
    imageLight: projectImageLight,
    imageDark: projectImageDark,
    link: "https://github.com/AndCarrillo/Juego-Ahorcado-ONE",
    techs: ["Java"],
  },
  {
    id: "pokeencriptador",
    titleKey: "projects.p2.title",
    descriptionKey: "projects.p2.description",
    image: projectImage2,
    link: "https://github.com/AndCarrillo/PokeEncriptador-ONE",
    techs: ["Java"],
  },
  {
    id: "powerbi",
    titleKey: "projects.p3.title",
    descriptionKey: "projects.p3.description",
    image: projectImage3,
    link: "#",
    techs: ["Power BI", "SQL"],
  },
];
