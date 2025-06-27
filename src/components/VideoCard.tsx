import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Calendar } from 'lucide-react';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden group">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to={`/videos/${video.id}`}
            className="p-3 bg-blue-600 rounded-full text-white transform scale-0 group-hover:scale-100 transition-transform duration-300"
            aria-label="Play video"
          >
            <Play className="h-8 w-8" />
          </Link>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
            {video.category}
          </span>
          <div className="flex items-center ml-3 text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="h-4 w-4 mr-1" />
            {video.date}
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{video.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{video.description}</p>
        <Link
          to={`/videos/${video.id}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
        >
          Assista ao Vídeo <Play className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;