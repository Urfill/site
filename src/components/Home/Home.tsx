import './Home.scss';
import { useTranslation } from 'react-i18next';

function AboutMe() {
  const {
    t,
    // i18n
  } = useTranslation();

  return (
    <section className="home" id="home">
      <div className="home__greetings-block">
        <h1 className="home__greetings-header">
          <span className="home__greetings-header-highlight">{t('home.greetings') || 'Hi'}</span>,&nbsp;
          {t('home.welcomeTextName') || 'im Stas!'}
          <br />
          {t('home.welcomeTextH2') || 'Welcome to my portfolio'}
        </h1>
      </div>
      <div className="home__text-block">
        <p className="home__text">
          {t('home.welcomeTextP') ||
            "As a front-end developer, I specialize in creating fast and user-friendly web applications. Let's bring your ideas to life with innovative solutions"}
        </p>
      </div>
      <div className="home__buttons-block">
        <button className="home__button home__button_active">Bla-bla</button>
        <button className="home__button">Bla-bla-bla</button>
      </div>
    </section>
  );
}

export default AboutMe;
