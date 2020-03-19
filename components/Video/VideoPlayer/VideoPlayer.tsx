import React, { useState } from 'react';
import { useRouter } from 'next/router';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import axios from 'axios';
import { ReactVideoPlay, VideoSourceType } from 'react-video-play';
import Load from '../../Other/Load/Load';
import Err from '../../Other/Error/Error';
import s from './VideoPlayer.module.scss';
import Nav from '../../Nav/Nav';

const getVideo = gql`
  query getVideos($slug: [String!]) {
    videos(where: { slug: $slug }) {
      id
      title
      slug
      cover {
        img {
          id
          url
        }
      }
      excerpt
      #      tag {
      #        tag
      #      }
      videoID
    }
  }
`;

type Video = {
  title: string;
  excerpt: string;
  cover: { img: { id: string; url: string } };
  // tag: [{ tag: { id: string; tag: string } }];
  albumID: number;
};

type VideoLink = {
  url: string;
};

const VideoPlayer = (): JSX.Element => {
  const router = useRouter();
  const [video, setVideo] = useState<VideoLink[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { data, error, loading } = useQuery(getVideo, {
    variables: { slug: router.query.slug },
    onCompleted: async (d) => {
      const videoID = d?.videos[0].videoID;
      if (videoID) {
        const videoLink = await axios.get(`https://tropicalt-google-video.glitch.me/${videoID}`);
        setVideo(
          videoLink?.data?.map((url: string) => ({
            url,
          }))
        );
      }
      setIsLoading(false);
    },
  });

  if (isLoading || loading) return <Load />;
  if (error || (!isLoading && !video.length)) return <Err />;

  const src = [
    {
      name: 'HD',
      default: true,
      source: [
        {
          source: `${video[0].url}`,
          type: VideoSourceType.video_mp4,
        },
      ],
    },
  ];

  const videoData = data?.videos as Video[];
  return (
    <>
      <Nav />
      <h1 className={s.videoHeader}>{videoData[0].title}</h1>
      <div className={s.videoContainer}>
        <ReactVideoPlay
          sources={src}
          poster='http://lorempixel.com/900/450/people/'
          autoplay={true}
          muted={true}
          ambiLight={true}
        />
        <video className={s.videoPlayer} controls={true}>
          <source src={video[0].url} type='video/mp4' />
        </video>
      </div>
      <h2 className={s.videoDescription}>{videoData[0].excerpt}</h2>
      {/*<ul className={s.videoTag}>*/}
      {/*  <li>Tags:</li>*/}
      {/*  {videoData[0].tag.map(({ tag: tag }) => (*/}
      {/*    <li key={tag.id}>*/}
      {/*      <a>{tag}</a>*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
    </>
  );
};
export default VideoPlayer;
