export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Event {
  id: number;
  name: string;
  organizer: string;
  date: string;
  description: string;
  role?: string;
}

export interface Skill {
  id: number;
  name: string;
  level?: number;
  category: string;
}

export interface Video {
  id: number;
  title: string;
  description: string;
  vimeoId: string;
  thumbnail: string;
  category: string;
  date: string;
}