'use client';

import { useState, useEffect } from 'react';
import { BookOpen, Download, Search, Eye, FileText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Guide {
  id: string;
  title: string;
  description: string;
  filename: string;
  icon: string;
  size: string;
}

export default function GuideViewer() {
  const [selectedGuide, setSelectedGuide] = useState(0);
  const [guideContent, setGuideContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const guides: Guide[] = [
    {
      id: 'main-guide',
      title: 'Comprehensive Setup Guide',
      description: 'Complete 970-line guide covering all aspects of setting up your Notion knowledge vault',
      filename: 'notion-knowledge-vault-guide.md',
      icon: '📚',
      size: '~50KB'
    },
    {
      id: 'implementation-checklist',
      title: 'Implementation Checklist',
      description: 'Step-by-step checklist to track your implementation progress',
      filename: 'notion-implementation-checklist.md',
      icon: '✅',
      size: '~15KB'
    },
    {
      id: 'visual-guide',
      title: 'Visual Setup Guide',
      description: 'Detailed visual documentation with screenshot descriptions and examples',
      filename: 'notion-visual-setup-guide.md',
      icon: '🖼️',
      size: '~25KB'
    },
    {
      id: 'quick-reference',
      title: 'Quick Reference Card',
      description: 'Handy reference card for daily use and troubleshooting',
      filename: 'notion-quick-reference-card.md',
      icon: '🎯',
      size: '~10KB'
    }
  ];

  useEffect(() => {
    loadGuideContent(guides[selectedGuide].filename);
  }, [selectedGuide]);

  const loadGuideContent = async (filename: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/${filename}`);
      if (response.ok) {
        const content = await response.text();
        setGuideContent(content);
      } else {
        setGuideContent('# Guide Not Found\n\nThe requested guide could not be loaded. Please check that the file exists.');
      }
    } catch (error) {
      setGuideContent('# Error Loading Guide\n\nThere was an error loading the guide content. Please try again later.');
    }
    setLoading(false);
  };

  const downloadGuide = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAllGuides = () => {
    guides.forEach(guide => {
      setTimeout(() => downloadGuide(guide.filename), 100);
    });
  };

  const filteredContent = searchTerm 
    ? guideContent.split('\n').filter(line => 
        line.toLowerCase().includes(searchTerm.toLowerCase())
      ).join('\n')
    : guideContent;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Implementation Guides</h1>
        <p className="text-lg text-gray-600 mb-4">
          Access all four comprehensive guides for setting up your Notion knowledge vault. 
          Read online or download for offline reference.
        </p>
        
        <button
          onClick={downloadAllGuides}
          className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download size={20} />
          <span>Download All Guides</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Guide Selector */}
        <div className="lg:col-span-1">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Available Guides</h2>
          <div className="space-y-3">
            {guides.map((guide, index) => (
              <div
                key={guide.id}
                className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                  selectedGuide === index
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedGuide(index)}
              >
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">{guide.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">{guide.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{guide.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{guide.size}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          downloadGuide(guide.filename);
                        }}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                        title="Download guide"
                      >
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Search */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search in Guide
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
          </div>
        </div>

        {/* Guide Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{guides[selectedGuide].icon}</span>
                  <div>
                    <h2 className="text-xl font-bold">{guides[selectedGuide].title}</h2>
                    <p className="text-blue-100">{guides[selectedGuide].description}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => downloadGuide(guides[selectedGuide].filename)}
                    className="flex items-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Download size={16} />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  <span className="ml-3 text-gray-600">Loading guide...</span>
                </div>
              ) : (
                <div className="prose prose-blue max-w-none">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({children}) => <h1 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">{children}</h1>,
                      h2: ({children}) => <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{children}</h2>,
                      h3: ({children}) => <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">{children}</h3>,
                      h4: ({children}) => <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">{children}</h4>,
                      p: ({children}) => <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>,
                      ul: ({children}) => <ul className="list-disc list-inside mb-4 space-y-1 text-gray-700">{children}</ul>,
                      ol: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-1 text-gray-700">{children}</ol>,
                      li: ({children}) => <li className="mb-1">{children}</li>,
                      code: ({children, className}) => {
                        const isInline = !className;
                        return isInline ? (
                          <code className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm font-mono">{children}</code>
                        ) : (
                          <code className="block bg-gray-100 text-gray-800 p-4 rounded-lg text-sm font-mono whitespace-pre-wrap overflow-x-auto">{children}</code>
                        );
                      },
                      pre: ({children}) => <div className="mb-4">{children}</div>,
                      blockquote: ({children}) => <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4">{children}</blockquote>,
                      table: ({children}) => <table className="min-w-full divide-y divide-gray-200 mb-4">{children}</table>,
                      thead: ({children}) => <thead className="bg-gray-50">{children}</thead>,
                      tbody: ({children}) => <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>,
                      tr: ({children}) => <tr>{children}</tr>,
                      th: ({children}) => <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{children}</th>,
                      td: ({children}) => <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{children}</td>,
                      a: ({children, href}) => <a href={href} className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">{children}</a>
                    }}
                  >
                    {filteredContent}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {searchTerm && (
        <div className="mt-4 text-sm text-gray-600">
          {filteredContent.split('\n').length} lines match your search for "{searchTerm}"
        </div>
      )}
    </div>
  );
}
