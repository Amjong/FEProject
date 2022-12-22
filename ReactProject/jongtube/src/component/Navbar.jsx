import React, { useState } from 'react';
import { FaYoutube, FaSearch } from 'react-icons/fa';

export default function Navbar() {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <FaYoutube></FaYoutube>
      JongTube
      <form onSubmit={handleSubmit}>
        <input type='text' value={text} onChange={handleChange} />
        <button>
          <FaSearch></FaSearch>
        </button>
      </form>
    </div>
  );
}
