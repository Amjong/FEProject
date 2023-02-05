import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Option from '../components/Option';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { handleIncrease } = useCart();
  const {
    state: { product },
  } = useLocation();
  const [option, setOption] = useState(product?.options[0]);
  return (
    <>
      <div className='mx-12 mt-4 text-gray-700'>{`> ${product?.categories}`}</div>
      <div className='flex flex-col md:flex-row p-4'>
        <img
          className='w-full px-4 basis-7/12'
          src={product?.imageURL}
          alt='productImage'
        ></img>
        <div className='w-full basis-5/12 flex flex-col p-4'>
          <h2 className='text-3xl font-bold py-2'>{product?.description}</h2>
          <div className='text-2xl font-bold py-2 border-b border-gray-400'>
            {product?.price} Gold
          </div>
          <label className='font-bold' htmlFor='option'>
            [사이즈 선택]
          </label>
          <Option
            id='option'
            options={product?.options}
            setOption={setOption}
          ></Option>
          <button
            onClick={() => {
              handleIncrease({ ...product, options: option });
            }}
            className='bg-zinc-600 px-4 py-4 my-4 text-white'
          >
            장바구니에 추가
          </button>
        </div>
      </div>
    </>
  );
}
