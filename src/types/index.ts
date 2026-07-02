export interface Profile {
  name: string;
  designation: string; // e.g. "Frontend Developer"
  designations: string[]; // multiple roles for typewriter rotation, e.g. ["Frontend Developer", "React Developer", "Next.js Developer"]
  tagline: string; // one-line intro shown under the typewriter
  bio: string; // longer paragraph for About section
  photo: string; // path in /public
  resumeUrl: string; // path in /public, e.g. "/resume.pdf"
  email: string;
  phone: string;
  whatsapp?: string;
  location?: string;
  availableForWork: boolean;
}

export interface SocialLink {
  name: string; // "GitHub", "LinkedIn", etc.
  url: string;
  icon: string; // react-icons component name, e.g. "FaGithub"
}

export interface Skill {
  name: string;
  icon: string; // react-icons component name
  category: "Frontend" | "Backend" | "Database" | "Tools" | "Deployment";
  level?: number; // 0-100, optional if you want progress bars
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string; // "Present" if ongoing
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  slug: string; // used in /projects/[slug]
  title: string;
  thumbnail: string; // path in /public/images/projects
  gallery: string[];
  shortDescription: string; // for the card
  description: string; // longer, for detail page
  techStack: string[];
  features: string[];
  challenges: string;
  futureImprovements: string;
  liveUrl?: string;
  githubUrl: string; // client repo only, per assignment
  featured: boolean;
}
