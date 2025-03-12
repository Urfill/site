import { useState, useEffect, useRef } from 'react';
import { scrollToSection } from '../../utils/scroll';
import { useTranslation } from 'react-i18next';
import { useScrollStore } from '../../store/scrollStore';
import './Header.scss';

function Header() {
  const { t, i18n } = useTranslation();
  const { setCurrentIndex, currentIndex } = useScrollStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [leftLineWidth, setLeftLineWidth] = useState(0);
  const [rightLineWidth, setRightLineWidth] = useState(0);

  const headerRef = useRef<HTMLElement>(null);
  const langSwitcherRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: 'home', label: 'menuNavs.home' },
    { id: 'skills', label: 'menuNavs.skills' },
    { id: 'projects', label: 'menuNavs.projects' },
    { id: 'workJourney', label: 'menuNavs.workJourney' },
    { id: 'contacts', label: 'menuNavs.contacts' },
  ];

  const languages = [
    { code: 'en', label: 'lang-en' },
    { code: 'ru', label: 'lang-ru' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 1);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langSwitcherRef.current && !langSwitcherRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Функция пересчета ширины полосок
  const handleChangeWidth = () => {
    if (!headerRef.current) return;

    const headerNode = headerRef.current;
    const containerListNode = headerNode.querySelector('.logo-block') as HTMLElement;
    const listNode = headerNode.querySelector('.lang-switcher') as HTMLElement;

    if (containerListNode && listNode) {
      const headerWidth = headerNode.clientWidth;
      const listWidth = listNode.clientWidth;
      const widthTillList = containerListNode.offsetLeft;

      setLeftLineWidth(widthTillList);
      setRightLineWidth(headerWidth - widthTillList - listWidth);
    }
  };

  // Вызываем пересчет при изменении размера окна
  useEffect(() => {
    handleChangeWidth();
    window.addEventListener('resize', handleChangeWidth);
    return () => window.removeEventListener('resize', handleChangeWidth);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`header ${scrolled ? 'scrolled' : ''} ${isDropdownOpen ? 'item__open' : ''}`}
      style={
        {
          '--header-line-width-left': `${leftLineWidth}px`,
          '--header-line-width-right': `${rightLineWidth}px`,
        } as React.CSSProperties
      }
    >
      <nav className="nav">
        <ul className="nav__list">
          {navItems.map((item, index) => (
            <li key={item.id} className="nav__item">
              <a
                className={`nav__link link ${currentIndex === index ? 'link_active' : ''}`}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentIndex(index);
                  scrollToSection(`#${item.id}`);
                }}
              >
                {t(item.label) || item.id}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="logo-block">
        <div className="lang-switcher" ref={langSwitcherRef}>
          <button
            className="lang-switcher__button link link_active"
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen);
              handleChangeWidth();
            }}
          >
            {t(`lang-${i18n.language}`) || 'Language'}
          </button>
          {isDropdownOpen && (
            <ul className="lang-switcher__dropdown">
              {languages.map((lang) => (
                <li key={lang.code} className="lang-switcher__option">
                  <a
                    href="#"
                    className="lang-switcher__link"
                    onClick={(e) => {
                      e.preventDefault();
                      i18n.changeLanguage(lang.code);
                      setIsDropdownOpen(false);
                      handleChangeWidth();
                    }}
                  >
                    {t(lang.label)}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <a href="/" className="logo" aria-label="To home page" title="To home page">
          <img src="/assets/logo/logo.svg" alt="Logo" className="logo__img" />
        </a>
      </div>
    </header>
  );
}

export default Header;
