import React, { useState, useEffect } from 'react';
import VideoSnippet from './VideoSnippet';

export default function VideoList() {
  const [list, setList] = useState([]);
  const fetchingVideos = () => {
    fetch('../data/videosMostPopular.json', {
      headers: {
        Accept: 'application / json',
      },
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Invalid URL!');
        }
        return response.json();
      })
      .then((data) => {
        setList([...data.items]);
      });
  };
  useEffect(fetchingVideos, []);
  return (
    <div>
      {list.map((item) => {
        return (
          <VideoSnippet
            key={item.id || item.id.videoID}
            id={item.id || item.id.videoID}
            snippet={item.snippet}
          ></VideoSnippet>
        );
      })}
    </div>
  );
}
