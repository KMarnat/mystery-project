interface HeroProps {
  banner: string;
  modifier?: string;
}

const Hero: React.FC<HeroProps> = ({ banner, modifier }) => {
  return (
    <section className={`hero hero--${modifier}`}>
      <img src={banner} alt="" className={`hero__banner hero__banner--${modifier}`} />
    </section>
  );
};

export default Hero;
