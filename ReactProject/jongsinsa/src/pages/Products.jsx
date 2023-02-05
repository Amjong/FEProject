import React, { useState, useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import { useFirebaseApp } from '../context/FirebaseContext';

export default function Products() {
  const [productList, setProductList] = useState([]);
  const { firebaseApp } = useFirebaseApp();
  const getProductList = () => {
    firebaseApp?.readProductList(setProductList);
  };
  useEffect(getProductList, []);
  return (
    <div>
      {productList && (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4'>
          {productList.map((id) => (
            <ProductItem key={id} productId={id}></ProductItem>
          ))}
        </ul>
      )}
    </div>
  );
}
