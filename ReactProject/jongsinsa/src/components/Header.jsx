import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Login from './Login';

export default function Header() {
  return (
    <div className='flex'>
      <img
        className='w-1/5 '
        src='https://res.cloudinary.com/dazzvmx3y/image/upload/v1673142546/Logo_yjedbj.png'
        alt='Logo'
      ></img>
      <span className='ml-auto'>Products</span>
      <FaShoppingCart />
      <Login className='ml-auto'></Login>
    </div>
  );
}
