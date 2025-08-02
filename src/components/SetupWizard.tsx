'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Copy, ExternalLink } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  content: React.ReactNode;
}

export default function SetupWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const steps: Step[] = [
    {
      id: 1,
      title: 'Workspace Setup',
      description: 'Create and configure your Notion workspace',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Step 1: Create Workspace</h3>
            <ol className="list-decimal list-inside space-y-2 text-blue-800">
              <li>Go to <a href="https://notion.so" target="_blank" rel="noopener noreferrer" className="underline">notion.so</a> and sign in</li>
              <li>Click "Create a workspace" or use existing workspace</li>
              <li>Name your workspace: "TeamName Knowledge Vault"</li>
              <li>Upload a workspace icon and cover image</li>
            </ol>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Workspace Settings</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Workspace Name</label>
                <div className="flex items-center space-x-2">
                  <code className="bg-white px-3 py-2 rounded border text-sm flex-1">TeamName Knowledge Vault</code>
                  <button
                    onClick={() => copyToClipboard('TeamName Knowledge Vault')}
                    className="p-2 text-gray-500 hover:text-gray-700"
                  >
                    <Copy size={16} />
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Default Permissions</label>
                <p className="text-sm text-gray-600">Set to "Can edit" for team members</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Main Dashboard',
      description: 'Create the central knowledge vault dashboard',
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">Create Main Dashboard</h3>
            <ol className="list-decimal list-inside space-y-2 text-green-800">
              <li>Create a new page called "🏠 Knowledge Vault Dashboard"</li>
              <li>Add this page to your sidebar favorites</li>
              <li>Copy the template content below</li>
            </ol>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Dashboard Template</h3>
            <div className="bg-white p-4 rounded border">
              <pre className="text-sm text-gray-700 whitespace-pre-wrap">{`# 🏠 Team Knowledge Vault

## Quick Access
- 📝 [Meeting Notes Database](#)
- 📚 [Documentation Hub](#)
- 🎯 [Tasks & Projects](#)
- 👥 [Team Directory](#)

## Recent Updates
[Add a "Recent Updates" view here]

## Announcements
[Add important team announcements]

## Key Metrics Dashboard
[Usage statistics and KPIs]`}</pre>
            </div>
            <button
              onClick={() => copyToClipboard(`# 🏠 Team Knowledge Vault

## Quick Access
- 📝 [Meeting Notes Database](#)
- 📚 [Documentation Hub](#)
- 🎯 [Tasks & Projects](#)
- 👥 [Team Directory](#)

## Recent Updates
[Add a "Recent Updates" view here]

## Announcements
[Add important team announcements]

## Key Metrics Dashboard
[Usage statistics and KPIs]`)}
              className="mt-2 flex items-center space-x-2 text-blue-600 hover:text-blue-800"
            >
              <Copy size={16} />
              <span>Copy Template</span>
            </button>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Database Creation',
      description: 'Set up the three essential databases',
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2">Create Three Main Databases</h3>
            <div className="space-y-3 text-purple-800">
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} />
                <span>📝 Meeting Notes Database</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} />
                <span>📚 Documentation Hub Database</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} />
                <span>🎯 Tasks & Projects Database</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-900 mb-2">📝 Meeting Notes</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Title (Title)</li>
                <li>• Date (Date)</li>
                <li>• Type (Select)</li>
                <li>• Attendees (People)</li>
                <li>• Department (Multi-select)</li>
                <li>• Status (Select)</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-900 mb-2">📚 Documentation</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Title (Title)</li>
                <li>• Type (Select)</li>
                <li>• Department (Multi-select)</li>
                <li>• Status (Select)</li>
                <li>• Owner (Person)</li>
                <li>• Priority (Select)</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-900 mb-2">🎯 Tasks & Projects</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Title (Title)</li>
                <li>• Type (Select)</li>
                <li>• Status (Select)</li>
                <li>• Assignee (Person)</li>
                <li>• Due Date (Date)</li>
                <li>• Priority (Select)</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: 'Teamspaces Setup',
      description: 'Create department-specific teamspaces',
      content: (
        <div className="space-y-6">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-semibold text-orange-900 mb-2">Create Department Teamspaces</h3>
            <p className="text-orange-800 mb-3">Set up dedicated spaces for each department:</p>
            <div className="grid grid-cols-2 gap-2 text-orange-800">
              <div>🔧 Engineering</div>
              <div>🎨 Design</div>
              <div>📢 Marketing</div>
              <div>💰 Sales</div>
              <div>👥 HR</div>
              <div>🤝 Cross-Functional</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-semibold text-gray-900 mb-3">Engineering Teamspace Structure</h4>
            <div className="bg-gray-50 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap">{`🔧 Engineering

## Technical Documentation
📋 Architecture Decisions
🔧 API Documentation  
🚀 Deployment Guides
🐛 Troubleshooting Runbooks

## Development Processes
🔄 Code Review Guidelines
🧪 Testing Standards
📦 Release Procedures
🔒 Security Protocols`}</pre>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: 'Permissions & Access',
      description: 'Configure user permissions and access control',
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-red-900 mb-2">Set Up User Permissions</h3>
            <ol className="list-decimal list-inside space-y-2 text-red-800">
              <li>Add team members to workspace</li>
              <li>Configure role-based permissions</li>
              <li>Set department-specific access</li>
              <li>Test permissions with different users</li>
            </ol>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-green-700 mb-2">Admin Access</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Team leads</li>
                <li>• Project managers</li>
                <li>• IT administrators</li>
              </ul>
              <p className="text-xs text-green-600 mt-2">Full workspace access</p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-blue-700 mb-2">Editor Access</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• All team members</li>
                <li>• Regular contributors</li>
              </ul>
              <p className="text-xs text-blue-600 mt-2">Can edit and create content</p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-700 mb-2">Viewer Access</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Contractors</li>
                <li>• Temporary members</li>
                <li>• Stakeholders</li>
              </ul>
              <p className="text-xs text-gray-600 mt-2">Read-only access</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const markStepComplete = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <h1 className="text-2xl font-bold mb-2">Notion Setup Wizard</h1>
          <p className="text-blue-100">Follow these steps to set up your knowledge vault</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-50 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{steps[currentStep].title}</h2>
              <p className="text-gray-600">{steps[currentStep].description}</p>
            </div>
            <button
              onClick={markStepComplete}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                completedSteps.includes(currentStep)
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <CheckCircle size={16} />
              <span>{completedSteps.includes(currentStep) ? 'Completed' : 'Mark Complete'}</span>
            </button>
          </div>

          <div className="mb-8">
            {steps[currentStep].content}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
              <span>Previous</span>
            </button>
            <button
              onClick={nextStep}
              disabled={currentStep === steps.length - 1}
              className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
