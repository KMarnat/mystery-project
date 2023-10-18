import youtube from '../../assets/social-buttons/YouTube.svg';
import instagram from '../../assets/social-buttons/Instagram.svg';
import facebook from '../../assets/social-buttons/Facebook.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__socials">
        <button className="footer__button">
          <img src={facebook} alt="" />
        </button>
        <button className="footer__button">
          <img src={instagram} alt="" />
        </button>
        <button className="footer__button">
          <img src={youtube} alt="" />
        </button>
      </div>
      <nav>
        <ul className="footer__list">
          <li>FAQ</li>
          <li>Find us</li>
          <li>Contact</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </nav>
      <p className="footer__copyright">&copy; iPlay Aps</p>
    </footer>
  );
};

export default Footer;
