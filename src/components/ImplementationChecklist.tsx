'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, Clock, Users, Database, FileText, Settings } from 'lucide-react';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  category: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
}

interface ChecklistPhase {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  items: ChecklistItem[];
}

export default function ImplementationChecklist() {
  const [checklist, setChecklist] = useState<ChecklistPhase[]>([]);
  const [selectedPhase, setSelectedPhase] = useState(0);

  useEffect(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem('notion-checklist');
    if (saved) {
      setChecklist(JSON.parse(saved));
    } else {
      setChecklist(initialChecklist);
    }
  }, []);

  useEffect(() => {
    // Save to localStorage whenever checklist changes
    if (checklist.length > 0) {
      localStorage.setItem('notion-checklist', JSON.stringify(checklist));
    }
  }, [checklist]);

  const initialChecklist: ChecklistPhase[] = [
    {
      id: 'planning',
      title: 'Planning Phase',
      description: 'Prepare for implementation with stakeholder buy-in and assessment',
      icon: Clock,
      items: [
        {
          id: 'stakeholder-buyin',
          title: 'Get stakeholder buy-in',
          description: 'Present business case to leadership and get commitment from department heads',
          category: 'planning',
          completed: false,
          priority: 'high'
        },
        {
          id: 'identify-champions',
          title: 'Identify knowledge vault champions',
          description: 'Select champions in each team to help with implementation and training',
          category: 'planning',
          completed: false,
          priority: 'high'
        },
        {
          id: 'budget-allocation',
          title: 'Allocate budget for training and setup',
          description: 'Ensure adequate budget for training time and potential Notion subscription costs',
          category: 'planning',
          completed: false,
          priority: 'medium'
        },
        {
          id: 'current-state-audit',
          title: 'Audit existing documentation tools',
          description: 'Document current tools, processes, and identify information silos',
          category: 'planning',
          completed: false,
          priority: 'medium'
        },
        {
          id: 'team-readiness',
          title: 'Assess team readiness',
          description: 'Evaluate team\'s technical comfort and identify training needs',
          category: 'planning',
          completed: false,
          priority: 'medium'
        }
      ]
    },
    {
      id: 'setup',
      title: 'Foundation Setup',
      description: 'Create core structure and databases',
      icon: Database,
      items: [
        {
          id: 'workspace-creation',
          title: 'Create Notion workspace',
          description: 'Set up or configure Notion workspace with proper branding',
          category: 'setup',
          completed: false,
          priority: 'high'
        },
        {
          id: 'main-dashboard',
          title: 'Create main Knowledge Vault Dashboard',
          description: 'Build the central hub with navigation and quick access',
          category: 'setup',
          completed: false,
          priority: 'high'
        },
        {
          id: 'meeting-notes-db',
          title: 'Set up Meeting Notes database',
          description: 'Create database with all required properties and views',
          category: 'setup',
          completed: false,
          priority: 'high'
        },
        {
          id: 'documentation-hub-db',
          title: 'Set up Documentation Hub database',
          description: 'Create database for all team documentation',
          category: 'setup',
          completed: false,
          priority: 'high'
        },
        {
          id: 'tasks-projects-db',
          title: 'Set up Tasks & Projects database',
          description: 'Create database for project and task management',
          category: 'setup',
          completed: false,
          priority: 'high'
        },
        {
          id: 'database-relations',
          title: 'Configure database relations',
          description: 'Set up relations and rollups between databases',
          category: 'setup',
          completed: false,
          priority: 'medium'
        }
      ]
    },
    {
      id: 'teamspaces',
      title: 'Teamspace Configuration',
      description: 'Set up department-specific spaces and permissions',
      icon: Users,
      items: [
        {
          id: 'engineering-teamspace',
          title: 'Create Engineering teamspace',
          description: 'Set up technical documentation and development processes',
          category: 'teamspaces',
          completed: false,
          priority: 'high'
        },
        {
          id: 'design-teamspace',
          title: 'Create Design teamspace',
          description: 'Set up design system and creative resources',
          category: 'teamspaces',
          completed: false,
          priority: 'high'
        },
        {
          id: 'marketing-teamspace',
          title: 'Create Marketing teamspace',
          description: 'Set up campaign management and content strategy',
          category: 'teamspaces',
          completed: false,
          priority: 'high'
        },
        {
          id: 'cross-functional-space',
          title: 'Create Cross-Functional Projects space',
          description: 'Set up shared space for cross-team collaboration',
          category: 'teamspaces',
          completed: false,
          priority: 'medium'
        },
        {
          id: 'permissions-setup',
          title: 'Configure user permissions',
          description: 'Set up role-based access and department-specific permissions',
          category: 'teamspaces',
          completed: false,
          priority: 'high'
        }
      ]
    },
    {
      id: 'templates',
      title: 'Template Development',
      description: 'Create and test templates for consistent documentation',
      icon: FileText,
      items: [
        {
          id: 'meeting-templates',
          title: 'Create meeting note templates',
          description: 'Develop templates for different types of meetings',
          category: 'templates',
          completed: false,
          priority: 'high'
        },
        {
          id: 'project-templates',
          title: 'Create project documentation templates',
          description: 'Develop templates for project planning and tracking',
          category: 'templates',
          completed: false,
          priority: 'high'
        },
        {
          id: 'process-templates',
          title: 'Create process documentation templates',
          description: 'Develop templates for documenting workflows and procedures',
          category: 'templates',
          completed: false,
          priority: 'medium'
        },
        {
          id: 'template-testing',
          title: 'Test all templates',
          description: 'Validate templates with sample content and gather feedback',
          category: 'templates',
          completed: false,
          priority: 'medium'
        }
      ]
    },
    {
      id: 'training',
      title: 'Training & Rollout',
      description: 'Train team members and roll out the system',
      icon: Users,
      items: [
        {
          id: 'admin-training',
          title: 'Train workspace administrators',
          description: 'Provide advanced training for system administrators',
          category: 'training',
          completed: false,
          priority: 'high'
        },
        {
          id: 'champion-training',
          title: 'Train department champions',
          description: 'Provide comprehensive training for team champions',
          category: 'training',
          completed: false,
          priority: 'high'
        },
        {
          id: 'team-training',
          title: 'Conduct team training sessions',
          description: 'Roll out training to all team members by department',
          category: 'training',
          completed: false,
          priority: 'high'
        },
        {
          id: 'training-materials',
          title: 'Create training materials',
          description: 'Develop documentation and video tutorials',
          category: 'training',
          completed: false,
          priority: 'medium'
        },
        {
          id: 'support-channels',
          title: 'Set up support channels',
          description: 'Establish help channels and troubleshooting resources',
          category: 'training',
          completed: false,
          priority: 'medium'
        }
      ]
    },
    {
      id: 'optimization',
      title: 'Optimization & Maintenance',
      description: 'Monitor usage and continuously improve the system',
      icon: Settings,
      items: [
        {
          id: 'usage-monitoring',
          title: 'Monitor usage statistics',
          description: 'Track adoption metrics and user engagement',
          category: 'optimization',
          completed: false,
          priority: 'medium'
        },
        {
          id: 'feedback-collection',
          title: 'Collect user feedback',
          description: 'Gather feedback and identify improvement opportunities',
          category: 'optimization',
          completed: false,
          priority: 'medium'
        },
        {
          id: 'process-optimization',
          title: 'Optimize processes based on usage',
          description: 'Refine workflows and templates based on real usage patterns',
          category: 'optimization',
          completed: false,
          priority: 'low'
        },
        {
          id: 'maintenance-schedule',
          title: 'Establish maintenance schedule',
          description: 'Set up regular content audits and system maintenance',
          category: 'optimization',
          completed: false,
          priority: 'low'
        }
      ]
    }
  ];

  const toggleItem = (phaseIndex: number, itemId: string) => {
    const newChecklist = [...checklist];
    const item = newChecklist[phaseIndex].items.find(item => item.id === itemId);
    if (item) {
      item.completed = !item.completed;
      setChecklist(newChecklist);
    }
  };

  const getPhaseProgress = (phase: ChecklistPhase) => {
    const completed = phase.items.filter(item => item.completed).length;
    return Math.round((completed / phase.items.length) * 100);
  };

  const getTotalProgress = () => {
    const totalItems = checklist.reduce((sum, phase) => sum + phase.items.length, 0);
    const completedItems = checklist.reduce((sum, phase) => 
      sum + phase.items.filter(item => item.completed).length, 0);
    return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Implementation Checklist</h1>
        <p className="text-lg text-gray-600 mb-4">
          Track your progress through the complete Notion Knowledge Vault implementation. 
          Your progress is automatically saved.
        </p>
        
        {/* Overall Progress */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-gray-900">Overall Progress</h2>
            <span className="text-2xl font-bold text-blue-600">{getTotalProgress()}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${getTotalProgress()}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Phase Selector */}
        <div className="lg:col-span-1">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Implementation Phases</h2>
          <div className="space-y-2">
            {checklist.map((phase, index) => {
              const Icon = phase.icon;
              const progress = getPhaseProgress(phase);
              return (
                <button
                  key={phase.id}
                  onClick={() => setSelectedPhase(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    selectedPhase === index
                      ? 'border-blue-500 bg-blue-50 text-blue-900'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon size={20} />
                    <div className="flex-1">
                      <div className="font-medium">{phase.title}</div>
                      <div className="text-sm text-gray-500">{progress}% complete</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div
                      className="bg-blue-600 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Phase Details */}
        <div className="lg:col-span-3">
          {checklist.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                <div className="flex items-center space-x-3">
                  {React.createElement(checklist[selectedPhase].icon, { size: 24 })}
                  <div>
                    <h2 className="text-xl font-bold">{checklist[selectedPhase].title}</h2>
                    <p className="text-blue-100">{checklist[selectedPhase].description}</p>
                  </div>
                </div>
              </div>

              {/* Checklist Items */}
              <div className="p-6">
                <div className="space-y-4">
                  {checklist[selectedPhase].items.map((item, itemIndex) => (
                    <div
                      key={item.id}
                      className={`border rounded-lg p-4 transition-colors ${
                        item.completed ? 'border-green-200 bg-green-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <button
                          onClick={() => toggleItem(selectedPhase, item.id)}
                          className="mt-1 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          {item.completed ? (
                            <CheckCircle className="text-green-600" size={20} />
                          ) : (
                            <Circle size={20} />
                          )}
                        </button>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className={`font-medium ${item.completed ? 'text-green-900 line-through' : 'text-gray-900'}`}>
                              {item.title}
                            </h3>
                            <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(item.priority)}`}>
                              {item.priority}
                            </span>
                          </div>
                          <p className={`text-sm ${item.completed ? 'text-green-700' : 'text-gray-600'}`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
