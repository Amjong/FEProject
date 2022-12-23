import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoList from '../component/VideoList';
import VideoPlayer from '../component/VideoPlayer';

export default function Watch() {
  const { videoID } = useParams();
  const [snippet, setSnippet] = useState({});
  const fetchingVideo = () => {
    fetch(`../data/videosByVideoID_Snippet.json`)
      .then((response) => response.json())
      .then((data) => {
        setSnippet({
          title: data.items[0].snippet.title,
          channelTitle: data.items[0].snippet.channelTitle,
          description: data.items[0].snippet.description,
        });
      });
  };
  useEffect(fetchingVideo, []);
  return (
    <div>
      Watch {videoID}!<VideoPlayer></VideoPlayer>
      <div>{snippet.title}</div>
      <div>{snippet.channelTitle}</div>
      <div>{snippet.description}</div>
      <VideoList type='related'></VideoList>
    </div>
  );
}
