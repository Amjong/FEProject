import React from 'react';
import { useParams } from 'react-router-dom';
import VideoList from '../component/VideoList';
import VideoPlayer from '../component/VideoPlayer';

export default function Watch() {
  const { videoID } = useParams();
  return (
    <div>
      Watch {videoID}!<VideoPlayer></VideoPlayer>
    </div>
  );
}
