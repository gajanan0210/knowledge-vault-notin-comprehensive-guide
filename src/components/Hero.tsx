'use client';

import { ArrowRight, CheckCircle, Users, Database, FileText, Zap } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  const features = [
    {
      icon: Database,
      title: 'Interactive Setup Wizard',
      description: 'Step-by-step guidance to create your Notion workspace structure with pre-configured databases.'
    },
    {
      icon: FileText,
      title: 'Template Gallery',
      description: 'Ready-to-use templates for meetings, projects, and processes that you can copy directly to Notion.'
    },
    {
      icon: CheckCircle,
      title: 'Implementation Checklist',
      description: 'Track your progress with our comprehensive checklist covering all setup phases.'
    },
    {
      icon: Users,
      title: 'Team Onboarding',
      description: 'Training modules and progress tracking to get your entire team up to speed quickly.'
    }
  ];

  const benefits = [
    'Centralized team knowledge in one accessible location',
    'Improved collaboration and reduced information silos',
    'Consistent documentation standards across teams',
    'Faster onboarding for new team members',
    'Better project visibility and accountability'
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Build Your Team's
            <span className="text-blue-600 block">Knowledge Vault</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your team's collaboration with our comprehensive guide and interactive tools 
            for setting up a Notion knowledge vault. From setup to success, we've got you covered.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={onGetStarted}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 shadow-lg"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </button>
            <a
              href="/notion-knowledge-vault-guide.md"
              download
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Download Guide
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">970+</div>
              <div className="text-gray-600">Lines of comprehensive documentation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">Complete implementation guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Ready-to-use templates</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Build a Knowledge Vault?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="text-yellow-300" size={32} />
                <h3 className="text-xl font-semibold">Quick Start</h3>
              </div>
              <p className="text-blue-100 mb-6">
                Get your team's knowledge vault up and running in just a few hours with our 
                interactive setup wizard and comprehensive templates.
              </p>
              <button
                onClick={onGetStarted}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Start Setup Wizard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
