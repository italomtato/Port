import React from 'react';
import { useDataStore } from '../store/dataStore';
import TimelineItem from '../components/TimelineItem';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const { education, events } = useDataStore();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Educação & Eventos</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Minha formação acadêmica e eventos profissionais moldaram meu conhecimento em análise de dados.
          </p>
        </div>
        
        {/* Education Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Educação</h2>
          </div>
          
          <div className="relative">
            {education.map((edu) => (
              <TimelineItem
                key={edu.id}
                title={edu.degree}
                subtitle={edu.institution}
                date={`${edu.startDate} - ${edu.endDate}`}
                description={edu.description}
              />
            ))}
          </div>
        </section>
        
        {/* Events Section */}
        <section>
          <div className="flex items-center mb-8">
            <Calendar className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Eventos Profissionais</h2>
          </div>
          
          <div className="relative">
            {events.map((event) => (
              <TimelineItem
                key={event.id}
                title={event.name}
                subtitle={event.organizer}
                date={event.date}
                description={event.description}
                role={event.role}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;