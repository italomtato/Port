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

interface DataState {
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
    instagram: string;
    email: string;
  };
}

export const useDataStore = create<DataState>()(
  persist(
    () => ({
      projects: initialProjects,
      videos: initialVideos,
      education: initialEducation,
      events: initialEvents,
      skills: initialSkills,
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
        github: 'https://github.com/ItaloHenriqueMarquesCampos',
        linkedin: 'https://www.linkedin.com/in/data-italomarques/',
        facebook: 'https://www.facebook.com/italo.marques.tato',
        instagram: 'https://www.instagram.com/data.italomarques/',
        email: 'italo.marques.llemon@gmail.com',
      },
    }),
    {
      name: 'portfolio-storage',
    }
  )
);