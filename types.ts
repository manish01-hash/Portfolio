export interface Project {
  title: string;
  description: string;
  tags: string[];
  role: string;
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  project?: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  icon?: string;
  url?: string;
  credentialId?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}