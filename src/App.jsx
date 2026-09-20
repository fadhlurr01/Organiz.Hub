import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Pillars from './components/Pillars';
import TemplateGallery from './components/TemplateGallery';
import Pricing from './components/Pricing';
import Workflow from './components/Workflow';
import WhyUs from './components/WhyUs';
import FeaturesLibrary from './components/FeaturesLibrary';
import SmartWidgets from './components/SmartWidgets';
import BrochureLead from './components/BrochureLead';
import Addons from './components/Addons';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import ContactCta from './components/ContactCta';
import Footer from './components/Footer';
import FloatingStack from './components/FloatingStack';
import PreviewModal from './components/PreviewModal';

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('organiz_lang') || 'id';
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('organiz_theme') || 'dark';
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const [previewState, setPreviewState] = useState({
    isOpen: false,
    url: '',
    title: ''
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('organiz_theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('organiz_lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenPreview = (url, title) => {
    setPreviewState({
      isOpen: true,
      url,
      title
    });
  };

  const handleClosePreview = () => {
    setPreviewState(prev => ({ ...prev, isOpen: false }));
  };

  const handleFilterFromSolutions = (category) => {
    setActiveFilter(category);
    const element = document.getElementById('templates');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="organiz-app-root">
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      <main>
        <Hero lang={lang} />
        <Solutions lang={lang} onFilterCategory={handleFilterFromSolutions} />
        <Pillars lang={lang} />
        <TemplateGallery 
          lang={lang} 
          onOpenPreview={handleOpenPreview} 
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <Pricing lang={lang} />
        <Workflow lang={lang} />
        <WhyUs lang={lang} />
        <FeaturesLibrary lang={lang} />
        <SmartWidgets />
        <BrochureLead lang={lang} />
        <Addons />
        <Team />
        <Testimonials lang={lang} />
        <Faq lang={lang} />
        <ContactCta lang={lang} />
      </main>

      <Footer />
      <FloatingStack />

      <PreviewModal 
        isOpen={previewState.isOpen}
        onClose={handleClosePreview}
        previewUrl={previewState.url}
        previewTitle={previewState.title}
      />
    </div>
  );
}
