import { PageData } from '../utils/ProductPageData';

export function spreadData(data: PageData) {
  console.log('data');
  return {
    className: data.className,
    deviceTitle: data.deviceTitle,
    desc: data.desc,
    deviceImage: data.deviceImage,
    question: data.question,
    chalTitle: data.chalTitle,
    chalImage: data.chalImage,
    terms: data.terms,
    productCtaChild: data.productCtaChild,
    deviceImageCta: data.deviceImageCta,
    imageModifier: data.imageModifier,
    btnText: data.btnText,
    productLink: data.productLink,
  };
}
