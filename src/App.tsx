// import { useState } from 'react';
// import React, { useEffect } from 'react';
import {
  I18nextProvider,
  // useTranslation
} from 'react-i18next';
import i18n from './utils/i18n.ts'; // твоя конфигурация i18n

import './styles/App.scss';
import Header from './components/Header/Header.tsx';
import AboutMe from './components/AboutMe/AboutMe.tsx';
import Projects from './components/Projects/Projects.tsx';
import Contacts from './components/Contacts/Contacts.tsx';
import Footer from './components/Footer/Footer.tsx';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <main className="main">
        <AboutMe />
        <Projects />
        <Contacts />
        <Footer />
      </main>
    </I18nextProvider>
  );
}

export default App;
