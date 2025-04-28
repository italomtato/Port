import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Tag, ExternalLink } from 'lucide-react';
import { useAdminStore } from '../store/adminStore';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { projects } = useAdminStore();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project not found</h2>
          <Link
            to="/projects"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/projects"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium mb-6"
        >
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Projects
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                >
                  <Tag className="mr-1 h-4 w-4" /> {tag}
                </span>
              ))}
            </div>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Visão geral do projeto</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Este projeto teve como objetivo monitorar e analisar cancelamentos de alunos nos cursos do Grupo Prominas, fornecendo insights estratégicos para melhorar a retenção. A análise foi realizada com base em dados acadêmicos, aplicando técnicas avançadas para identificar padrões e causas da evasão.
              </p>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Metodologia</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A abordagem utilizada incluiu Coleta de Dados, Tratamento e Limpeza, Análise Estatística, Visualização de Dados.
              </p>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Resultados</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A análise revelou insights estratégicos que ajudaram na formulação de ações para reduzir a evasão. <br /> 
Entre os principais achados: <br />
                 <br />
✔ Identificação dos cursos com maior índice de cancelamento. <br />
✔ Detecção dos períodos críticos de evasão. <br />
✔ Principais motivos que levam os alunos a desistirem. <br />
✔ Desenvolvimento de estratégias para melhorar a retenção. <br />
              </p>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Ferramentas usadas</h2>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-6">
                {project.tags.map((tag, index) => (
                  <li key={index} className="mb-2">{tag}</li>
                ))}
              </ul>
              
              <div className="mt-8">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                >
                  View Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;