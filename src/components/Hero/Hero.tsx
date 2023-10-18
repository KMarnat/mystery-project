interface HeroProps {
  banner: string;
}

const Hero: React.FC<HeroProps> = ({ banner }) => {
  return (
    <section className="hero">
      <img src={banner} alt="" className="hero__banner" />
    </section>
  );
};

export default Hero;
