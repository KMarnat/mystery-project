import Button from '../Button/Button';
import windows from '../../assets/windows11.svg';

interface ProductCtaProps {
  image?: string;
  modified?: string;
  btnText?: string;
  productPage?: string;
  children?: React.ReactNode;
}

const ProductCta: React.FC<ProductCtaProps> = ({
  image,
  modified,
  btnText = 'Shop our Windows 11 devices',
  productPage = 'https://www.elgiganten.dk/',
  children,
}) => {
  return (
    <section className="product-ad">
      <img src={image} alt="windows 11 logo" className={`product-ad__image ${modified}`} />
      {children}
      <p>
        The newly released Windows 11 has all the power and security of Windows 10 with a redesigned
        and refreshed look. It also comes with new tools, sounds, and apps. Every detail has been
        considered. All of it comes together to bring you a refreshing experience on your PC.
      </p>
      <a href={productPage} target="_blank">
        <Button modifier="go">{btnText}</Button>
      </a>
    </section>
  );
};

ProductCta.defaultProps = {
  image: windows,
};

export default ProductCta;
