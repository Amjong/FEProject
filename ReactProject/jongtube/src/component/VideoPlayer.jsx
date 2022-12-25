import React, { useState, useEffect } from 'react';

export default function VideoPlayer() {
  const [videoHTML, setVideoHTML] = useState(``);
  const fetchingVideo = () => {
    fetch(`../data/videosByVideoID_Player.json`)
      .then((response) => response.json())
      .then((data) => {
        let tempString = data.items[0].player.embedHtml;
        tempString = tempString.replace(
          'width="480" height="270"',
          "class='w-full h-3/4 absolute'"
        );
        setVideoHTML(tempString);
      });
  };
  useEffect(fetchingVideo, []);
  return <div dangerouslySetInnerHTML={{ __html: videoHTML }}></div>;
}
