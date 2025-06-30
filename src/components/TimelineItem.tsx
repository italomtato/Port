import React from 'react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  role?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  date,
  description,
  role,
}) => {
  return (
    <div className="mb-8 flex">
      <div className="flex flex-col items-center mr-4">
        <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
        <div className="h-full w-0.5 bg-blue-200 dark:bg-blue-800"></div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md flex-1 transition-all duration-300 hover:shadow-lg">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-blue-600 dark:text-blue-400 font-medium">{subtitle}</p>
        <div className="flex flex-wrap items-center mt-1 mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">{date}</span>
          {role && (
            <>
              <span className="mx-2 text-gray-400 dark:text-gray-600">•</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{role}</span>
            </>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;