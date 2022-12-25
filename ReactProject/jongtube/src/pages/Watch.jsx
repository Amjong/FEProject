import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import VideoList from '../component/VideoList';
import VideoPlayer from '../component/VideoPlayer';

export default function Watch() {
  const { videoID } = useParams();
  const [snippet, setSnippet] = useState({});
  const [channelSnippet, setChannelSnippet] = useState({});
  const fetchingVideo = useCallback(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoID}&key=AIzaSyB_YGF6IgcjxJ6DB8iE3BrYctCoxOBQrng`
    )
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
    fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${snippet.channelId}&key=AIzaSyB_YGF6IgcjxJ6DB8iE3BrYctCoxOBQrng`
    )
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
    <div className='flex flex-wrap sm:flex-nowrap'>
      <div
        className='relative sm:basis-3/4 w-full h-full'
        style={{ 'padding-bottom': '56.25%' }}
      >
        <VideoPlayer videoID={videoID}></VideoPlayer>
        <div className='h-1/4'>
          <div className='pb-3 text-white font-bold'>{snippet.title}</div>
          <img
            className='rounded-full w-8 h-8 inline mr-2'
            alt='channelThumbnail'
            src={channelSnippet?.thumbnails?.default?.url ?? ''}
            width={channelSnippet?.thumbnails?.default?.width ?? ''}
            height={channelSnippet?.thumbnails?.default?.height ?? ''}
          ></img>
          <div className='text-white inline'>{channelSnippet.title}</div>

          <div className='pt-5 text-white text-sm'>{snippet.description}</div>
        </div>
      </div>
      <VideoList videoID={videoID} type='related'></VideoList>
    </div>
  );
}
