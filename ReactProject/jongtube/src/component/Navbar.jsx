import React, { useState } from 'react';
import { FaYoutube, FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

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
    <>
      <div className='flex hover:cursor-pointer'>
        <Link to='/'>
          <span className='pl-0 ml-0'>
            <FaYoutube className='pl-1 w-10 h-10 inline text-red-600'></FaYoutube>
            <span className='font-bold text-white pr-10 leading-9 pl-1 hover:pointer-events-auto'>
              JongTube
            </span>
          </span>
        </Link>
        <form className='inline pl-10 w-3/5' onSubmit={handleSubmit}>
          <input
            className='text-white border-black border-2 leading-8 pointer-events-auto bg-gray-900 w-4/5 pr-0 outline-none'
            type='text'
            placeholder='search...'
            value={text}
            onChange={handleChange}
          />
          <button className='bg-gray-600 pointer-events-auto inline w-auto h-5/6'>
            <FaSearch className=' border-none inline w-3/4 h-3/4 text-center'></FaSearch>
          </button>
        </form>
      </div>
      <div className='w-full h-1 border-gray-600 border-2'></div>
    </>
  );
}
