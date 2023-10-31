import Challenge from '../../components/Challenge/Challenge';
import Gamepass from '../../components/Gamepass/Gamepass';
import ProductCta from '../../components/ProductCta/ProductCta';
import ProductIntro from '../../components/ProductIntro/ProductIntro';
import legionT5 from '../../assets/legion-t5.svg';
import { productData, productPageChallenge, term } from './utils/DesktopProductData';

const GoProductPage = () => {
  const legionDesktopStore =
    'https://www.elgiganten.dk/product/gaming/gaming-pc/stationar-gaming-computer/lenovo-legion-t5-r7-71610004070-stationar-gaming-computer/650455';

  return (
    <main className="desktoppage">
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
      <ProductCta
        image={legionT5}
        modified="product-ad__image--modified"
        btnText="Buy Legion T5 Desktop"
        productPage={legionDesktopStore}
      />
    </main>
  );
};

export default GoProductPage;
