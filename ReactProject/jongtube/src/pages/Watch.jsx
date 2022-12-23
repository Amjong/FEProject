import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import VideoList from '../component/VideoList';
import VideoPlayer from '../component/VideoPlayer';

export default function Watch() {
  const { videoID } = useParams();
  const [snippet, setSnippet] = useState({});
  const [channelSnippet, setChannelSnippet] = useState({});
  const fetchingVideo = useCallback(() => {
    fetch(`../data/videosByVideoID_Snippet.json`)
      .then((response) => response.json())
      .then((data) => {
        setSnippet({
          title: data.items[0].snippet.title,
          channelId: data.items[0].snippet.channelId,
          description: data.items[0].snippet.description,
        });
      });
  }, []);

  const fetchingChannel = useCallback(() => {
    fetch(`../data/channelById.json`)
      .then((response) => response.json())
      .then((data) => {
        setChannelSnippet({
          title: data.items[0].snippet.title,
          thumbnails: { ...data.items[0].snippet.thumbnails },
        });
      });
  }, []);
  useEffect(() => {
    fetchingVideo();
    fetchingChannel();
  }, []);
  return (
    <div>
      Watch {videoID}!<VideoPlayer></VideoPlayer>
      <div>{snippet.title}</div>
      <img
        alt='channelThumbnail'
        src={channelSnippet?.thumbnails?.default?.url ?? ''}
        width={channelSnippet?.thumbnails?.default?.width ?? ''}
        height={channelSnippet?.thumbnails?.default?.height ?? ''}
      ></img>
      {channelSnippet.title}
      <div>{snippet.description}</div>
      <VideoList type='related'></VideoList>
    </div>
  );
}
