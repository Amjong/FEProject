import React, { useState } from 'react';
import { FaYoutube, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    navigate(`/search/${text}`);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className='flex justify-center'>
      <FaYoutube className='w-10 h-10 inline text-red-600'></FaYoutube>
      <span className='font-bold pr-10 leading-9 pl-1 hover:pointer-events-auto'>
        JongTube
      </span>
      <form className='inline pl-10' onSubmit={handleSubmit}>
        <input
          className='border-gray border-2 leading-8 pointer-events-auto'
          type='text'
          placeholder='search...'
          value={text}
          onChange={handleChange}
        />
        <button className='pl-1 pointer-events-auto'>
          <FaSearch></FaSearch>
        </button>
      </form>
    </div>
  );
}
