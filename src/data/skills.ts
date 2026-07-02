import { Skill } from "../types";

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5", icon: "FaHtml5", category: "Frontend" },
  { name: "CSS3", icon: "FaCss3Alt", category: "Frontend" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", category: "Frontend" },
  { name: "JavaScript", icon: "SiJavascript", category: "Frontend" },
  { name: "TypeScript", icon: "SiTypescript", category: "Frontend" },
  { name: "React", icon: "FaReact", category: "Frontend" },
  { name: "Next.js", icon: "SiNextdotjs", category: "Frontend" },
  { name: "Context API", icon: "FiLayers", category: "Frontend" },

  // Backend
  { name: "Node.js", icon: "FaNodeJs", category: "Backend" },
  { name: "Express", icon: "SiExpress", category: "Backend" },
  { name: "JWT", icon: "SiJsonwebtokens", category: "Backend" },

  // Database
  { name: "MongoDB", icon: "SiMongodb", category: "Database" },
  { name: "PostgreSQL", icon: "SiPostgresql", category: "Database" },
  { name: "Prisma", icon: "SiPrisma", category: "Database" },
  { name: "Firebase", icon: "SiFirebase", category: "Database" },

  // Tools
  { name: "GitHub", icon: "FaGithub", category: "Tools" },
  { name: "VS Code", icon: "TbBrandVscode", category: "Tools" },
];
