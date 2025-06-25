import React from 'react';
import { useAdminStore } from '../store/adminStore';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const { projects } = useAdminStore();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Uma coleção de projetos de análise e visualização de dados que mostram minhas habilidades e experiência em transformar dados em insights acionáveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
