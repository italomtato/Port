import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { useDataStore } from '../store/dataStore';

const VideoDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { videos } = useDataStore();
  const video = videos.find((v) => v.id === Number(id));

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!video) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Vídeo não encontrado</h2>
          <Link
            to="/videos"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Voltar para Vídeos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/videos"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium mb-6"
        >
          <ArrowLeft className="mr-2 h-5 w-5" /> Voltar para Vídeos
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 relative">
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src={`https://player.vimeo.com/video/${video.vimeoId}?h=f0c5b9b7e6&title=0&byline=0&portrait=0`}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={video.title}
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
          
          <div className="p-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                <Tag className="mr-1 h-4 w-4" /> {video.category}
              </span>
              <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="mr-1 h-4 w-4" /> {video.date}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{video.title}</h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6">{video.description}</p>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">O que você vai aprender</h2>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-6">
                <li className="mb-2">Compreensão dos conceitos e técnicas fundamentais</li>
                <li className="mb-2">Implementação prática com exemplos do mundo real</li>
                <li className="mb-2">Melhores práticas e armadilhas comuns a evitar</li>
                <li className="mb-2">Estratégias avançadas para otimização</li>
              </ul>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Vídeos Relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {videos
                  .filter(v => v.id !== video.id && v.category === video.category)
                  .slice(0, 2)
                  .map(relatedVideo => (
                    <Link 
                      key={relatedVideo.id} 
                      to={`/videos/${relatedVideo.id}`}
                      className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
                    >
                      <div className="flex-shrink-0 w-16 h-16 mr-4">
                        <img 
                          src={relatedVideo.thumbnail} 
                          alt={relatedVideo.title}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">{relatedVideo.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{relatedVideo.date}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;