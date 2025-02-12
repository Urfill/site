import React, { useEffect } from 'react';
import './App.scss';
import useThemeStore from './../store/themeStore';

import { I18nextProvider } from 'react-i18next';
import i18n from './../utils/i18n.ts';

import Header from './Header/Header.tsx';
import Home from './Home/Home.tsx';
import Projects from './Projects/Projects.tsx';
import Contacts from './Contacts/Contacts.tsx';
import Footer from './Footer/Footer.tsx';

const App: React.FC = () => {
  const { theme, setTheme } = useThemeStore();

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
    document.body.className = `${theme}-bg-theme`;
  }, [theme]);

  useEffect(() => {
    const language = localStorage.getItem('language') ?? 'en';
    i18n.changeLanguage(language);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <main className="main">
        <Home />
        <Projects />
        <Contacts />
        <Footer />
      </main>
    </I18nextProvider>
  );
};

export default App;
