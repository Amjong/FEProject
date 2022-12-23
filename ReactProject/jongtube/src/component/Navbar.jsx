import React, { useState } from 'react';
import { FaYoutube, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    navigate(`search/${text}`);
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
