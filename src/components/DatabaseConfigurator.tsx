'use client';

import { useState } from 'react';
import { Copy, Database, Settings, Eye, Plus } from 'lucide-react';

interface DatabaseProperty {
  name: string;
  type: string;
  description: string;
  options?: string[];
}

interface DatabaseConfig {
  name: string;
  icon: string;
  description: string;
  properties: DatabaseProperty[];
  views: string[];
}

export default function DatabaseConfigurator() {
  const [selectedDatabase, setSelectedDatabase] = useState(0);

  const databases: DatabaseConfig[] = [
    {
      name: 'Meeting Notes',
      icon: '📝',
      description: 'Track all team meetings, decisions, and action items',
      properties: [
        { name: 'Title', type: 'Title', description: 'Meeting name/topic' },
        { name: 'Date', type: 'Date', description: 'Meeting date' },
        { name: 'Type', type: 'Select', description: 'Meeting category', options: ['Daily Standup', 'Weekly Review', 'Project Kickoff', 'Client Meeting', 'Retrospective'] },
        { name: 'Attendees', type: 'People', description: 'Meeting participants' },
        { name: 'Department', type: 'Multi-select', description: 'Relevant departments', options: ['Engineering', 'Design', 'Marketing', 'Sales', 'HR'] },
        { name: 'Project', type: 'Relation', description: 'Link to Projects database' },
        { name: 'Status', type: 'Select', description: 'Meeting status', options: ['Draft', 'In Review', 'Approved', 'Archived'] },
        { name: 'Action Items', type: 'Number', description: 'Count of action items' },
        { name: 'Tags', type: 'Multi-select', description: 'Categorization tags', options: ['urgent', 'follow-up', 'decision', 'planning'] }
      ],
      views: ['Calendar View', 'This Week', 'By Department', 'Action Items Pending', 'My Meetings']
    },
    {
      name: 'Documentation Hub',
      icon: '📚',
      description: 'Central repository for all team documentation',
      properties: [
        { name: 'Title', type: 'Title', description: 'Document name' },
        { name: 'Type', type: 'Select', description: 'Document category', options: ['Process', 'Guide', 'Reference', 'Policy', 'Technical Spec'] },
        { name: 'Department', type: 'Multi-select', description: 'Relevant departments', options: ['Engineering', 'Design', 'Marketing', 'Sales', 'HR'] },
        { name: 'Status', type: 'Select', description: 'Document status', options: ['Draft', 'In Review', 'Published', 'Needs Update', 'Archived'] },
        { name: 'Owner', type: 'Person', description: 'Document maintainer' },
        { name: 'Last Updated', type: 'Last edited time', description: 'Auto-populated timestamp' },
        { name: 'Priority', type: 'Select', description: 'Update priority', options: ['High', 'Medium', 'Low'] },
        { name: 'Tags', type: 'Multi-select', description: 'Content tags', options: ['process', 'guide', 'reference', 'policy', 'onboarding'] },
        { name: 'Related Projects', type: 'Relation', description: 'Link to Projects database' }
      ],
      views: ['Published Docs', 'Needs Review', 'By Department', 'Recently Updated', 'My Documents']
    },
    {
      name: 'Tasks & Projects',
      icon: '🎯',
      description: 'Manage projects, tasks, and team workload',
      properties: [
        { name: 'Title', type: 'Title', description: 'Task/Project name' },
        { name: 'Type', type: 'Select', description: 'Item type', options: ['Epic', 'Project', 'Task', 'Bug', 'Feature Request'] },
        { name: 'Status', type: 'Select', description: 'Current status', options: ['Not Started', 'In Progress', 'In Review', 'Completed', 'On Hold'] },
        { name: 'Assignee', type: 'Person', description: 'Responsible person' },
        { name: 'Department', type: 'Multi-select', description: 'Involved departments', options: ['Engineering', 'Design', 'Marketing', 'Sales', 'HR'] },
        { name: 'Priority', type: 'Select', description: 'Priority level', options: ['Critical', 'High', 'Medium', 'Low'] },
        { name: 'Due Date', type: 'Date', description: 'Deadline' },
        { name: 'Progress', type: 'Number', description: 'Percentage complete' },
        { name: 'Tags', type: 'Multi-select', description: 'Project tags', options: ['urgent', 'blocked', 'research', 'implementation'] },
        { name: 'Related Docs', type: 'Relation', description: 'Link to Documentation Hub' }
      ],
      views: ['Kanban Board', 'My Tasks', 'Overdue Items', 'By Priority', 'Department Workload']
    }
  ];

  const copyPropertyConfig = (property: DatabaseProperty) => {
    const config = `Property: ${property.name}
Type: ${property.type}
Description: ${property.description}${property.options ? `
Options: ${property.options.join(', ')}` : ''}`;
    navigator.clipboard.writeText(config);
  };

  const copyAllProperties = (database: DatabaseConfig) => {
    const config = `${database.icon} ${database.name} Database Configuration

Properties:
${database.properties.map(prop => 
  `• ${prop.name} (${prop.type}): ${prop.description}${prop.options ? `
  Options: ${prop.options.join(', ')}` : ''}`
).join('\n')}

Recommended Views:
${database.views.map(view => `• ${view}`).join('\n')}`;
    navigator.clipboard.writeText(config);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Database Configuration Tool</h1>
        <p className="text-lg text-gray-600">
          Configure your Notion databases with these pre-defined property templates. 
          Copy the configurations and apply them directly in your Notion workspace.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Database Selector */}
        <div className="lg:col-span-1">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Database</h2>
          <div className="space-y-2">
            {databases.map((db, index) => (
              <button
                key={index}
                onClick={() => setSelectedDatabase(index)}
                className={`w-full text-left p-4 rounded-lg border transition-colors ${
                  selectedDatabase === index
                    ? 'border-blue-500 bg-blue-50 text-blue-900'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{db.icon}</span>
                  <div>
                    <div className="font-medium">{db.name}</div>
                    <div className="text-sm text-gray-500">{db.description}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Database Configuration */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{databases[selectedDatabase].icon}</span>
                  <div>
                    <h2 className="text-xl font-bold">{databases[selectedDatabase].name}</h2>
                    <p className="text-blue-100">{databases[selectedDatabase].description}</p>
                  </div>
                </div>
                <button
                  onClick={() => copyAllProperties(databases[selectedDatabase])}
                  className="flex items-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-colors"
                >
                  <Copy size={16} />
                  <span>Copy All</span>
                </button>
              </div>
            </div>

            {/* Properties */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <Settings size={20} />
                <span>Database Properties</span>
              </h3>
              
              <div className="space-y-4">
                {databases[selectedDatabase].properties.map((property, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-medium text-gray-900">{property.name}</h4>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {property.type}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{property.description}</p>
                        {property.options && (
                          <div className="flex flex-wrap gap-1">
                            {property.options.map((option, optIndex) => (
                              <span
                                key={optIndex}
                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                              >
                                {option}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => copyPropertyConfig(property)}
                        className="ml-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                        title="Copy property configuration"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Views */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <Eye size={20} />
                  <span>Recommended Views</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {databases[selectedDatabase].views.map((view, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg">
                      <div className="font-medium text-gray-900">{view}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-8 bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">How to Apply Configuration</h3>
                <ol className="list-decimal list-inside space-y-1 text-blue-800 text-sm">
                  <li>Create a new database in Notion</li>
                  <li>Name it "{databases[selectedDatabase].name}"</li>
                  <li>Add each property using the configurations above</li>
                  <li>Set up the recommended views for better organization</li>
                  <li>Configure any relations between databases</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
