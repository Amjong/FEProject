import React, { useState, useEffect } from 'react';
import VideoSnippet from './VideoSnippet';

export default function VideoList(props) {
  const [list, setList] = useState([]);
  const getFetchURL = () => {
    if (props.type === 'popular') {
      return 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&maxResults=25&key=AIzaSyB_YGF6IgcjxJ6DB8iE3BrYctCoxOBQrng';
    } else if (props.type === 'keyword') {
      return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${props.keyword}&key=AIzaSyB_YGF6IgcjxJ6DB8iE3BrYctCoxOBQrng`;
    } else if (props.type === 'related') {
      return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${props.videoID}&type=video&maxResults=25&key=AIzaSyB_YGF6IgcjxJ6DB8iE3BrYctCoxOBQrng`;
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
    <div className='sm:basis-1/4 sm:pl-1 flex flex-wrap'>
      {list.map((item) => {
        return (
          <VideoSnippet
            key={item.id.videoId || item.id}
            id={item.id.videoId || item.id}
            snippet={item.snippet}
            type={props.type}
          ></VideoSnippet>
        );
      })}
    </div>
  );
}
