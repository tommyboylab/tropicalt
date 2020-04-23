import React from 'react';
import Recents from '../Home/Recents/Recents';
import s from './List.module.scss';
import gql from 'graphql-tag';

type Videos = {
  id: string;
  slug: string;
  cover: { img: { id: string; url: string; hash: string } };
  title: string;
  date: string;
  user: { username: string };
  tag: [{ tag: { id: string; tag: string } }];
};

const VideoFragment = gql`
  fragment VideoFragment on Query {
    videos(sort: "date:desc", where: { published: true }) {
      id
      slug
      title
      cover {
        img {
          id
          url
          hash
        }
      }
      date
      tag {
        tag
      }
      user {
        username
      }
    }
  }
`;

const Videos = (videos: any): JSX.Element => {
  videos = videos.data?.videos as Videos[];

  return (
    <div className={s.videoList}>
      {videos.map((video: Videos) => (
        <Recents
          key={video.id}
          type='vlog'
          id={video.id}
          slug={video.slug}
          cover={`/uploads/${video.cover.img.hash}-thumb.svg`}
          img={video.cover.img.url}
          title={video.title}
          date={video.date}
          name={video.user.username}
          excerpt={`Location: ${video.tag.map(({ tag }) => tag)}`}
        />
      ))}
    </div>
  );
};

Videos.displayName = 'Video Gallery';

Videos.fragments = {
  VideoFragment: VideoFragment,
};
export default Videos;
