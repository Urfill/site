import React, { useEffect } from 'react';
import useThemeStore from './../store/themeStore';
import './App.scss';

import { I18nextProvider } from 'react-i18next';
import i18n from './../utils/i18n.ts';
import { useFullPageScroll } from './../utils/fullPageScroll.jsx';
import { scrollToSection } from '../utils/scroll.ts';
import { useScrollStore } from '../store/scrollStore.tsx';

import Header from './Header/Header.tsx';
import Home from './Home/Home.tsx';
import Skills from './Skills/Skills.tsx';
import Projects from './Projects/Projects.tsx';
import WorkJourney from './WorkJourney/WorkJourney.tsx';
import Contacts from './Contacts/Contacts.tsx';
import Footer from './Footer/Footer.tsx';

const App: React.FC = () => {
  const { theme, setTheme } = useThemeStore();
  const { setCurrentIndex } = useScrollStore();

  useEffect(() => {
    scrollToSection('#home');
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme);
    } else {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemTheme);
    }
  }, [setTheme]);

  useEffect(() => {
    const bodyNode = document.body;
    const rootNode = bodyNode.querySelector('#root');
    bodyNode.className = `${theme}-bg-theme-main`;
    rootNode.className = `${theme}-bg-theme-second`;
  }, [theme]);

  useEffect(() => {
    const language = localStorage.getItem('language') ?? 'en';
    i18n.changeLanguage(language);
  }, []);

  useFullPageScroll('#home, #skills, #projects, #workJourney, #contacts');

  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <main className="main">
        <Home />
        <Skills />
        <Projects />
        <WorkJourney />
        <Contacts />
        <Footer />
      </main>
    </I18nextProvider>
  );
};

export default App;
