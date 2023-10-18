import Gamepass from '../../components/Gamepass/Gamepass';
import Hero from '../../components/Hero/Hero';
import Intro from '../../components/Intro/Intro';
import banner from '../../assets/banner-image.svg';

const Homepage: React.FC = () => {
  const term = '* Valid for new PC Game Pass members only';

  return (
    <main className="homepage">
      <Hero banner={banner} />
      <Intro />
      <Gamepass terms={term} />
    </main>
  );
};

export default Homepage;
