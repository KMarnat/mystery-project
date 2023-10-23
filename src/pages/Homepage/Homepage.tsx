import Gamepass from '../../components/Gamepass/Gamepass';
import Hero from '../../components/Hero/Hero';
import Intro from '../../components/Intro/Intro';
import banner from '../../assets/banner-image.svg';

interface HomepageProps {
  activeMenu: boolean;
  setActiveMenu: (activeMenu: boolean) => void;
}

const Homepage: React.FC<HomepageProps> = ({ activeMenu, setActiveMenu }) => {
  const term = '* Valid for new PC Game Pass members only';

  return (
    <main className="homepage">
      <Hero banner={banner} />
      <Intro activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <Gamepass terms={term} />
    </main>
  );
};

export default Homepage;
