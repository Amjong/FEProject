import React from 'react';
import { createContext, useContext, useReducer, useCallback } from 'react';
import cartReducer from '../reducer/cartReducer';

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cartItems, dispatch] = useReducer(cartReducer, []);
  const handleAdd = useCallback((item) => {
    dispatch({ type: 'add', item });
  }, []);
  const handleRemove = useCallback((item) => {
    dispatch({ type: 'remove', item });
  }, []);
  return (
    <CartContext.Provider value={{ cartItems, handleAdd, handleRemove }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const value = useContext(CartContext);
  if (value === undefined) {
    throw new Error('useCart should be used within CartContextProvider');
  }
  return value;
}
