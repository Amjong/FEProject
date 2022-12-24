import React from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'timeago.js';

export default function VideoSnippet({ id, snippet, channelSnippet }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/watch/${id}`);
  };
  return (
    <span className='m-1 w-1/5'>
      <img
        className='w-full'
        alt='videoThumbnail'
        src={snippet.thumbnails.default.url}
        // width={snippet.thumbnails.default.width}
        // height={snippet.thumbnails.default.height}
        onClick={handleClick}
      ></img>
      <div className='text-clip'>{snippet.title}</div>
      <div>{snippet.channelTitle}</div>
      <div> {format(snippet.publishedAt, 'en_US')}</div>
    </span>
  );
}
