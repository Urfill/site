import './Home.scss';
import { useTranslation } from 'react-i18next';
import { scrollToSection } from '../../utils/scroll';
import { useScrollStore } from '../../store/scrollStore';

function AboutMe() {
  const { t } = useTranslation();
  const { setCurrentIndex } = useScrollStore();

  return (
    <section className="home" id="home">
      <div className="home__greetings-block">
        <h1 className="home__greetings-header">
          <span className="home__greetings-header-highlight">{t('home.greetings') || 'Hi'}</span>,&nbsp;
          {t('home.welcomeTextName') || "I'm Stas!"}
          <br />
          {t('home.welcomeTextH2') || 'Welcome to my portfolio'}
        </h1>
      </div>

      <div className="home__text-block">
        <p className="home__text">
          {t('home.welcomeTextP') ||
            "As a front-end developer, I specialize in creating fast and user-friendly web applications. Let's bring your ideas to life with innovative solutions."}
        </p>
      </div>

      <div className="home__buttons-block">
        <a
          className={`home__button`}
          href={`#contacts`}
          onClick={(e) => {
            e.preventDefault();
            setCurrentIndex(4);
            scrollToSection(`#contacts`);
          }}
        >
          {t('home.btn') || 'Contact me'}
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
