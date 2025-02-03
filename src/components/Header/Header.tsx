import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.scss';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const [isChecked, setIsChecked] = useState(false);
  const lang = isChecked ? 'en' : 'ru';
  // const day = isChecked ? 'day' : 'night';

  return (
    <header className="header">
      <a href="/" title="To home page" aria-label="To home page" className="header__logo logo">
        <img src="/public/assets/logo.svg" alt="Logo" className="header__logo-img" />
      </a>
      <nav className="header__menu">
        <ul className="header__menu-list">
          <li className="header__menu-item">
            <a className="header__menu-link" href="#about">
              {t('menuNavs.about')}
            </a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-link" href="#skills">
              {t('menuNavs.skills')}
            </a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-link" href="#portfolio">
              {t('menuNavs.portfolio')}
            </a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-link" href="#workExperience">
              {t('menuNavs.workExperience')}
            </a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-link" href="#contacts">
              {t('menuNavs.contacts')}
            </a>
          </li>
        </ul>
      </nav>
      {/* TEST // change to side-menu with custom settings? */}
      <div>
        <label className="header__menu-switch-language">
          <input
            className="header__menu-switch-language-chekbox hidden"
            type="checkbox"
            checked={isChecked}
            onChange={() => {
              setIsChecked(!isChecked);
              changeLanguage(lang);
            }}
          />
          <span
            className="header__menu-switch-language-slider"
            title={`Switch to ${lang}`}
            aria-label={`Switch to ${lang}`}
          >
            <img
              className="header__menu-switch-language-image"
              src={`/public/assets/flag-img_${lang}.svg`}
              alt="change language"
            />
          </span>
        </label>
      </div>
      {/* END TEST */}
    </header>
  );
}

export default Header;
