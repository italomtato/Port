import React, { useState } from 'react';
import { Plus, Trash2, Eye, EyeOff, Save } from 'lucide-react';
import EditableContent from './EditableContent';

interface ContentEditorProps {
  items: any[];
  onAdd: () => void;
  onUpdate: (id: number, data: any) => void;
  onDelete: (id: number) => void;
  onToggleVisibility?: (id: number) => void;
  visibility?: { [key: string]: boolean };
  itemType?: string;
  fields: {
    name: string;
    label: string;
    type: 'text' | 'textarea';
  }[];
}

const ContentEditor: React.FC<ContentEditorProps> = ({
  items,
  onAdd,
  onUpdate,
  onDelete,
  onToggleVisibility,
  visibility = {},
  itemType = '',
  fields,
}) => {
  const [unsavedChanges, setUnsavedChanges] = useState<{ [key: string]: any }>({});

  const handleContentChange = (id: number, fieldName: string, content: string) => {
    setUnsavedChanges((prev) => ({
      ...prev,
      [id]: {
        ...(prev[id] || {}),
        [fieldName]: content,
      },
    }));
  };

  const handleSave = (id: number) => {
    if (unsavedChanges[id]) {
      onUpdate(id, unsavedChanges[id]);
      setUnsavedChanges((prev) => {
        const newChanges = { ...prev };
        delete newChanges[id];
        return newChanges;
      });
    }
  };

  const hasUnsavedChanges = (id: number) => {
    return !!unsavedChanges[id];
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          Content Items ({items.length})
        </h3>
        <button
          onClick={onAdd}
          className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New
        </button>
      </div>

      <div className="grid gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow relative group"
          >
            {fields.map((field) => (
              <div key={field.name} className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {field.label}
                </label>
                <EditableContent
                  content={item[field.name]?.toString() || ''}
                  onSave={(content) => handleContentChange(item.id, field.name, content)}
                  type={field.type}
                />
              </div>
            ))}
            <div className="absolute top-2 right-2 flex space-x-2">
              {hasUnsavedChanges(item.id) && (
                <button
                  onClick={() => handleSave(item.id)}
                  className="p-2 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                  title="Save changes"
                >
                  <Save className="h-4 w-4" />
                </button>
              )}
              {onToggleVisibility && (
                <button
                  onClick={() => onToggleVisibility(item.id)}
                  className="p-2 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  title={visibility[`${itemType}_${item.id}`] ? 'Hide' : 'Show'}
                >
                  {visibility[`${itemType}_${item.id}`] ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              )}
              <button
                onClick={() => onDelete(item.id)}
                className="p-2 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                title="Delete"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            {hasUnsavedChanges(item.id) && (
              <div className="mt-2 text-sm text-yellow-600 dark:text-yellow-400">
                * You have unsaved changes
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentEditor;