import React, { useState, useEffect } from 'react';

export default function VideoPlayer({ videoID }) {
  const [videoHTML, setVideoHTML] = useState(``);
  const fetchingVideo = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=player%2CcontentDetails%2Cstatistics&id=${videoID}&key=AIzaSyB_YGF6IgcjxJ6DB8iE3BrYctCoxOBQrng`
    )
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
