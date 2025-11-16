import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations } from './translations';

function App() {
  const [language, setLanguage] = useState('es');
  const t = translations[language];

  return (
    <div className="min-h-screen">
      <Header language={language} setLanguage={setLanguage} t={t} />
      <Hero t={t} />
      <About t={t} />
      <Experience t={t} />
      <Skills t={t} />
      <Projects t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}

export default App;
