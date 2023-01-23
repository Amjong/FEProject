import React, { useEffect, useState } from 'react';
import { useFirebaseApp } from '../context/FirebaseContext';
import ProductItem from '../components/ProductItem';

export default function Home() {
  const [productList, setProductList] = useState([]);
  const { firebaseApp } = useFirebaseApp();
  const getProductList = () => {
    firebaseApp?.readProductList(setProductList);
  };
  const createInitialProduct = () => {
    initialProduct.forEach((product) => {
      firebaseApp?.createProduct(
        product.imageURL,
        product.price,
        product.categories,
        product.description,
        product.options
      );
    });
  };
  useEffect(getProductList, []);
  useEffect(createInitialProduct, []);
  return (
    <div>
      {productList && (
        <ul>
          {productList.map((id) => (
            <ProductItem key={id} productId={id}></ProductItem>
          ))}
        </ul>
      )}
    </div>
  );
}

const initialProduct = [
  {
    imageURL:
      'https://res.cloudinary.com/dazzvmx3y/image/upload/v1673615918/w_250,h_400,c_fill,g_auto,q_auto/7_ictp3o.webp',
    price: 80000,
    categories: '여성',
    description: '빨강 자켓',
    options: ['S', 'M', 'L', 'XL'],
  },
  {
    imageURL:
      'https://res.cloudinary.com/dazzvmx3y/image/upload/v1673615918/w_250,h_400,c_fill,g_auto,q_auto/5_wwsqxv.webp',
    price: 50000,
    categories: '여성',
    description: '줄무늬가 인상깊은 티셔츠',
    options: ['S', 'M', 'L', 'XL'],
  },
  {
    imageURL:
      'https://res.cloudinary.com/dazzvmx3y/image/upload/v1673615918/w_250,h_400,c_fill,g_auto,q_auto/4_uhjvje.webp',
    price: 80000,
    categories: '여성',
    description: '밀짚바지',
    options: ['S', 'M', 'L', 'XL'],
  },
  {
    imageURL:
      'https://res.cloudinary.com/dazzvmx3y/image/upload/v1673615918/w_250,h_400,c_fill,g_auto,q_auto/6_mlmffz.webp',
    price: 120000,
    categories: '여성',
    description: '원피스1',
    options: ['S', 'M', 'L', 'XL'],
  },
  {
    imageURL:
      'https://res.cloudinary.com/dazzvmx3y/image/upload/v1673615918/w_250,h_400,c_fill,g_auto,q_auto/2_d2og9g.webp',
    price: 40000,
    categories: '남성',
    description: '검정 후드티',
    options: ['M', 'L', 'XL', 'XXL'],
  },
  {
    imageURL:
      'https://res.cloudinary.com/dazzvmx3y/image/upload/v1673615917/w_250,h_400,c_fill,g_auto,q_auto/1_xgkxbi.webp',
    price: 40000,
    categories: '남성',
    description: '핑크 후드티',
    options: ['M', 'L', 'XL', 'XXL'],
  },
  {
    imageURL:
      'https://res.cloudinary.com/dazzvmx3y/image/upload/v1673615893/w_250,h_400,c_fill,g_auto,q_auto/3_pyoeer.webp',
    price: 2000000,
    categories: '여성',
    description: '밀짚원피스',
    options: ['S', 'M', 'L', 'XL'],
  },
];
