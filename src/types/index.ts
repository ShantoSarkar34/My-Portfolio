export interface Profile {
  name: string;
  designation: string; 
  designations: string[]; 
  bio: string; 
  photo: string; 
  tagline: string;
  resumeUrl: string; 
  email: string;
  phone: string;
  whatsapp?: string;
  location?: string;
  availableForWork: boolean;
}

export interface SocialLink {
  name: string; 
  url: string;
  icon: string; 
}

export interface Skill {
  name: string;
  icon: string; 
  category: "Frontend" | "Backend" | "Database" | "Tools" | "Deployment";
  level?: number; 
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
  endDate: string; 
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  thumbnail: string; 
  gallery: string[];
  shortDescription: string; 
  description: string; 
  techStack: string[];
  features: string[];
  challenges: string;
  futureImprovements: string;
  liveUrl?: string;
  backendUrl?: string;
  backendGithubUrl?: string;
  githubUrl: string; 
  featured: boolean;
}
