'use client';

import { useState, useEffect } from 'react';
import { Users, Play, CheckCircle, Clock, Award, BookOpen, Video, FileText } from 'lucide-react';

interface TrainingModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: 'video' | 'interactive' | 'reading';
  completed: boolean;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  progress: number;
  completedModules: string[];
  lastActive: string;
}

export default function OnboardingDashboard() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [trainingModules, setTrainingModules] = useState<TrainingModule[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    // Load from localStorage if available
    const savedModules = localStorage.getItem('training-modules');
    const savedMembers = localStorage.getItem('team-members');
    
    if (savedModules) {
      setTrainingModules(JSON.parse(savedModules));
    } else {
      setTrainingModules(initialModules);
    }
    
    if (savedMembers) {
      setTeamMembers(JSON.parse(savedMembers));
    } else {
      setTeamMembers(initialTeamMembers);
    }
  }, []);

  useEffect(() => {
    // Save to localStorage whenever data changes
    if (trainingModules.length > 0) {
      localStorage.setItem('training-modules', JSON.stringify(trainingModules));
    }
    if (teamMembers.length > 0) {
      localStorage.setItem('team-members', JSON.stringify(teamMembers));
    }
  }, [trainingModules, teamMembers]);

  const initialModules: TrainingModule[] = [
    {
      id: 'notion-basics',
      title: 'Notion Basics',
      description: 'Introduction to Notion interface and basic functionality',
      duration: '15 min',
      type: 'video',
      completed: false,
      difficulty: 'beginner'
    },
    {
      id: 'workspace-navigation',
      title: 'Workspace Navigation',
      description: 'Learn to navigate the knowledge vault structure',
      duration: '20 min',
      type: 'interactive',
      completed: false,
      difficulty: 'beginner'
    },
    {
      id: 'database-basics',
      title: 'Database Fundamentals',
      description: 'Understanding databases, properties, and views',
      duration: '25 min',
      type: 'video',
      completed: false,
      difficulty: 'intermediate'
    },
    {
      id: 'meeting-notes',
      title: 'Meeting Notes Workflow',
      description: 'How to create and manage meeting notes effectively',
      duration: '15 min',
      type: 'interactive',
      completed: false,
      difficulty: 'beginner'
    },
    {
      id: 'documentation',
      title: 'Documentation Best Practices',
      description: 'Creating and maintaining high-quality documentation',
      duration: '30 min',
      type: 'reading',
      completed: false,
      difficulty: 'intermediate'
    },
    {
      id: 'collaboration',
      title: 'Team Collaboration',
      description: 'Sharing, commenting, and collaborative editing',
      duration: '20 min',
      type: 'video',
      completed: false,
      difficulty: 'intermediate'
    },
    {
      id: 'advanced-features',
      title: 'Advanced Features',
      description: 'Relations, rollups, formulas, and automation',
      duration: '35 min',
      type: 'video',
      completed: false,
      difficulty: 'advanced'
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting & Support',
      description: 'Common issues and how to get help',
      duration: '10 min',
      type: 'reading',
      completed: false,
      difficulty: 'beginner'
    }
  ];

  const initialTeamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Team Lead',
      department: 'Engineering',
      progress: 85,
      completedModules: ['notion-basics', 'workspace-navigation', 'database-basics', 'meeting-notes', 'documentation', 'collaboration'],
      lastActive: '2024-01-15'
    },
    {
      id: '2',
      name: 'Mike Chen',
      role: 'Senior Developer',
      department: 'Engineering',
      progress: 60,
      completedModules: ['notion-basics', 'workspace-navigation', 'database-basics', 'meeting-notes'],
      lastActive: '2024-01-14'
    },
    {
      id: '3',
      name: 'Lisa Wang',
      role: 'UX Designer',
      department: 'Design',
      progress: 40,
      completedModules: ['notion-basics', 'workspace-navigation', 'meeting-notes'],
      lastActive: '2024-01-13'
    },
    {
      id: '4',
      name: 'Tom Rodriguez',
      role: 'Product Manager',
      department: 'Product',
      progress: 75,
      completedModules: ['notion-basics', 'workspace-navigation', 'database-basics', 'meeting-notes', 'documentation'],
      lastActive: '2024-01-15'
    }
  ];

  const toggleModuleCompletion = (moduleId: string) => {
    setTrainingModules(modules =>
      modules.map(module =>
        module.id === moduleId
          ? { ...module, completed: !module.completed }
          : module
      )
    );
  };

  const getOverallProgress = () => {
    const totalModules = trainingModules.length;
    const completedModules = trainingModules.filter(m => m.completed).length;
    return totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;
  };

  const getTeamProgress = () => {
    if (teamMembers.length === 0) return 0;
    const totalProgress = teamMembers.reduce((sum, member) => sum + member.progress, 0);
    return Math.round(totalProgress / teamMembers.length);
  };

  const getModuleIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'interactive': return Play;
      case 'reading': return FileText;
      default: return BookOpen;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Users },
    { id: 'training', label: 'Training Modules', icon: BookOpen },
    { id: 'progress', label: 'Team Progress', icon: Award }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Team Onboarding Dashboard</h1>
        <p className="text-lg text-gray-600">
          Track training progress and manage team onboarding to the Notion knowledge vault.
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  selectedTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Overview Tab */}
      {selectedTab === 'overview' && (
        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="text-blue-600" size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Team Members</p>
                  <p className="text-2xl font-semibold text-gray-900">{teamMembers.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Your Progress</p>
                  <p className="text-2xl font-semibold text-gray-900">{getOverallProgress()}%</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Award className="text-purple-600" size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Team Average</p>
                  <p className="text-2xl font-semibold text-gray-900">{getTeamProgress()}%</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <BookOpen className="text-orange-600" size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Modules</p>
                  <p className="text-2xl font-semibold text-gray-900">{trainingModules.length}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => setSelectedTab('training')}
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-left"
              >
                <BookOpen className="text-blue-600 mb-2" size={24} />
                <h3 className="font-medium text-gray-900">Start Training</h3>
                <p className="text-sm text-gray-600">Begin or continue your training modules</p>
              </button>
              
              <button
                onClick={() => setSelectedTab('progress')}
                className="p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors text-left"
              >
                <Award className="text-green-600 mb-2" size={24} />
                <h3 className="font-medium text-gray-900">View Progress</h3>
                <p className="text-sm text-gray-600">Check team training progress</p>
              </button>
              
              <a
                href="/notion-quick-reference-card.md"
                download
                className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors text-left block"
              >
                <FileText className="text-purple-600 mb-2" size={24} />
                <h3 className="font-medium text-gray-900">Quick Reference</h3>
                <p className="text-sm text-gray-600">Download the quick reference card</p>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Training Modules Tab */}
      {selectedTab === 'training' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Your Training Progress</h2>
              <span className="text-2xl font-bold text-blue-600">{getOverallProgress()}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${getOverallProgress()}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingModules.map(module => {
              const Icon = getModuleIcon(module.type);
              return (
                <div
                  key={module.id}
                  className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${
                    module.completed ? 'border-green-500' : 'border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${module.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
                        <Icon className={module.completed ? 'text-green-600' : 'text-gray-600'} size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{module.title}</h3>
                        <p className="text-sm text-gray-600">{module.duration}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleModuleCompletion(module.id)}
                      className={`p-2 rounded-full ${
                        module.completed
                          ? 'text-green-600 hover:text-green-800'
                          : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      <CheckCircle size={20} />
                    </button>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{module.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(module.difficulty)}`}>
                      {module.difficulty}
                    </span>
                    <span className={`text-sm font-medium ${module.completed ? 'text-green-600' : 'text-gray-500'}`}>
                      {module.completed ? 'Completed' : 'Not Started'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Team Progress Tab */}
      {selectedTab === 'progress' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Team Training Progress</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Team Member
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Department
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Progress
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Completed Modules
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Active
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {teamMembers.map(member => (
                    <tr key={member.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{member.name}</div>
                          <div className="text-sm text-gray-500">{member.role}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {member.department}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-3">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${member.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900">{member.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {member.completedModules.length} / {trainingModules.length}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {member.lastActive}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
