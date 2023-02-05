import React from 'react';
import { useCart } from '../context/CartContext';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';

export default function CartItem({
  item,
  count,
  item: { imageURL, description, options, price },
}) {
  const { handleIncrease, handleDecrease, handleRemove } = useCart();
  return (
    <li className='flex justify-between my-2 items-center'>
      <img
        className='w-24 md:w-48 rounded-lg'
        src={imageURL}
        alt='productImage'
      />
      <div className='flex-1 flex justify-between ml-4'>
        <div className='basis-3/5'>
          <p className='text-lg'>{description}</p>
          <p className='text-xl font-bold text-red-500'>{options}</p>
          <p>{`${price} Gold`}</p>
        </div>
        <div className='text-2xl flex items-center'>
          <AiOutlinePlusSquare
            className='transition-all hover:text-red-500 hover:scale-10 mx-2 rounded-lg'
            onClick={() => {
              handleIncrease(item);
            }}
          >
            +
          </AiOutlinePlusSquare>
          {count}
          <AiOutlineMinusSquare
            className='transition-all hover:text-red-500 hover:scale-105 mx-2'
            onClick={() => {
              handleDecrease(item);
            }}
          >
            -
          </AiOutlineMinusSquare>
          <RiDeleteBin5Fill
            className='transition-all hover:text-red-500 hover:scale-105 cursor-pointer mx-2'
            onClick={() => {
              handleRemove(item);
            }}
          ></RiDeleteBin5Fill>
        </div>
      </div>
    </li>
  );
}
