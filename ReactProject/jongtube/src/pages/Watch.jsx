import React from 'react';
import { useParams } from 'react-router-dom';
import VideoList from '../component/VideoList';

export default function Watch() {
  const { videoID } = useParams();
  return (
    <div>
      Watch
      <VideoList></VideoList>
    </div>
  );
}
