import './Footer.scss';
import { scrollToSection } from '../../utils/scroll';
import { useScrollStore } from '../../store/scrollStore';

function Footer() {
  const { setCurrentIndex } = useScrollStore();

  return (
    <footer className="footer" id="footer">
      <h1 className="footer__logo">
        <a href="/" className="footer__logo-link" aria-label="To home page" title="To home page">
          <img src="/assets/logo/subtract-1.svg" alt="Logo" className="footer__logo-img" />
        </a>
      </h1>

      <div className="footer__credits">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            setCurrentIndex(0);
            scrollToSection('#home');
          }}
          className="footer__credits-home footer__link"
        >
          Home&nbsp;
        </a>
        <a href="#" className="footer__credits-link footer__link">
          Artwork Credits
        </a>
      </div>

      <div className="footer__contacts">
        <a href="https://github.com/Urfill/" target="_blank" className="footer__contacts-link" aria-label="GitHub">
          <img src="/public/assets/icons/icon-git-footer.svg" alt="GitHub" />
        </a>
        <a
          href="https://web.telegram.org/k/#@urfill"
          target="_blank"
          className="footer__contacts-link"
          aria-label="Telegram"
        >
          <img src="/public/assets/icons/icon-tg.svg" alt="Telegram" />
        </a>
        <a
          href="https://www.instagram.com/queldalar/"
          target="_blank"
          className="footer__contacts-link"
          aria-label="Instagram"
        >
          <img src="/public/assets/icons/icon-insta.svg" alt="Instagram" />
        </a>
        <p className="footer__creator">&copy;&nbsp;Urfill&nbsp;2025</p>
      </div>
    </footer>
  );
}

export default Footer;
