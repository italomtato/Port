import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Project, Video, Education, Event, Skill } from '../types';
import {
  initialProjects,
  initialVideos,
  initialEducation,
  initialEvents,
  initialSkills
} from '../data';

interface AdminState {
  projects: Project[];
  videos: Video[];
  education: Education[];
  events: Event[];
  skills: Skill[];
  aboutContent: {
    title: string;
    subtitle: string;
    description: string[];
    photoUrl: string;
  };
  contactInfo: {
    phone: string;
    location: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    facebook: string;
    twitter: string;
    instagram: string;
    email: string;
  };
  visibility: {
    [key: string]: boolean;
  };
  addProject: (project: Project) => void;
  updateProject: (id: number, project: Partial<Project>) => void;
  deleteProject: (id: number) => void;
  toggleProjectVisibility: (id: number) => void;
  addVideo: (video: Video) => void;
  updateVideo: (id: number, video: Partial<Video>) => void;
  deleteVideo: (id: number) => void;
  toggleVideoVisibility: (id: number) => void;
  addEducation: (education: Education) => void;
  updateEducation: (id: number, education: Partial<Education>) => void;
  deleteEducation: (id: number) => void;
  toggleEducationVisibility: (id: number) => void;
  addEvent: (event: Event) => void;
  updateEvent: (id: number, event: Partial<Event>) => void;
  deleteEvent: (id: number) => void;
  toggleEventVisibility: (id: number) => void;
  addSkill: (skill: Skill) => void;
  updateSkill: (id: number, skill: Partial<Skill>) => void;
  deleteSkill: (id: number) => void;
  toggleSkillVisibility: (id: number) => void;
  updateSocialLinks: (links: Partial<AdminState['socialLinks']>) => void;
  updateAboutContent: (content: Partial<AdminState['aboutContent']>) => void;
  updateContactInfo: (info: Partial<AdminState['contactInfo']>) => void;
}

export const useAdminStore = create<AdminState>()(
  persist(
    (set) => ({
      projects: initialProjects,
      videos: initialVideos,
      education: initialEducation,
      events: initialEvents,
      skills: initialSkills,
      visibility: {},
      aboutContent: {
        title: 'Sobre Mim',
        subtitle: 'Conheça mais sobre minha jornada e experiência como Analista de Dados.',
        description: [
          'Como Analista de Dados, minha paixão é transformar dados complexos em insights acionáveis que impulsionam decisões de negócios. Minha jornada começou com uma curiosidade natural por números e padrões, que me levou a explorar o vasto mundo da análise de dados.',
          'Ao longo dos anos, desenvolvi uma sólida experiência em ferramentas e tecnologias essenciais para análise de dados, incluindo SQL, Python, e ferramentas de visualização como Power BI e Tableau. Minha abordagem combina rigor analítico com uma forte capacidade de comunicação, permitindo traduzir descobertas técnicas em recomendações práticas.',
          'Atualmente, foco meu trabalho em ajudar organizações a tomar decisões mais inteligentes baseadas em dados, seja através de análises preditivas, dashboards interativos ou relatórios estratégicos.'
        ],
        photoUrl: '/Italo.jpeg'
      },
      contactInfo: {
        phone: '+55 (31) 9 8265-1896',
        location: 'Cel. Fabriciano, Minas Gerais, Brasil'
      },
      socialLinks: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        email: 'contact@example.com',
      },

      addProject: (project) =>
        set((state) => ({ projects: [...state.projects, project] })),

      updateProject: (id, project) =>
        set((state) => ({
          projects: state.projects.map((p) =>
            p.id === id ? { ...p, ...project } : p
          ),
        })),

      deleteProject: (id) =>
        set((state) => ({
          projects: state.projects.filter((p) => p.id !== id),
        })),

      toggleProjectVisibility: (id) =>
        set((state) => ({
          visibility: {
            ...state.visibility,
            [`project_${id}`]: !state.visibility[`project_${id}`],
          },
        })),

      addVideo: (video) =>
        set((state) => ({ videos: [...state.videos, video] })),

      updateVideo: (id, video) =>
        set((state) => ({
          videos: state.videos.map((v) =>
            v.id === id ? { ...v, ...video } : v
          ),
        })),

      deleteVideo: (id) =>
        set((state) => ({
          videos: state.videos.filter((v) => v.id !== id),
        })),

      toggleVideoVisibility: (id) =>
        set((state) => ({
          visibility: {
            ...state.visibility,
            [`video_${id}`]: !state.visibility[`video_${id}`],
          },
        })),

      addEducation: (education) =>
        set((state) => ({ education: [...state.education, education] })),

      updateEducation: (id, education) =>
        set((state) => ({
          education: state.education.map((e) =>
            e.id === id ? { ...e, ...education } : e
          ),
        })),

      deleteEducation: (id) =>
        set((state) => ({
          education: state.education.filter((e) => e.id !== id),
        })),

      toggleEducationVisibility: (id) =>
        set((state) => ({
          visibility: {
            ...state.visibility,
            [`education_${id}`]: !state.visibility[`education_${id}`],
          },
        })),

      addEvent: (event) =>
        set((state) => ({ events: [...state.events, event] })),

      updateEvent: (id, event) =>
        set((state) => ({
          events: state.events.map((e) =>
            e.id === id ? { ...e, ...event } : e
          ),
        })),

      deleteEvent: (id) =>
        set((state) => ({
          events: state.events.filter((e) => e.id !== id),
        })),

      toggleEventVisibility: (id) =>
        set((state) => ({
          visibility: {
            ...state.visibility,
            [`event_${id}`]: !state.visibility[`event_${id}`],
          },
        })),

      addSkill: (skill) =>
        set((state) => ({ skills: [...state.skills, skill] })),

      updateSkill: (id, skill) =>
        set((state) => ({
          skills: state.skills.map((s) =>
            s.id === id ? { ...s, ...skill } : s
          ),
        })),

      deleteSkill: (id) =>
        set((state) => ({
          skills: state.skills.filter((s) => s.id !== id),
        })),

      toggleSkillVisibility: (id) =>
        set((state) => ({
          visibility: {
            ...state.visibility,
            [`skill_${id}`]: !state.visibility[`skill_${id}`],
          },
        })),

      updateSocialLinks: (links) =>
        set((state) => ({
          socialLinks: { ...state.socialLinks, ...links },
        })),

      updateAboutContent: (content) =>
        set((state) => ({
          aboutContent: { ...state.aboutContent, ...content },
        })),

      updateContactInfo: (info) =>
        set((state) => ({
          contactInfo: { ...state.contactInfo, ...info },
        })),
    }),
    {
      name: 'portfolio-storage',
    }
  )
);