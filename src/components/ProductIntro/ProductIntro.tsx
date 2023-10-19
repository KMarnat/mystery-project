import windows from '../../assets/windows11.svg';
import gamepass from '../../assets/logo-gamepass.png';

interface ProductProps {
  title: string;
  desc: string;
  image: string;
}

const ProductIntro: React.FC<ProductProps> = ({ title, desc, image }) => {
  return (
    <section className="product-intro">
      <h1 className="product-intro__title">{title}</h1>
      <img src={image} alt="product" className="product-intro__image" />
      <div className="product-intro__promotion">
        <img src={windows} alt="windows 11" />
        <img src={gamepass} alt="game pass" />
      </div>
      <p className="product-intro__description">{desc}</p>
    </section>
  );
};

export default ProductIntro;
