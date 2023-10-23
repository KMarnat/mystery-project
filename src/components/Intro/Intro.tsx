import { Link } from 'react-router-dom';
import legiongo from '../../assets/legion_go.svg';
import Button from '../Button/Button';

interface IntroProps {
  activeMenu: boolean;
  setActiveMenu: (activeMenu: boolean) => void;
}

const Intro: React.FC<IntroProps> = ({ activeMenu, setActiveMenu }) => {
  return (
    <section className="intro">
      <img src={legiongo} alt="" className="intro__legion" />
      <h3>Lenovo Legion Go with Detachable Controllers</h3>
      <p className="lead">
        Experience handheld gaming perfection with console-level performance and graphics, a super
        vivid touchscreen display, controls that will keep you at the top of the leaderboards & so
        much more.
      </p>
      <Button modifier="go">Try It Out</Button>
    </section>
  );
};

export default Intro;
