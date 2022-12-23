import React, { useState, useEffect } from 'react';
import VideoSnippet from './VideoSnippet';

export default function VideoList(props) {
  const [list, setList] = useState([]);
  const getFetchURL = () => {
    if (props.type === 'popular') {
      return '../data/videosMostPopular.json';
    } else if (props.type === 'keyword') {
      return '../data/searchByKeyword.json';
    } else if (props.type === 'related') {
      return '../data/searchRelatedVideos.json';
    } else {
      throw new Error('Invalid type!!');
    }
  };
  const fetchingVideos = () => {
    fetch(getFetchURL(), {
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
            key={item.id.videoId || item.id}
            id={item.id.videoId || item.id}
            snippet={item.snippet}
          ></VideoSnippet>
        );
      })}
    </div>
  );
}
