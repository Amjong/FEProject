import React from 'react';
import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';
import { useCart } from '../context/CartContext';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';

const SHIPPING = 3000;
export default function Carts() {
  const { cartItems } = useCart();
  const totalPrice = cartItems
    ? cartItems.reduce((sum, item) => sum + item.count * item.item.price, 0)
    : 0;
  return (
    <div className='p-8 flex flex-col'>
      <h1 className='text-2xl text-center font-bold pb-4 border-b border-gray-300 '>
        내 장바구니
      </h1>
      {cartItems && (
        <ul className='border-b border-gray-300 mb-8 p-4 px-28'>
          {cartItems.map((item) => (
            <li key={item.id}>
              <CartItem item={item.item} count={item.count}></CartItem>
            </li>
          ))}
        </ul>
      )}
      <div className='flex justify-between items-center mb-6 px-2 md:px-8 lg:px-16'>
        <PriceCard text='상품 총액' price={totalPrice} />
        <BsFillPlusCircleFill className='shrink-0' />
        <PriceCard text='배송액' price={SHIPPING} />
        <FaEquals className='shrink-0' />
        <PriceCard text='총 가격' price={totalPrice + SHIPPING} />
      </div>
      <button
        className='text-center bg-red-500 text-white'
        onClick={() => {
          alert('현재 구매하기 기능은 구현되어 있지 않습니다!');
        }}
      >
        구매하기
      </button>
    </div>
  );
}
