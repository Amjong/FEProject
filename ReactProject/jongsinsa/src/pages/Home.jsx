import React, { useEffect, useState } from 'react';
import { useFirebaseApp } from '../context/FirebaseContext';
import ProductItem from '../components/ProductItem';
import ProductDetail from './ProductDetail';

export default function Home() {
  const [productList, setProductList] = useState([]);
  const { firebaseApp } = useFirebaseApp();
  const getProductList = () => {
    firebaseApp?.readProductList(setProductList);
  };
  useEffect(getProductList, []);
  return (
    <div>
      Home Page!
      {productList.length && (
        <ul>
          {productList.map((id) => (
            <ProductItem key={id} productId={id}></ProductItem>
          ))}
        </ul>
      )}
    </div>
  );
}
