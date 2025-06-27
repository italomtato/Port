import { Project, Education, Event, Skill, Video } from './types';

export const initialProjects: Project[] = [
  {
    id: 1,
    title: "Painel de Análise de Dados de Cancelamentos",
    description: "Desenvolvimento de um painel estratégico para monitorar os cancelamentos de cursos, identificando padrões e permitindo ações preventivas.",
    image: "/cancelamentos.jpg",
    tags: ["Looker Studio", "SQL", "Data Visualization", "Churn Analytics"],
    link: "https://github.com/ItaloHenriqueMarquesCampos/portfolio/blob/110db226c755a0ca86f1b1e216e3d34f644fd802/cancelamento_pincel.md"
  },
  {
    id: 2,
    title: "Análise Preditiva de Vendas",
    description: "Implementação de modelo preditivo para forecast de vendas utilizando técnicas avançadas de machine learning.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    link: "#"
  },
  {
    id: 2,
    title: "Análise Preditiva de Vendas",
    description: "Implementação de modelo preditivo para forecast de vendas utilizando técnicas avançadas de machine learning.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    link: "#"
  },
  {
    id: 2,
    title: "Análise Preditiva de Vendas",
    description: "Implementação de modelo preditivo para forecast de vendas utilizando técnicas avançadas de machine learning.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    link: "#"
  },
  {
    id: 2,
    title: "Análise Preditiva de Vendas",
    description: "Implementação de modelo preditivo para forecast de vendas utilizando técnicas avançadas de machine learning.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    link: "#"
  },
  {
    id: 2,
    title: "Análise Preditiva de Vendas",
    description: "Implementação de modelo preditivo para forecast de vendas utilizando técnicas avançadas de machine learning.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    link: "#"
  },
  {
    id: 2,
    title: "Análise Preditiva de Vendas",
    description: "Implementação de modelo preditivo para forecast de vendas utilizando técnicas avançadas de machine learning.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    link: "#"
  },
  {
    id: 2,
    title: "Análise Preditiva de Vendas",
    description: "Implementação de modelo preditivo para forecast de vendas utilizando técnicas avançadas de machine learning.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    link: "#"
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

export const initialEducation: Eventos[] = [
  {
    id: 1,
    institution: "Pontifícia Universidade Católica Do Paraná (PUCPR)",
    degree: "Pós-graduação Lato Sensu",
    field: "Analise de dados para tomada de decisões",
    startDate: "2024",
    endDate: "2025",
    description: "Tomada de decisões baseada em dados (Data-driven decision making) · Ferramentas de visualização de dados · SQL · Análise estatística · Mineração de dados e machine learning · Interpretação de dados."
  },
    {
    id: 2,
    institution: "Centro Universitário do Leste de Minas Gerais (UnilesteOficial)",
    degree: "Bacharelado",
    field: "Engenharia, Engenharia de Produção",
    startDate: "2014",
    endDate: "2020",
    description: "Tomada de decisão · Empreendedorismo · Gestão de processos · Planejamento estratégico · Gestão de pessoas."
  },
    {
    id: 3,
    institution: "Centro Universitário Única",
    degree: "Pós-graduação Lato Sensu",
    field: "Mba Executivo Em Gestão De Negócios E Marketing",
    startDate: "2019",
    endDate: "2021",
    description: "Gestão de marcas · Análises de mercado · Tomada de decisão · Marketing digital · Negociação e vendas · Planejamento estratégico · Gestão de equipes · Gestão financeira · Inovação e empreendedorismo · Comunicação corporativa."
  },
    {
    id: 4,
    institution: "UNINTER - Centro Universitário Internacional",
    degree: "Tecnólogo",
    field: "Processos Gerenciais, Gestão",
    startDate: "2012",
    endDate: "2014",
    description: "Tomada de decisão · Empreendedorismo · Gestão de processos · Planejamento estratégico · Gestão de pessoas."
  }
];

export const initialEvents: Event[] = [
  {
    id: 1,
    name: "Startup Weekend Vale do Aço 2019",
    organizer: "Startup Weekend",
    date: "2019",
    description: "O Startup Weekend Vale do Aço 2019 foi um evento de inovação e empreendedorismo onde ideias viraram startups em 54 horas. Fiquei em 2º lugar com meu projeto.",
    role: "Participante"
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
