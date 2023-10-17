import Gamepass from '../../components/Gamepass/Gamepass';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Intro from '../../components/Intro/Intro';

const Homepage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Gamepass />
    </>
  );
};

export default Homepage;
