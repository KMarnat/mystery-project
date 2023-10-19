import Challenge from '../../components/Challenge/Challenge';
import Gamepass from '../../components/Gamepass/Gamepass';
import ProductCta from '../../components/ProductCta/ProductCta';
import ProductIntro from '../../components/ProductIntro/ProductIntro';
import legionT5 from '../../assets/legion-t5.svg';
import { productData, productPageChallenge, term } from './utils/DesktopProductData';

const GoProductPage = () => {
  return (
    <main>
      <ProductIntro title={productData.title} desc={productData.desc} image={productData.image} />
      <Challenge
        question={productPageChallenge.question}
        title={productPageChallenge.title}
        image={productPageChallenge.image}
      />
      <Gamepass terms={term} />
      <ProductCta>
        <p>A new Windows experience, bringing you closer to the people and things you love.</p>
      </ProductCta>
      <ProductCta image={legionT5} modified="product-ad__image--modified" />
    </main>
  );
};

export default GoProductPage;
