import React from 'react';
import VideoList from '../component/VideoList';

export default function Home() {
  return (
    <div>
      <VideoList type='popular'></VideoList>
    </div>
  );
}
