'use client';

import { useState } from 'react';
import { Copy, FileText, Calendar, Folder, Users, Search, Filter } from 'lucide-react';

interface Template {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  content: string;
  tags: string[];
}

export default function TemplateGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const templates: Template[] = [
    {
      id: 'meeting-notes',
      title: 'Meeting Notes Template',
      category: 'meetings',
      description: 'Standard template for all team meetings with agenda, decisions, and action items',
      icon: '📝',
      tags: ['meeting', 'notes', 'agenda', 'decisions'],
      content: `# 📅 [Meeting Type] - [Date]

## Meeting Details
- **Date & Time:** 
- **Duration:** 
- **Location/Link:** 
- **Facilitator:** 
- **Note Taker:** 

## Attendees
- [Name] - [Role]
- [Name] - [Role]

## Agenda
1. [Item 1] - [Time allocation]
2. [Item 2] - [Time allocation]

## Discussion & Decisions
### [Topic 1]
**Discussion:** 
**Decision:** 
**Owner:** 
**Due Date:** 

## Action Items
- [ ] [Action] - @[Owner] - Due: [Date]

## Next Meeting
- **Date:** 
- **Agenda Preview:** `
    },
    {
      id: 'project-documentation',
      title: 'Project Documentation Template',
      category: 'projects',
      description: 'Comprehensive template for documenting project scope, timeline, and resources',
      icon: '📋',
      tags: ['project', 'documentation', 'planning', 'scope'],
      content: `# 📋 [Project Name]

## Project Overview
**Objective:** 
**Timeline:** 
**Budget:** 
**Stakeholders:** 

## Scope
### In Scope
- [Item 1]
- [Item 2]

### Out of Scope
- [Item 1]
- [Item 2]

## Success Criteria
1. [Criteria 1]
2. [Criteria 2]

## Resources
- [Resource 1]
- [Resource 2]

## Risks & Mitigation
| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| [Risk 1] | High | Medium | [Strategy] |

## Timeline
- **Phase 1:** [Dates] - [Description]
- **Phase 2:** [Dates] - [Description]`
    },
    {
      id: 'process-documentation',
      title: 'Process Documentation Template',
      category: 'processes',
      description: 'Template for documenting team processes and workflows',
      icon: '🔄',
      tags: ['process', 'workflow', 'documentation', 'procedures'],
      content: `# 🔄 [Process Name]

## Purpose
[Why this process exists]

## Scope
[When and where this process applies]

## Roles & Responsibilities
- **[Role 1]:** [Responsibilities]
- **[Role 2]:** [Responsibilities]

## Step-by-Step Process
1. **[Step 1]**
   - [Detailed instructions]
   - [Tools/resources needed]
   - [Expected outcome]

2. **[Step 2]**
   - [Detailed instructions]
   - [Tools/resources needed]
   - [Expected outcome]

## Quality Checks
- [ ] [Check 1]
- [ ] [Check 2]

## Troubleshooting
**Issue:** [Common problem]
**Solution:** [How to resolve]

## Related Documents
- [Link to related process]
- [Link to supporting documentation]`
    },
    {
      id: 'weekly-standup',
      title: 'Weekly Team Standup',
      category: 'meetings',
      description: 'Template for weekly team standup meetings',
      icon: '🗣️',
      tags: ['standup', 'weekly', 'team', 'status'],
      content: `# 🗣️ Weekly Team Standup - [Date]

## Meeting Info
- **Date:** [Date]
- **Time:** [Time]
- **Facilitator:** [Name]

## Team Updates
### [Team Member 1]
- **Last Week:** [Accomplishments]
- **This Week:** [Plans]
- **Blockers:** [Issues/concerns]

### [Team Member 2]
- **Last Week:** [Accomplishments]
- **This Week:** [Plans]
- **Blockers:** [Issues/concerns]

## Team Announcements
- [Announcement 1]
- [Announcement 2]

## Action Items
- [ ] [Action] - @[Owner] - Due: [Date]

## Next Week Focus
- [Priority 1]
- [Priority 2]`
    },
    {
      id: 'onboarding-checklist',
      title: 'Employee Onboarding Checklist',
      category: 'hr',
      description: 'Comprehensive checklist for new employee onboarding',
      icon: '👋',
      tags: ['onboarding', 'hr', 'checklist', 'new-hire'],
      content: `# 👋 Employee Onboarding Checklist

## New Employee Information
- **Name:** [Full Name]
- **Position:** [Job Title]
- **Department:** [Department]
- **Start Date:** [Date]
- **Manager:** [Manager Name]

## Pre-First Day
- [ ] Send welcome email with first day details
- [ ] Prepare workspace and equipment
- [ ] Create accounts and access permissions
- [ ] Schedule first week meetings

## First Day
- [ ] Office tour and introductions
- [ ] IT setup and account verification
- [ ] HR paperwork completion
- [ ] Company handbook review
- [ ] Team lunch/coffee

## First Week
- [ ] Department overview presentation
- [ ] Role-specific training sessions
- [ ] Meet with key stakeholders
- [ ] Review job responsibilities
- [ ] Set initial goals and expectations

## First Month
- [ ] Complete required training modules
- [ ] Regular check-ins with manager
- [ ] Feedback session
- [ ] Performance goal setting
- [ ] Integration assessment`
    },
    {
      id: 'retrospective',
      title: 'Sprint Retrospective Template',
      category: 'meetings',
      description: 'Template for sprint retrospectives and team reflection',
      icon: '🔄',
      tags: ['retrospective', 'sprint', 'agile', 'reflection'],
      content: `# 🔄 Sprint Retrospective - Sprint [Number]

## Sprint Overview
- **Sprint Duration:** [Start Date] - [End Date]
- **Team:** [Team Name]
- **Facilitator:** [Name]

## What Went Well? 🟢
- [Item 1]
- [Item 2]
- [Item 3]

## What Could Be Improved? 🟡
- [Item 1]
- [Item 2]
- [Item 3]

## What Didn't Work? 🔴
- [Item 1]
- [Item 2]
- [Item 3]

## Action Items
- [ ] [Action] - @[Owner] - Due: [Date]
- [ ] [Action] - @[Owner] - Due: [Date]

## Metrics
- **Velocity:** [Points completed]
- **Burndown:** [Chart/notes]
- **Team Satisfaction:** [Rating/feedback]

## Next Sprint Focus
- [Priority 1]
- [Priority 2]
- [Priority 3]`
    }
  ];

  const categories = [
    { id: 'all', label: 'All Templates', icon: FileText },
    { id: 'meetings', label: 'Meetings', icon: Calendar },
    { id: 'projects', label: 'Projects', icon: Folder },
    { id: 'processes', label: 'Processes', icon: FileText },
    { id: 'hr', label: 'HR & Onboarding', icon: Users }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const copyTemplate = (template: Template) => {
    navigator.clipboard.writeText(template.content);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Template Gallery</h1>
        <p className="text-lg text-gray-600">
          Ready-to-use templates for meetings, projects, and processes. 
          Copy and paste directly into your Notion workspace.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter size={20} className="text-gray-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map(template => (
          <div key={template.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{template.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{template.title}</h3>
                    <span className="text-sm text-blue-600 capitalize">{template.category}</span>
                  </div>
                </div>
                <button
                  onClick={() => copyTemplate(template)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  title="Copy template"
                >
                  <Copy size={16} />
                </button>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{template.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {template.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedTemplate(template)}
                  className="flex-1 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Preview
                </button>
                <button
                  onClick={() => copyTemplate(template)}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Template Preview Modal */}
      {selectedTemplate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{selectedTemplate.icon}</span>
                <h2 className="text-xl font-semibold">{selectedTemplate.title}</h2>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => copyTemplate(selectedTemplate)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Copy size={16} />
                  <span>Copy</span>
                </button>
                <button
                  onClick={() => setSelectedTemplate(null)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono bg-gray-50 p-4 rounded-lg">
                {selectedTemplate.content}
              </pre>
            </div>
          </div>
        </div>
      )}

      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <FileText className="mx-auto text-gray-400 mb-4" size={48} />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No templates found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
}
