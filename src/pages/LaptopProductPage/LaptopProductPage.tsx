import Challenge from '../../components/Challenge/Challenge';
import Gamepass from '../../components/Gamepass/Gamepass';
import ProductIntro from '../../components/ProductIntro/ProductIntro';
import ProductCta from '../../components/ProductCta/ProductCta';
import legion9i from '../../assets/legion-9i-2.svg';
import { productData, productPageChallenge, term } from './utils/LaptopProductData';

const LaptopProductPage = () => {
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
      <ProductCta image={legion9i} modified="product-ad__image--modified" />
    </main>
  );
};

export default LaptopProductPage;
