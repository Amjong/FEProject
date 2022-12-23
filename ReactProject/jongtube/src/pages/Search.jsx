import React from 'react';
import { useParams } from 'react-router-dom';

import VideoList from '../component/VideoList';

export default function Search() {
  const { keyword } = useParams();
  return (
    <div>
      Search
      <VideoList></VideoList>
    </div>
  );
}
