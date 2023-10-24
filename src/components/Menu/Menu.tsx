import { Link } from 'react-router-dom';
import { useUiContext } from '../../contexts/UiContext';
import { useUserContext } from '../../contexts/UserContext';
import exit from '../../assets/exit.svg';
import csIcon from '../../assets/menu-icons/cs_icon.svg';
import fgIcon from '../../assets/menu-icons/fg_icon.svg';
import f1Icon from '../../assets/menu-icons/f1_icon.svg';
import legionIcon from '../../assets/menu-icons/legion_icon.svg';
import gpIcon from '../../assets/menu-icons/gp_icon.svg';

const Menu: React.FC = () => {
  const { activeMenu, setActiveMenu } = useUiContext();
  const { username, fullName, avatar } = useUserContext();

  return (
    <aside className={`menu ${activeMenu ? 'menu--active' : ''}`}>
      <div className="menu__useractions">
        <Link to={'/profile'} onClick={() => setActiveMenu(!activeMenu)}>
          <div className="menu__user">
            <div className="menu__user-border">
              <img src={avatar} alt="avatar" className="menu__user-avatar" />
            </div>
            <div className="menu__user-details">
              {!username || !fullName ? (
                <h5>Click to sign up</h5>
              ) : (
                <>
                  <h5>{username}</h5>
                  <p>{fullName}</p>
                </>
              )}
            </div>
          </div>
        </Link>
        <button className="menu__exit" onClick={() => setActiveMenu(!activeMenu)}>
          <img src={exit} alt="" />
        </button>
      </div>
      <nav className="nav">
        <h5 className="nav__title">Play and Win</h5>
        <ul className="nav__list">
          <Link to={'/cs2-challenge'} onClick={() => setActiveMenu(!activeMenu)}>
            <li>
              <img src={csIcon} alt="" />
              Counter-Strike 2
            </li>
          </Link>
          <Link to={'/fg-challenge'} onClick={() => setActiveMenu(!activeMenu)}>
            <li>
              <img src={fgIcon} alt="" />
              Fall Guys
            </li>
          </Link>
          <Link to={'/f1-challenge'} onClick={() => setActiveMenu(!activeMenu)}>
            <li>
              <img src={f1Icon} alt="" />
              F1 2023
            </li>
          </Link>
          <Link to={'/raffles'} onClick={() => setActiveMenu(!activeMenu)}>
            <li>
              <img src={legionIcon} alt="" />
              Daily Raffles
            </li>
          </Link>
          <Link to={'/gamepass'} onClick={() => setActiveMenu(!activeMenu)}>
            <li>
              <img src={gpIcon} alt="" />
              Try Game Pass for Free
            </li>
          </Link>
        </ul>
      </nav>
      <nav className="nav">
        <h5 className="nav__title">Experience during Dreamhack</h5>
        <ul className="nav__list">
          <Link to={'/lenovo-legion-t5-gaming-desktop'} onClick={() => setActiveMenu(!activeMenu)}>
            <li>
              <img src={legionIcon} alt="" />
              Legion T5 Gaming Desktop
            </li>
          </Link>

          <Link to={'/lenovo-legion-9i-gaming-laptop'} onClick={() => setActiveMenu(!activeMenu)}>
            <li>
              <img src={legionIcon} alt="" />
              Legion 9i Gaming Laptop
            </li>
          </Link>
          <Link to={'/lenovo-legion-go'} onClick={() => setActiveMenu(!activeMenu)}>
            <li>
              <img src={legionIcon} alt="" />
              Legion Go Portable Gaming
            </li>
          </Link>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
