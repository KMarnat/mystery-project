import productImageLaptop from '../../../assets/legion-9i.svg';
import challengeLaptopImageF1 from '../../../assets/game-images/f1.svg';
import productImageLaptopCta from '../../../assets/legion-9i-2.svg';
//

import productImageDesktop from '../../../assets/legion-t5.svg';
import challengeDesktopImageCs from '../../../assets/game-images/cs2.svg';
//
import productImageGo from '../../../assets/legion_go.svg';
import challengeGoImageFg from '../../../assets/game-images/fallguys.svg';
import productImageGoCta from '../../../assets/legion-go-2.svg';
//

export interface PageData {
  className: string;
  deviceTitle: string;
  desc: string;
  deviceImage: string;
  question: string;
  chalTitle: string;
  chalImage: string;
  terms: string;
  productCtaChild: React.ReactNode;
  deviceImageCta: string;
  imageModifier: string;
  btnText: string;
  productLink: string;
}

// PageData for Legion Desktop
const legionDesktop: PageData = {
  className: 'desktoppage',
  deviceTitle: 'Lenovo Legion T5 Gaming Desktop',
  desc: 'Whether you need a rig strong enough to seamlessly game and stream simultaneously or to power your unbelievable clutch play, get the competitive edge with Legion T5 Gen 8.',
  deviceImage: productImageDesktop,
  question: 'HOW IS YOUR AIM IN A 1V1',
  chalTitle: 'JOIN OUR CS2 1V1 CHALLENGE',
  chalImage: challengeDesktopImageCs,
  terms:
    '* Redeem at microsoft.com/redeem by December 31, 2023. Valid for new PC Game Pass members only. Valid payment method required. Unless you cancel, you will be charged the then-current regular membership rate when the promotional period ends. Limit: 1 per person/account. Subject to the Microsoft Services Agreement, Game Pass terms and system requirements at: xbox.com/subscriptionterms.',
  productCtaChild: (
    <p>A new Windows experience, bringing you closer to the people and things you love.</p>
  ),
  deviceImageCta: productImageDesktop,
  imageModifier: 'product-ad__image--modified',
  btnText: 'Buy Legion T5 Desktop',
  productLink:
    'https://www.elgiganten.dk/product/gaming/gaming-pc/stationar-gaming-computer/lenovo-legion-t5-r7-71610004070-stationar-gaming-computer/650455',
};

// PageData for Legion Laptop
const legionLaptop: PageData = {
  className: 'laptoppage',
  deviceTitle: 'Lenovo Legion 9i Gaming Laptop',
  desc: 'Experience the first of its kind Forged Carbon design laptop, that’s changing the entire PC gaming industry, with revolutionary liquid cooling tech, AI features, and more.',
  deviceImage: productImageLaptop,
  question: 'DO YOU HAVE WHAT IT TAKES',
  chalTitle: 'JOIN OUR F1® 23 CHALLENGE',
  chalImage: challengeLaptopImageF1,
  terms:
    '* Redeem at microsoft.com/redeem by December 31, 2023. Valid for new PC Game Pass members only. Valid payment method required. Unless you cancel, you will be charged the then-current regular membership rate when the promotional period ends. Limit: 1 per person/account. Subject to the Microsoft Services Agreement, Game Pass terms and system requirements at: xbox.com/subscriptionterms.',
  productCtaChild: (
    <p>A new Windows experience, bringing you closer to the people and things you love.</p>
  ),
  deviceImageCta: productImageLaptopCta,
  imageModifier: 'product-ad__image--modified',
  btnText: 'Buy Legion 9i Gen 8',
  productLink:
    'https://www.elgiganten.dk/product/gaming/gaming-pc/barbar-gaming-computer/lenovo-legion-9-i9-13980hx6420004090-16-barbar-gaming-computer/655670',
};

// PageData for Legion Go Portable Gaming
const legionGo: PageData = {
  className: 'gopage',
  deviceTitle: 'Lenovo Legion Go',
  desc: 'Experience handheld gaming perfection with console-level performance and graphics, a super vivid touchscreen display, controls that will keep you at the top of the leaderboards & so much more.',
  deviceImage: productImageGo,
  question: 'ARE YOU FASTEST ON THE COURSE',
  chalTitle: 'JOIN OUR FALL GUYS CHALLENGE',
  chalImage: challengeGoImageFg,
  terms:
    '* Redeem at microsoft.com/redeem by December 31, 2023. Valid for new PC Game Pass members only. Valid payment method required. Unless you cancel, you will be charged the then-current regular membership rate when the promotional period ends. Limit: 1 per person/account. Subject to the Microsoft Services Agreement, Game Pass terms and system requirements at: xbox.com/subscriptionterms.',
  productCtaChild: (
    <p>A new Windows experience, bringing you closer to the people and things you love.</p>
  ),
  deviceImageCta: productImageGoCta,
  imageModifier: 'product-ad__image--modified',
  btnText: 'Buy Legion Go',
  productLink:
    'https://www.elgiganten.dk/product/gaming/gaming-pc/handholdt-gaming-pc/lenovo-legion-go-gaming-handholdt-enhed/653040',
};

export { legionDesktop, legionLaptop, legionGo };
