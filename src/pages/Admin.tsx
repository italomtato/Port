import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useAdminStore } from '../store/adminStore';
import ContentEditor from '../components/admin/ContentEditor';
import {
  FileText,
  Video,
  GraduationCap,
  Settings,
  Plus,
  Save,
  Trash2
} from 'lucide-react';

const Admin: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('content');
  const [activeContentTab, setActiveContentTab] = useState('projects');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [editedSocialLinks, setEditedSocialLinks] = useState<Record<string, string>>({});
  const [editedAboutContent, setEditedAboutContent] = useState<Record<string, any>>({});
  const [editedContactInfo, setEditedContactInfo] = useState<Record<string, string>>({});
  const [newSkill, setNewSkill] = useState({ name: '', level: 0, category: '' });

  const {
    projects,
    videos,
    education,
    events,
    skills,
    aboutContent,
    contactInfo,
    socialLinks,
    addProject,
    updateProject,
    deleteProject,
    addVideo,
    updateVideo,
    deleteVideo,
    addEducation,
    updateEducation,
    deleteEducation,
    addEvent,
    updateEvent,
    deleteEvent,
    addSkill,
    updateSkill,
    deleteSkill,
    updateSocialLinks,
    updateAboutContent,
    updateContactInfo,
  } = useAdminStore();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  const handleSocialLinksChange = (key: string, value: string) => {
    setEditedSocialLinks(prev => ({ ...prev, [key]: value }));
    setHasUnsavedChanges(true);
  };

  const handleSaveSocialLinks = () => {
    updateSocialLinks(editedSocialLinks);
    setEditedSocialLinks({});
    setHasUnsavedChanges(false);
  };

  const handleAboutContentChange = (key: string, value: any) => {
    setEditedAboutContent(prev => ({ ...prev, [key]: value }));
    setHasUnsavedChanges(true);
  };

  const handleSaveAboutContent = () => {
    updateAboutContent(editedAboutContent);
    setEditedAboutContent({});
    setHasUnsavedChanges(false);
  };

  const handleContactInfoChange = (key: string, value: string) => {
    setEditedContactInfo(prev => ({ ...prev, [key]: value }));
    setHasUnsavedChanges(true);
  };

  const handleSaveContactInfo = () => {
    updateContactInfo(editedContactInfo);
    setEditedContactInfo({});
    setHasUnsavedChanges(false);
  };

  const handleAddSkill = () => {
    if (newSkill.name && newSkill.level) {
      addSkill({
        id: skills.length + 1,
        ...newSkill
      });
      setNewSkill({ name: '', level: 0, category: '' });
    }
  };

  const tabs = [
    { id: 'content', label: 'Content', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const contentTabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'videos', label: 'Videos' },
    { id: 'education', label: 'Education' },
    { id: 'events', label: 'Events' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'social', label: 'Social Links' }
  ];

  const renderContent = () => {
    switch (activeContentTab) {
      case 'projects':
        return (
          <ContentEditor
            items={projects}
            onAdd={() => addProject({
              id: projects.length + 1,
              title: 'New Project',
              description: 'Project description',
              image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              tags: ['New'],
              link: '#'
            })}
            onUpdate={updateProject}
            onDelete={deleteProject}
            fields={[
              { name: 'title', label: 'Title', type: 'text' },
              { name: 'description', label: 'Description', type: 'textarea' },
              { name: 'image', label: 'Image URL', type: 'text' },
              { name: 'link', label: 'Link', type: 'text' }
            ]}
          />
        );

      case 'videos':
        return (
          <ContentEditor
            items={videos}
            onAdd={() => addVideo({
              id: videos.length + 1,
              title: 'New Video',
              description: 'Video description',
              vimeoId: '',
              thumbnail: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              category: 'Tutorial',
              date: new Date().toLocaleDateString()
            })}
            onUpdate={updateVideo}
            onDelete={deleteVideo}
            fields={[
              { name: 'title', label: 'Title', type: 'text' },
              { name: 'description', label: 'Description', type: 'textarea' },
              { name: 'vimeoId', label: 'Vimeo ID', type: 'text' },
              { name: 'thumbnail', label: 'Thumbnail URL', type: 'text' },
              { name: 'category', label: 'Category', type: 'text' }
            ]}
          />
        );

      case 'education':
        return (
          <ContentEditor
            items={education}
            onAdd={() => addEducation({
              id: education.length + 1,
              institution: 'New Institution',
              degree: 'New Degree',
              field: 'Field of Study',
              startDate: '2024',
              endDate: 'Present',
              description: 'Education description'
            })}
            onUpdate={updateEducation}
            onDelete={deleteEducation}
            fields={[
              { name: 'institution', label: 'Institution', type: 'text' },
              { name: 'degree', label: 'Degree', type: 'text' },
              { name: 'field', label: 'Field', type: 'text' },
              { name: 'description', label: 'Description', type: 'textarea' }
            ]}
          />
        );

      case 'events':
        return (
          <ContentEditor
            items={events}
            onAdd={() => addEvent({
              id: events.length + 1,
              name: 'New Event',
              organizer: 'Organizer',
              date: new Date().toLocaleDateString(),
              description: 'Event description'
            })}
            onUpdate={updateEvent}
            onDelete={deleteEvent}
            fields={[
              { name: 'name', label: 'Event Name', type: 'text' },
              { name: 'organizer', label: 'Organizer', type: 'text' },
              { name: 'description', label: 'Description', type: 'textarea' }
            ]}
          />
        );

      case 'about':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">About Page Content</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={editedAboutContent.title || aboutContent.title}
                  onChange={(e) => handleAboutContentChange('title', e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subtitle
                </label>
                <input
                  type="text"
                  value={editedAboutContent.subtitle || aboutContent.subtitle}
                  onChange={(e) => handleAboutContentChange('subtitle', e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Photo URL
                </label>
                <input
                  type="text"
                  value={editedAboutContent.photoUrl || aboutContent.photoUrl}
                  onChange={(e) => handleAboutContentChange('photoUrl', e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
                />
              </div>
              {aboutContent.description.map((paragraph: string, index: number) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Description Paragraph {index + 1}
                  </label>
                  <textarea
                    value={editedAboutContent.description?.[index] || paragraph}
                    onChange={(e) => {
                      const newDescription = [...(editedAboutContent.description || aboutContent.description)];
                      newDescription[index] = e.target.value;
                      handleAboutContentChange('description', newDescription);
                    }}
                    rows={4}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
                  />
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Skills Management</h3>
              
              {/* Add new skill */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Skill name"
                  value={newSkill.name}
                  onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                  className="p-2 border border-gray-300 dark:border-gray-600 rounded-md"
                />
                <input
                  type="number"
                  placeholder="Skill level (0-100)"
                  value={newSkill.level || ''}
                  onChange={(e) => setNewSkill({ ...newSkill, level: Math.min(100, Math.max(0, parseInt(e.target.value) || 0)) })}
                  className="p-2 border border-gray-300 dark:border-gray-600 rounded-md"
                />
                <button
                  onClick={handleAddSkill}
                  className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Skill
                </button>
              </div>

              {/* Skills list */}
              <div className="space-y-2">
                {skills.map((skill) => (
                  <div key={skill.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                    <div className="flex items-center space-x-4">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <button
                      onClick={() => deleteSkill(skill.id)}
                      className="p-1 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {Object.keys(editedAboutContent).length > 0 && (
              <button
                onClick={handleSaveAboutContent}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </button>
            )}
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={editedSocialLinks.email || socialLinks.email}
                  onChange={(e) => handleSocialLinksChange('email', e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  value={editedContactInfo.phone || contactInfo.phone}
                  onChange={(e) => handleContactInfoChange('phone', e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={editedContactInfo.location || contactInfo.location}
                  onChange={(e) => handleContactInfoChange('location', e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
                />
              </div>
            </div>
            {(Object.keys(editedContactInfo).length > 0 || Object.keys(editedSocialLinks).length > 0) && (
              <button
                onClick={() => {
                  handleSaveContactInfo();
                  handleSaveSocialLinks();
                }}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </button>
            )}
          </div>
        );

      case 'social':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Social Links</h3>
            <div className="space-y-4">
              {Object.entries(socialLinks).filter(([key]) => key !== 'email').map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                    type="text"
                    value={editedSocialLinks[key] || value}
                    onChange={(e) => handleSocialLinksChange(key, e.target.value)}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
                  />
                </div>
              ))}
            </div>
            {Object.keys(editedSocialLinks).length > 0 && (
              <button
                onClick={handleSaveSocialLinks}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </button>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                        activeTab === tab.id
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="h-5 w-5 mr-2" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              {activeTab === 'content' && (
                <div>
                  <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                    <nav className="flex space-x-4">
                      {contentTabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveContentTab(tab.id)}
                          className={`pb-4 px-1 text-sm font-medium ${
                            activeContentTab === tab.id
                              ? 'border-b-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
                              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </nav>
                  </div>

                  {renderContent()}
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Site Settings
                  </h2>
                  {/* Add settings components */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;