import React, { useState, useEffect } from 'react';
import { useFirebaseApp } from '../context/FirebaseContext';

export default function ProductItem({ productId }) {
  const [product, setProduct] = useState({});
  const { firebaseApp } = useFirebaseApp();
  const getProductItem = () => {
    firebaseApp?.readProduct(productId, setProduct);
  };
  useEffect(getProductItem, []);
  return (
    <li className='flex flex-col pt-10 m-3 border-2 rounded-md'>
      <img src={product?.imageURL} alt='productImage' />
      <div className='whitespace-pre-line'>
        <span>{product?.description}</span>
        <span>{product?.price}</span>
        <span>{product?.categories}</span>
        <span>{product?.options}</span>
      </div>
    </li>
  );
}
