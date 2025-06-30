import { Project, Education, Event, Skill, Video } from './types';

export const initialProjects: Project[] = [
  {
    id: 1,
    title: "Painel de Análise de Dados de Cancelamentos (Projeto Privado)",
    description: "Desenvolvimento de um painel estratégico para monitorar os cancelamentos de cursos, identificando padrões e permitindo ações preventivas.",
    image: "/cancelamentos.jpg",
    tags: ["Looker Studio", "SQL", "Visualização de Dados", "Análise de Churn"],
    link: "https://github.com/ItaloHenriqueMarquesCampos/portfolio/blob/main/cancelamento_pincel.md"
  },
  {
    id: 2,
    title: "Painel de Comissionamento de Vendas – Consórcio (Projeto Privado)",
    description: "Desenvolvimento de uma planilha estratégica para controle de comissões, integrando dados de vendedores, gestores e empresa. A solução permite acompanhar metas, calcular comissões de forma automatizada e gerar relatórios mensais organizados. Como complemento, foi criado um painel visual no Looker Studio, com filtros dinâmicos e atualizações automáticas, facilitando a tomada de decisões e o acompanhamento em tempo real.",
    image: "/dashconsorcio.jpeg",
    tags: ["Google Sheets", "Looker Studio"],
    link: "https://github.com/ItaloHenriqueMarquesCampos/portfolio/blob/main/consorcio.md"
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
    date: "15 de Janeiro, 2024"
  },
  {
    id: 2,
    title: "SQL para Análise de Dados",
    description: "Domine as principais queries SQL para análise de dados eficiente.",
    vimeoId: "987654321",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Banco de Dados",
    date: "1 de Fevereiro, 2024"
  }
];

export const initialEducation: Education[] = [
  {
    id: 1,
    institution: "Pontifícia Universidade Católica Do Paraná (PUCPR)",
    degree: "Pós-graduação Lato Sensu",
    field: "Análise de dados para tomada de decisões",
    startDate: "2024",
    endDate: "2025",
    description: "Tomada de decisões baseada em dados (Data-driven decision making) · Ferramentas de visualização de dados · SQL · Análise estatística · Mineração de dados e machine learning · Interpretação de dados."
  },
    {
    id: 2,
    institution: "Centro Universitário do Leste de Minas Gerais (UnilesteOficial)",
    degree: "Bacharelado",
    field: "Engenharia de Produção",
    startDate: "2014",
    endDate: "2020",
    description: "Tomada de decisão · Empreendedorismo · Gestão de processos · Planejamento estratégico · Gestão de pessoas."
  },
    {
    id: 3,
    institution: "Centro Universitário Única",
    degree: "Pós-graduação Lato Sensu",
    field: "MBA Executivo em Gestão de Negócios e Marketing",
    startDate: "2019",
    endDate: "2021",
    description: "Gestão de marcas · Análises de mercado · Tomada de decisão · Marketing digital · Negociação e vendas · Planejamento estratégico · Gestão de equipes · Gestão financeira · Inovação e empreendedorismo · Comunicação corporativa."
  },
    {
    id: 4,
    institution: "UNINTER - Centro Universitário Internacional",
    degree: "Tecnólogo",
    field: "Processos Gerenciais",
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
    category: "Programação"
  },
  {
    id: 2,
    name: "SQL",
    category: "Banco de Dados"
  },
  {
    id: 3,
    name: "Tableau",
    category: "Visualização"
  },
  {
    id: 4,
    name: "Google Sheets",
    category: "Análise"
  },
  {
    id: 5,
    name: "Looker Studio",
    category: "Visualização"
  },
  {
    id: 6,
    name: "Power BI",
    category: "Visualização"
  },
  {
    id: 7,
    name: "Excel",
    category: "Ferramentas"
  },
  {
    id: 8,
    name: "Análise Estatística",
    category: "Análise"
  },
  {
    id: 9,
    name: "Data Storytelling",
    category: "Comunicação"
  }
];