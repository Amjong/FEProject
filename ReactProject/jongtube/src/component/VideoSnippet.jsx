import React, { useState, useEffect } from 'react';
import { format } from 'timeago.js';

export default function VideoSnippet({ snippet }) {
  //   const [snippet, setSnippet] = useState(initialSnippet);
  //   const fetchingVideo = () => {
  //     fetch(`data/videosByVideoID_Snippet.json`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const targetSnippet = data.items[0].snippet;
  //         setSnippet({
  //           id: data.items[0].id,
  //           title: targetSnippet.title,
  //           description: targetSnippet.description,
  //           publishedAt: targetSnippet.publishedAt,
  //           thumbnails: targetSnippet.thumbnails,
  //           channelTitle: targetSnippet.channelTitle,
  //         });
  //       });
  //   };
  //   useEffect(fetchingVideo, []);
  console.log(snippet);
  return (
    <>
      <img
        src={snippet.thumbnails.default.url}
        width={snippet.thumbnails.default.width}
        heigth={snippet.thumbnails.default.height}
      ></img>
      <div>{snippet.title}</div>
      <div>
        {snippet.channelTitle} * {format(snippet.publishedAt, 'en_US')}
      </div>
    </>
  );
}

const initialSnippet = {
  id: 'Ks-_Mh1QhMc',
  title: 'Your body language may shape who you are | Amy Cuddy',
  description:
    "Body language affects how others see us, but it may also change how we see ourselves. Social psychologist Amy Cuddy argues that \"power posing\" -- standing in a posture of confidence, even when we don't feel confident -- can boost feelings of confidence, and might have an impact on our chances for success. (Note: Some of the findings presented in this talk have been referenced in an ongoing debate among social scientists about robustness and reproducibility. Read Amy Cuddy's response here: http://ideas.ted.com/inside-the-debate-about-power-posing-a-q-a-with-amy-cuddy/)\n\nGet TED Talks recommended just for you! Learn more at https://www.ted.com/signup.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
  publishedAt: '2012-10-01T15:27:35Z',
  thumbnails: {
    default: {
      url: 'https://i.ytimg.com/vi/Ks-_Mh1QhMc/default.jpg',
      width: 120,
      height: 90,
    },
    medium: {
      url: 'https://i.ytimg.com/vi/Ks-_Mh1QhMc/mqdefault.jpg',
      width: 320,
      height: 180,
    },
    high: {
      url: 'https://i.ytimg.com/vi/Ks-_Mh1QhMc/hqdefault.jpg',
      width: 480,
      height: 360,
    },
    standard: {
      url: 'https://i.ytimg.com/vi/Ks-_Mh1QhMc/sddefault.jpg',
      width: 640,
      height: 480,
    },
    maxres: {
      url: 'https://i.ytimg.com/vi/Ks-_Mh1QhMc/maxresdefault.jpg',
      width: 1280,
      height: 720,
    },
  },
  channelTitle: 'TED',
};
