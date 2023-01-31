import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button
      className='bg-black px-2 py-4 hover:brightness-110 text-red-500'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
