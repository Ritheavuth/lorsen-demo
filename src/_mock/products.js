import { faker } from '@faker-js/faker';
// import product_1 from '../assets/products/product_1.jpg'
// import product_2 from '../assets/products/product_2.jpg'
// import product_3 from '../assets/products/product_3.jpg'
// import product_4 from '../assets/products/product_4.jpg'
// import product_5 from '../assets/products/product_5.jpg'

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'T-Shirt',
  'Hoodie',
  'Sports Pant',
  'Product 4',
  'Product 5',
];
const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];
const PRODUCT_STATUS = ['new', 'sale', 'set']

// ----------------------------------------------------------------------

const products = [...Array(5)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `product_${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 6)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 5 && PRODUCT_COLOR.slice(4, 6)) ||
      PRODUCT_COLOR,
    status: 
    (setIndex === 1 && PRODUCT_STATUS[1]) ||
    (setIndex === 2 && PRODUCT_STATUS[0]) ||
    (setIndex === 3 && PRODUCT_STATUS[0]) ||
    (setIndex === 4 && PRODUCT_STATUS[0]) ||
    (setIndex === 5 && PRODUCT_STATUS[2]) ||
    PRODUCT_STATUS,
  };
});

export default products;
