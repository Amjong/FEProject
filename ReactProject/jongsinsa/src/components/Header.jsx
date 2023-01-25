import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Login from './Login';

export default function Header() {
  const { cartItems, handleAdd, handleRemove } = useCart();
  return (
    <div className='flex mb-3 border-b border-zinc-300'>
      <Link to='/'>
        <img
          className='w-1/5 '
          src='https://res.cloudinary.com/dazzvmx3y/image/upload/v1673142546/Logo_yjedbj.png'
          alt='Logo'
        ></img>
      </Link>
      <span className='ml-auto'>Products</span>
      <Link to='/carts'>
        <FaShoppingCart className='w-6 h-6' />
        <span>{cartItems.length}</span>
      </Link>
      <Login className='ml-auto'></Login>
    </div>
  );
}
