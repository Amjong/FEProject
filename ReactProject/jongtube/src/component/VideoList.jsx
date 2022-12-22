import React, { useState, useEffect } from 'react';
import VideoSnippet from './VideoSnippet';

export default function VideoList() {
  const [list, setList] = useState([]);
  const fetchingVideos = () => {
    fetch(`data/videosMostPopular.json`)
      .then((response) => response.json())
      .then((data) => {
        setList([...data.items]);
      });
  };
  useEffect(fetchingVideos, []);
  return (
    <div>
      {list.map((item) => {
        return <VideoSnippet snippet={item.snippet}></VideoSnippet>;
      })}
    </div>
  );
}
