import { useState, useEffect } from 'react';
import { scrollToSection } from '../../utils/scroll';
import { useTranslation } from 'react-i18next';
import { useScrollStore } from '../../store/scrollStore';
import './Header.scss';

function Header() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currLang, setCurrLang] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const { setCurrentIndex, currentIndex } = useScrollStore();

  useEffect(() => {
    setCurrLang(i18n.language === 'en');
  }, [i18n.language]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [leftLineWidth, setLeftLineWidth] = useState(0);
  const [rigthLineWidth, setRigthLineWidth] = useState(0);

  const handleChangeWidth = () => {
    const headerNode = document.querySelector('.header')!;
    const containerListNode = headerNode.querySelector('.logo-block') as HTMLElement;
    const listNode = headerNode.querySelector('.lang-switcher')!;

    const headerWidth = headerNode.scrollWidth;
    const listWidth = listNode.scrollWidth;
    const widthTillList = containerListNode.offsetLeft;

    setLeftLineWidth(widthTillList);
    setRigthLineWidth(headerWidth - widthTillList - listWidth);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.lang-switcher')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isDropdownOpen]);

  return (
    <header
      style={
        {
          '--header-line-width-left': `${leftLineWidth}px`,
          '--header-line-width-right': `${rigthLineWidth}px`,
        } as React.CSSProperties
      }
      className={`header ${scrolled ? 'scrolled' : ''} ${isDropdownOpen ? 'item__open' : ''}`}
    >
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a
              className={`nav__link link ${currentIndex === 0 ? 'link_active' : ''}`}
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                setCurrentIndex(0);
                scrollToSection('#home');
              }}
            >
              {t('menuNavs.home') || 'Home'}
            </a>
          </li>
          <li className="nav__item">
            <a
              className={`nav__link link ${currentIndex === 1 ? 'link_active' : ''}`}
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                setCurrentIndex(1);
                scrollToSection('#skills');
              }}
            >
              {t('menuNavs.skills') || 'Skills'}
            </a>
          </li>
          <li className="nav__item">
            <a
              className={`nav__link link ${currentIndex === 2 ? 'link_active' : ''}`}
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                setCurrentIndex(2);
                scrollToSection('#projects');
              }}
            >
              {t('menuNavs.projects') || 'Projects'}
            </a>
          </li>
          <li className="nav__item">
            <a
              className={`nav__link link ${currentIndex === 3 ? 'link_active' : ''}`}
              href="#workJourney"
              onClick={(e) => {
                e.preventDefault();
                setCurrentIndex(3);
                scrollToSection('#workJourney');
              }}
            >
              {t('menuNavs.workJourney') || 'Work journey'}
            </a>
          </li>
          <li className="nav__item">
            <a
              className={`nav__link link ${currentIndex === 4 ? 'link_active' : ''}`}
              href="#contacts"
              onClick={(e) => {
                e.preventDefault();
                setCurrentIndex(4);
                scrollToSection('#contacts');
              }}
            >
              {t('menuNavs.contacts') || 'Contacts'}
            </a>
          </li>
          {/* <li className="nav__item">
            <a
              className={`nav__link link ${currentIndex === 0 ? 'link_active' : ''}`}
              href="#switcher"
              // onClick={(e) => {
              //   e.preventDefault();
              //   scrollToSection('#switcher');
              // }}
            >
              {t('menuNavs.switcher') || 'Switch me'}
            </a>
          </li> */}
        </ul>
      </nav>

      <div className="logo-block">
        <div className="lang-switcher">
          <button
            className="lang-switcher__button link link_active"
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen);
              handleChangeWidth();
            }}
          >
            {t(`lang-${currLang ? 'en' : 'ru'}`) || 'Language'}
          </button>
          {isDropdownOpen && (
            <ul className="lang-switcher__dropdown">
              <li className="lang-switcher__option">
                <a
                  href="#"
                  className="lang-switcher__link"
                  onClick={(e) => {
                    e.preventDefault();
                    changeLanguage('en');
                  }}
                >
                  {t('lang-en')}
                </a>
              </li>
              <li className="lang-switcher__option">
                <a
                  href="#"
                  className="lang-switcher__link"
                  onClick={(e) => {
                    e.preventDefault();
                    changeLanguage('ru');
                  }}
                >
                  {t('lang-ru')}
                </a>
              </li>
            </ul>
          )}
        </div>

        <a href="/" className="logo" aria-label="To home page" title="To home page">
          <img src="/assets/logo/subtract-1.png" alt="Logo" className="logo__img" />
        </a>
      </div>
    </header>
  );
}

export default Header;
