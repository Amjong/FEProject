import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirebaseApp } from '../context/FirebaseContext';

export default function ProductItem({ productId }) {
  const [product, setProduct] = useState({});
  const { firebaseApp } = useFirebaseApp();
  const navigate = useNavigate();
  const getProductItem = () => {
    firebaseApp?.readProduct(productId, setProduct);
  };
  useEffect(getProductItem, []);
  const handleClick = () => {
    navigate(`product/${productId}`, { state: { product } });
  };
  return (
    <li
      className='flex flex-col pt-10 m-3 border-2 rounded-lg shadow-md overflow-hidden cursor-pointer'
      onClick={() => {
        handleClick();
      }}
    >
      <img className='w-full' src={product?.imageURL} alt='productImage' />
      <div className='mt-2 px-2 text-lg flex justify-between items-center'>
        <h3 className='truncate'>{product?.description}</h3>
        <p>{`${product?.price} Gold`}</p>
      </div>
      <p className='mb-2 px-2 text-gray-600'>{product?.categories}</p>
    </li>
  );
}
