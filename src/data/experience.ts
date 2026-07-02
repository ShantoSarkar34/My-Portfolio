import { Experience } from "../types";

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Company Name",
    role: "Your Role",
    startDate: "Jan 2024",
    endDate: "Present",
    description: "One-line summary of what you did there.",
    responsibilities: [
      "Responsibility one",
      "Responsibility two",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
];

// If you have no experience yet, leave this as an empty array: []
// The Experience section component will handle showing/hiding based on this.