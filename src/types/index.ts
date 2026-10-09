export interface Profile {
  nickname?: string;
  roles: string[];
  intro: string;
  bio: string[];
  role: string;
  focus: string;
  interests: string[];
  currentFocus: string[];
  terminal: { enabled: boolean; lines: { cmd: string; out: string[] }[] };
}
export interface Education {
  institution: string; degree: string; field?: string; startDate?: string; endDate?: string;
  location?: string; description?: string; achievements?: string[]; coursework?: string[];
}
export interface ResearchArea {
  title: string; description: string; topics: string[]; icon?: string; status?: 'Active' | 'Past' | 'Exploring';
  currentlyExploring?: boolean;
}
export type ExperienceType = 'Research Assistant' | 'Teaching Assistant' | 'Internship' | 'Software Engineer' | 'ML Engineer' | 'Research Engineer' | 'Academic Project';
export interface Experience {
  organization: string; role: string; type: ExperienceType; duration: string; location?: string;
  description?: string; responsibilities?: string[]; achievements?: string[]; technologies?: string[];
}
export interface Metric { label: string; value: string }
export interface Project {
  id: string; title: string; subtitle?: string; description: string; longDescription?: string;
  category: string; type: 'Research' | 'Engineering' | 'Academic'; status?: 'Completed' | 'Ongoing'; year?: string;
  image?: string; technologies: string[]; motivation?: string; problem?: string; approach?: string;
  architecture?: string; implementation?: string; experiments?: string; results?: string[]; metrics?: Metric[];
  github?: string; demo?: string; paper?: string; video?: string; dataset?: string; featured?: boolean;
}
export interface Publication {
  title: string; authors: string[]; venue: string; year: string; type: 'Paper' | 'Preprint' | 'Technical Report';
  abstract?: string; paperUrl?: string; codeUrl?: string; citation?: string; tags?: string[];
}
export interface Skill { name: string; level?: number; years?: number; projects?: string[] }
export interface SkillCategory { category: string; skills: Skill[] }
export interface Achievement {
  title: string; organization?: string; year?: string; description?: string; rank?: string;
  gateScore?: string; certificate?: string; link?: string; category?: string; featured?: boolean;
}
export interface Certificate {
  title: string; issuer: string; date?: string; credentialId?: string; image?: string; pdf?: string; verifyUrl?: string;
}
export interface TechnicalNote { title: string; description: string; date?: string; category: string; tags?: string[]; url?: string }
export interface Talk { title: string; event: string; date?: string; description?: string; slides?: string; video?: string; topics?: string[] }
export interface Repo { name: string; description: string; language?: string; stars?: number; topics?: string[]; githubUrl: string }
export interface ContactEmail { label: string; address: string }
export interface ContactData { intro: string; mailtoForm: boolean; emails?: ContactEmail[]; phone?: string }
export interface NavItem { label: string; id: string }
