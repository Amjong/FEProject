import React from 'react';
import { GoTrashcan } from 'react-icons/go';
import { useCart } from '../context/CartContext';

export default function CartItem({ item }) {
  const { handleIncrease, handleDecrease, handleRemove } = useCart();
  return (
    <div className='flex flex-row'>
      <img src={item?.item?.imageURL} alt='productImage' />
      <div className='flex flex-col text-left'>
        <span>{item?.item?.description}</span>
        <span>{item?.item?.options}</span>
        <span>{item?.item?.price}</span>
      </div>
      <div className='flex flex-row text-right'>
        <button
          onClick={() => {
            handleIncrease(item?.item);
          }}
        >
          +
        </button>
        {item?.count}
        <button
          onClick={() => {
            handleDecrease(item?.item);
          }}
        >
          -
        </button>
        <GoTrashcan
          className='cursor-pointer'
          onClick={() => {
            handleRemove(item?.item);
          }}
        ></GoTrashcan>
      </div>
    </div>
  );
}
