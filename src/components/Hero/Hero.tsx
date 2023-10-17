import banner from '../../assets/banner-image.svg';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <img src={banner} alt="" className="hero__banner" />
    </section>
  );
};

export default Hero;
