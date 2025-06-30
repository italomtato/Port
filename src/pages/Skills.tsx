import React from 'react';
import { useDataStore } from '../store/dataStore';
import { Code, BarChart2, Database, PieChart } from 'lucide-react';

const Skills: React.FC = () => {
  const { skills } = useDataStore();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Sobre Mim</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Conheça mais sobre minha jornada e experiência como Analista de Dados.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-1/3 flex items-center">
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/Italo.jpeg"
                  alt="Italo Henrique"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Minha História - Italo Marques</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Como Analista de Dados, minha paixão é transformar dados complexos em insights acionáveis que impulsionam decisões de negócios. Minha jornada começou com uma curiosidade natural por números e padrões, que me levou a explorar o vasto mundo da análise de dados.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Ao longo dos anos, desenvolvi uma sólida experiência em ferramentas e tecnologias essenciais para análise de dados, incluindo SQL, Python, e ferramentas de visualização como Power BI e Tableau. Minha abordagem combina rigor analítico com uma forte capacidade de comunicação, permitindo traduzir descobertas técnicas em recomendações práticas.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Atualmente, foco meu trabalho em ajudar organizações a tomar decisões mais inteligentes baseadas em dados, seja através de análises preditivas, dashboards interativos ou relatórios estratégicos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Minhas Habilidades</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div 
                key={skill.id}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-between"
              >
                <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
                <span className="text-blue-600 dark:text-blue-400">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;