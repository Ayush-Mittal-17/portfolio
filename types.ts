
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Frontend' | 'Backend' | 'Databases' | 'Generative AI' | 'Architecture' | 'Cloud & Deploy' | 'Version Control' | 'Languages' | 'Tools' | 'Soft Skills';
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  twitter?: string;
  projects: Project[];
  experiences: Experience[];
  skills: Skill[];
}
