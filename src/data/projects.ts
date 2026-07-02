import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "proj-1",
    slug: "project-one",
    title: "Project One",
    thumbnail: "/images/projects/project-one/thumbnail.png",
    gallery: [],
    shortDescription: "A short one-line description for the card.",
    description:
      "A longer description for the detail page — what it does, who it's for.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: ["Feature one", "Feature two"],
    challenges:
      "Describe a real, specific technical challenge you faced and how you solved it.",
    futureImprovements: "What you'd add or improve if you kept working on it.",
    liveUrl: "https://your-live-link.com",
    githubUrl: "https://github.com/your-username/project-one",
    featured: true,
  },
  {
    id: "proj-2",
    slug: "project-two",
    title: "Project two",
    thumbnail: "/images/projects/project-two/thumbnail.png",
    gallery: [],
    shortDescription: "A short two-line description for the card.",
    description:
      "A longer description for the detail page — what it does, who it's for.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: ["Feature two", "Feature two"],
    challenges:
      "Describe a real, specific technical challenge you faced and how you solved it.",
    futureImprovements: "What you'd add or improve if you kept working on it.",
    liveUrl: "https://your-live-link.com",
    githubUrl: "https://github.com/your-username/project-one",
    featured: true,
  },
  {
    id: "proj-3",
    slug: "project-three",
    title: "Project three",
    thumbnail: "/images/projects/project-three/thumbnail.png",
    gallery: [],
    shortDescription: "A short three-line description for the card.",
    description:
      "A longer description for the detail page — what it does, who it's for.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: ["Feature three", "Feature two"],
    challenges:
      "Describe a real, specific technical challenge you faced and how you solved it.",
    futureImprovements: "What you'd add or improve if you kept working on it.",
    liveUrl: "https://your-live-link.com",
    githubUrl: "https://github.com/your-username/project-one",
    featured: true,
  },
];
