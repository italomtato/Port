import { Project, Education, Event, Skill, Video } from './types';

export const initialProjects: Project[] = [
  {
    id: 1,
    title: "Painel de Análise de Dados de Cancelamentos",
    description: "Desenvolvimento de um painel estratégico para monitorar os cancelamentos de cursos, identificando padrões e permitindo ações preventivas.",
    image: "/cancelamentos.jpg",
    tags: ["Looker Studio", "SQL", "Data Visualization", "Churn Analytics"],
    link: "https://github.com/ItaloHenriqueMarquesCampos/cancelamentos_pincel/blob/main/README.md"
  },
  {
    id: 2,
    title: "Análise Preditiva de Vendas",
    description: "Implementação de modelo preditivo para forecast de vendas utilizando técnicas avançadas de machine learning.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    link: "#"
  }
];

export const initialVideos: Video[] = [
  {
    id: 1,
    title: "Introdução à Análise de Dados",
    description: "Aprenda os fundamentos da análise de dados e como começar sua jornada nesta área.",
    vimeoId: "123456789",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Fundamentos",
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "SQL para Análise de Dados",
    description: "Domine as principais queries SQL para análise de dados eficiente.",
    vimeoId: "987654321",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Database",
    date: "2024-02-01"
  }
];

export const initialEducation: Education[] = [
  {
    id: 1,
    institution: "Universidade Federal de Minas Gerais",
    degree: "Bacharelado",
    field: "Ciência da Computação",
    startDate: "2020",
    endDate: "2024",
    description: "Foco em análise de dados, machine learning e estatística computacional."
  },
  {
    id: 2,
    institution: "DataCamp",
    degree: "Certificação Profissional",
    field: "Data Science",
    startDate: "2023",
    endDate: "2023",
    description: "Especialização em Python, R e ferramentas de análise de dados."
  }
];

export const initialEvents: Event[] = [
  {
    id: 1,
    name: "Data Science Summit 2024",
    organizer: "Data Science Academy",
    date: "2024-03-15",
    description: "Conferência internacional sobre as últimas tendências em data science.",
    role: "Palestrante"
  },
  {
    id: 2,
    name: "Workshop de Visualização de Dados",
    organizer: "Grupo Prominas",
    date: "2024-02-20",
    description: "Workshop prático sobre técnicas avançadas de visualização de dados.",
    role: "Instrutor"
  }
];

export const initialSkills: Skill[] = [
  {
    id: 1,
    name: "Python",
    level: 90,
    category: "Programming"
  },
  {
    id: 2,
    name: "SQL",
    level: 85,
    category: "Database"
  },
  {
    id: 3,
    name: "Tableau",
    level: 80,
    category: "Visualization"
  },
  {
    id: 4,
    name: "Machine Learning",
    level: 75,
    category: "Analysis"
  },
  {
    id: 5,
    name: "R",
    level: 70,
    category: "Programming"
  },
  {
    id: 6,
    name: "Power BI",
    level: 85,
    category: "Visualization"
  },
  {
    id: 7,
    name: "Data Cleaning",
    level: 90,
    category: "Data Preparation"
  },
  {
    id: 8,
    name: "Excel",
    level: 95,
    category: "Tools"
  },
  {
    id: 9,
    name: "Statistical Analysis",
    level: 85,
    category: "Analysis"
  },
  {
    id: 10,
    name: "Data Storytelling",
    level: 90,
    category: "Communication"
  }
];