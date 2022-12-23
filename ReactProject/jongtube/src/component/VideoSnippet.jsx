import React from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'timeago.js';

export default function VideoSnippet({ id, snippet }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`watch/${id}`);
  };
  return (
    <>
      <img
        src={snippet.thumbnails.default.url}
        width={snippet.thumbnails.default.width}
        heigth={snippet.thumbnails.default.height}
        onClick={handleClick}
      ></img>
      <div>{snippet.title}</div>
      <div>
        {snippet.channelTitle} * {format(snippet.publishedAt, 'en_US')}
      </div>
    </>
  );
}
