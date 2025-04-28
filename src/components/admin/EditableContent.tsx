import React, { useState, useEffect } from 'react';
import { Edit, Save, X } from 'lucide-react';

interface EditableContentProps {
  content: string;
  onSave: (content: string) => void;
  type?: 'text' | 'textarea';
  className?: string;
}

const EditableContent: React.FC<EditableContentProps> = ({
  content,
  onSave,
  type = 'text',
  className = '',
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  useEffect(() => {
    setEditedContent(content);
  }, [content]);

  const handleSave = () => {
    if (editedContent !== content) {
      onSave(editedContent);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedContent(content);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="relative group">
        {type === 'textarea' ? (
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className={`w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${className}`}
            rows={4}
          />
        ) : (
          <input
            type="text"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className={`w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${className}`}
          />
        )}
        <div className="absolute top-2 right-2 flex space-x-2">
          <button
            onClick={handleSave}
            className="p-1 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
          >
            <Save className="h-4 w-4" />
          </button>
          <button
            onClick={handleCancel}
            className="p-1 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <div className={className}>{content}</div>
      <button
        onClick={() => setIsEditing(true)}
        className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        <Edit className="h-4 w-4" />
      </button>
    </div>
  );
};

export default EditableContent;