import React, { useState } from 'react';
import { FaShoppingCart, FaPencilAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Login from './Login';

export default function Header() {
  const { cartItems } = useCart();
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div className='flex mb-3 border-b border-zinc-300'>
      <Link to='/'>
        <img
          className='w-1/5 '
          src='https://res.cloudinary.com/dazzvmx3y/image/upload/v1673142546/Logo_yjedbj.png'
          alt='Logo'
        ></img>
      </Link>
      <Link to='/products'>
        <span className='ml-auto'>Products</span>
      </Link>
      <Link to='/carts'>
        <FaShoppingCart className='w-6 h-6' />
        <span>{cartItems.length}</span>
      </Link>
      {isAdmin && (
        <Link to='/register'>
          <FaPencilAlt className='w-6 h-6'></FaPencilAlt>
        </Link>
      )}

      <Login
        className='ml-auto'
        setAdminState={(adminState) => {
          setIsAdmin(adminState);
        }}
      ></Login>
    </div>
  );
}
