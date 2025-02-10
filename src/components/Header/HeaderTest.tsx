import { useState } from 'react';
import './Header.scss';

const HeaderTest = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item menu__item--dropdown">
          <button className="menu__link" onClick={() => setIsOpen(!isOpen)}>
            О нас
          </button>
          {isOpen && (
            <ul className="menu__dropdown">
              <li>
                <a href="#" className="menu__dropdown-link">
                  Команда
                </a>
              </li>
              <li>
                <a href="#" className="menu__dropdown-link">
                  История
                </a>
              </li>
              <li>
                <a href="#" className="menu__dropdown-link">
                  Контакты
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default HeaderTest;
