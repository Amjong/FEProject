import React from 'react';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

export default function Carts() {
  const { cartItems } = useCart();
  return (
    <div>
      <h1 className='border-b border-black-300 text-center'>내 장바구니</h1>
      {cartItems && (
        <ul className='flex flex-col'>
          {cartItems.map((item) => (
            <li key={item.id}>
              <CartItem item={item}></CartItem>
            </li>
          ))}
        </ul>
      )}
      <div className='flex flex-row m-auto'>
        <div>
          상품 총액
          {cartItems
            ? cartItems.reduce(
                (sum, item) => sum + item.count * item.item.price,
                0
              )
            : 0}
          Gold
        </div>
        <span>+</span>
        <div>배송비 3000 Gold</div>
        <span>=</span>
        <div>
          총액
          {cartItems
            ? cartItems.reduce(
                (sum, item) => sum + item.count * item.item.price,
                0
              ) + 3000
            : 0}
          Gold
        </div>
      </div>
      <button
        className='text-center'
        onClick={() => {
          alert('현재 구매하기 기능은 구현되어 있지 않습니다!');
        }}
      >
        구매하기
      </button>
    </div>
  );
}
