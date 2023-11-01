import { useParams } from 'react-router-dom';

import Challenge from '../../components/Challenge/Challenge';
import Gamepass from '../../components/Gamepass/Gamepass';
import ProductIntro from '../../components/ProductIntro/ProductIntro';
import ProductCta from '../../components/ProductCta/ProductCta';
import { legionDesktop, legionGo, legionLaptop } from './utils/ProductPageData';

const ProductPage = () => {
  let className,
    deviceTitle,
    desc,
    deviceImage,
    question,
    chalTitle,
    chalImage,
    terms,
    productCtaChild,
    deviceImageCta,
    imageModifier,
    btnText,
    productLink;

  const { type } = useParams();

  switch (type) {
    case 'lenovo-legion-t5-gaming-desktop':
      ({
        className,
        deviceTitle,
        desc,
        deviceImage,
        question,
        chalTitle,
        chalImage,
        terms,
        productCtaChild,
        deviceImageCta,
        imageModifier,
        btnText,
        productLink,
      } = legionDesktop);
      break;
    case 'lenovo-legion-9i-gaming-laptop':
      ({
        className,
        deviceTitle,
        desc = legionLaptop.desc,
        deviceImage,
        question,
        chalTitle,
        chalImage,
        terms,
        productCtaChild,
        deviceImageCta,
        imageModifier,
        btnText,
        productLink,
      } = legionLaptop);
      break;
    case 'lenovo-legion-go':
      ({
        className,
        deviceTitle,
        desc,
        deviceImage,
        question,
        chalTitle,
        chalImage,
        terms,
        productCtaChild,
        deviceImageCta,
        imageModifier,
        btnText,
        productLink,
      } = legionGo);
      break;
    default:
      className = '';
      deviceTitle = '';
      desc = '';
      deviceImage = '';
      question = '';
      chalTitle = '';
      chalImage = '';
      terms = '';
      deviceImageCta = '';
      imageModifier = 'product-ad__image--modified';
      btnText = '';
      productLink = '';
  }

  return (
    <main className={className}>
      <ProductIntro title={deviceTitle} desc={desc} image={deviceImage} />
      <Challenge question={question} title={chalTitle} image={chalImage} />
      <Gamepass terms={terms} />
      <ProductCta>{productCtaChild}</ProductCta>
      <ProductCta
        image={deviceImageCta}
        modified={imageModifier}
        btnText={btnText}
        productPage={productLink}
      />
    </main>
  );
};
export default ProductPage;
