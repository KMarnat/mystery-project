import Menu from '../../components/Menu/Menu';
import navarrow from '../../assets/nav-arrow.svg';
import menu from '../../assets/menu.svg';
import navlogo from '../../assets/logo-navbar.svg';
import { Link, useNavigate } from 'react-router-dom';
import { MouseEventHandler } from 'react';
import { useUiContext } from '../../contexts/UiContext';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { activeMenu, setActiveMenu } = useUiContext();

  const handleClick: MouseEventHandler<HTMLElement> = () => {
    navigate(-1);
  };

  return (
    <header className="header">
      <button className="header__button" onClick={handleClick}>
        <img src={navarrow} alt="nav arrow" />
      </button>
      <Link to={'/'}>
        <img src={navlogo} alt="nav logo" className="header__logo" />
      </Link>
      <button className="header__button" onClick={() => setActiveMenu(!activeMenu)}>
        <img src={menu} alt="menu" />
      </button>
      <Menu />
    </header>
  );
};

export default Header;
