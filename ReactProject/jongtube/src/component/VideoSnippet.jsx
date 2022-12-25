import React from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'timeago.js';

export default function VideoSnippet({ id, snippet, type }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/watch/${id}`);
  };
  const getCSS = (type) => {
    if (type === 'related') {
      return 'w-full';
    } else {
      return 'm-1 lg:w-1/5 md:w-1/4 sm:w-1/3';
    }
  };
  return (
    <span className={getCSS(type)}>
      <img
        className='w-full'
        alt='videoThumbnail'
        src={snippet.thumbnails.default.url}
        onClick={handleClick}
      ></img>
      <div className='text-white text-clip font-sans font-bold'>
        {snippet.title}
      </div>
      <div className='text-gray-500 text-sm'>{snippet.channelTitle}</div>
      <div className='text-gray-500 text-sm'>
        {' '}
        {format(snippet.publishedAt, 'en_US')}
      </div>
    </span>
  );
}
