import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Option from '../components/Option';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { handleAdd } = useCart();
  const {
    state: { product },
  } = useLocation();
  const [option, setOption] = useState('');
  return (
    <div className='flex flex-row'>
      <img
        className='w-3/5 mr-2 h-screen'
        src={product?.imageURL}
        alt='productImage'
      ></img>
      <div className='w-2/5'>
        <h1>{product?.description}</h1>
        <div className='border-b border-zinc-300'>{product?.price} Gold</div>
        [사이즈 선택]
        <Option options={product?.options} setOption={setOption}></Option>
        <button
          onClick={() => {
            handleAdd({ ...product, options: option });
          }}
          className='bg-zinc-600 px-4 text-white'
        >
          장바구니에 추가
        </button>
      </div>
    </div>
  );
}
