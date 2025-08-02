'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SetupWizard from '@/components/SetupWizard';
import DatabaseConfigurator from '@/components/DatabaseConfigurator';
import TemplateGallery from '@/components/TemplateGallery';
import ImplementationChecklist from '@/components/ImplementationChecklist';
import GuideViewer from '@/components/GuideViewer';
import OnboardingDashboard from '@/components/OnboardingDashboard';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero onGetStarted={() => setActiveSection('wizard')} />;
      case 'wizard':
        return <SetupWizard />;
      case 'database':
        return <DatabaseConfigurator />;
      case 'templates':
        return <TemplateGallery />;
      case 'checklist':
        return <ImplementationChecklist />;
      case 'guides':
        return <GuideViewer />;
      case 'onboarding':
        return <OnboardingDashboard />;
      default:
        return <Hero onGetStarted={() => setActiveSection('wizard')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="pt-16">
        {renderActiveSection()}
      </main>
    </div>
  );
}
