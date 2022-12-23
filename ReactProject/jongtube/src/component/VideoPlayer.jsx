import React, { useState, useEffect } from 'react';

export default function VideoPlayer() {
  const [videoHTML, setVideoHTML] = useState(``);
  const fetchingVideo = () => {
    fetch(`../data/videosByVideoID_Player.json`)
      .then((response) => response.json())
      .then((data) => {
        setVideoHTML(data.items[0].player.embedHtml);
      });
  };
  useEffect(fetchingVideo, []);
  return <div dangerouslySetInnerHTML={{ __html: videoHTML }}></div>;
}
