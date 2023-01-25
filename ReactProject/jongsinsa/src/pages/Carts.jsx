import React from 'react';
import { useCart } from '../context/CartContext';

export default function Carts() {
  const { cartItems, handleAdd, handleRemove } = useCart();
  return (
    <div>
      {cartItems && (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{item.id}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
