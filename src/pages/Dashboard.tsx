import React, { useState, useEffect } from 'react';
import { BarChart2, RefreshCw, Maximize, Minimize, Download } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const dashboardUrl = "https://lookerstudio.google.com/reporting/d0789cab-744c-41ea-a2ea-cf483c0da5a6";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [refreshKey]);

  const handleRefresh = () => {
    setIsLoading(true);
    setRefreshKey(prevKey => prevKey + 1);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <BarChart2 className="mr-3 h-8 w-8 text-blue-600 dark:text-blue-400" />
              Dashboard em Tempo Real
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
              Visualize métricas e insights de dados em tempo real através do Looker Studio.
            </p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <button
              onClick={handleRefresh}
              className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center"
              aria-label="Refresh dashboard"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Atualizar
            </button>
            <button
              onClick={toggleFullscreen}
              className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center"
              aria-label="Toggle fullscreen"
            >
              {isFullscreen ? (
                <>
                  <Minimize className="h-4 w-4 mr-2" />
                  Sair da Tela Cheia
                </>
              ) : (
                <>
                  <Maximize className="h-4 w-4 mr-2" />
                  Tela Cheia
                </>
              )}
            </button>
            <a
              href={dashboardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 flex items-center"
            >
              <Download className="h-4 w-4 mr-2" />
              Abrir no Looker
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {isLoading ? (
            <div className="flex items-center justify-center h-[calc(100vh-250px)] min-h-[500px]">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600 dark:border-blue-400"></div>
            </div>
          ) : (
            <div className="relative pb-[56.25%] h-0 overflow-hidden">
              <iframe
                key={refreshKey}
                src={dashboardUrl}
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                title="Looker Studio Dashboard"
              ></iframe>
            </div>
          )}
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Sobre este Dashboard</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Este dashboard interativo apresenta métricas e KPIs importantes para análise de dados de negócios. Os dados são atualizados em tempo real, permitindo uma visão atual do desempenho.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Utilize os controles acima para atualizar os dados ou visualizar o dashboard em tela cheia para uma melhor experiência. Você também pode acessar o dashboard diretamente no Looker Studio para análises mais detalhadas.
          </p>
          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Dicas de uso:</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Utilize os filtros disponíveis no dashboard para refinar os dados</li>
              <li>Passe o mouse sobre os gráficos para ver informações detalhadas</li>
              <li>Clique nos elementos para fazer drill-down em dados específicos</li>
              <li>Use o modo de tela cheia para apresentações</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;