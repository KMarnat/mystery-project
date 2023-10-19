import Button from '../Button/Button';
import windows from '../../assets/windows11.svg';

interface ProductCtaProps {
  image?: string;
  modified?: string;
  children?: React.ReactNode;
}

const ProductCta: React.FC<ProductCtaProps> = ({ image, modified, children }) => {
  return (
    <section className="product-ad">
      <img src={image} alt="windows 11 logo" className={`product-ad__image ${modified}`} />
      {children}
      <p>
        The newly released Windows 11 has all the power and security of Windows 10 with a redesigned
        and refreshed look. It also comes with new tools, sounds, and apps. Every detail has been
        considered. All of it comes together to bring you a refreshing experience on your PC.
      </p>
      <Button modifier="go">Shop Our Windows 11 Devices</Button>
    </section>
  );
};

ProductCta.defaultProps = {
  image: windows,
};

export default ProductCta;
