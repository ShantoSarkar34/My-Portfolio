import { Experience } from "../types";

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Depth Search",
    role: "Front End Developer",
    startDate: "september 2025",
    endDate: "march 2026",
    description: "One-line summary of what you did there.",
    responsibilities: [
      "Responsibility one",
      "Responsibility two",
    ],
    technologies: [ "Next.js", "Tailwind CSS", "Custom Ui", "AWS"],
  },
];

// If you have no experience yet, leave this as an empty array: []
// The Experience section component will handle showing/hiding based on this.