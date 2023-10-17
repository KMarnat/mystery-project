import navarrow from '../../assets/nav-arrow.svg';
import menu from '../../assets/menu.svg';
import navlogo from '../../assets/logo-navbar.svg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <button className="header__button">
        <img src={navarrow} alt="nav arrow" />
      </button>
      <img src={navlogo} alt="nav logo" className="header__logo" />
      <button className="header__button">
        <img src={menu} alt="menu" />
      </button>
    </header>
  );
};

export default Header;
