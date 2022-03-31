import React from 'react';
import Recents from '../Home/Recents/Recents';
import s from './List.module.scss';
import { gql } from '@app/gql';
import { VideoFragmentFragment } from '../../apollo/gql/graphql';

type Videos = {
  id: string;
  slug: string;
  cover: { img: { id: string; url: string; hash: string } };
  title: string;
  date: string;
  user: { username: string };
  tag: [{ tag: { id: string; tag: string } }];
};

const VideoFragment = gql(`
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
`);

const Videos = (videos: VideoFragmentFragment): JSX.Element => {
  return (
    <div className={s.videoList}>
      {videos?.videos?.map((video) => (
        <Recents
          key={video?.id}
          type='vlog'
          id={video?.id}
          slug={String(video?.slug)}
          cover={`/uploads/${String(video?.cover?.img?.hash)}-thumb.svg`}
          img={String(video?.cover?.img?.url)}
          title={video?.title}
          date={video?.date as string}
          name={video?.user?.username}
          excerpt={`Location: ${String(video?.tag?.[0])}`}
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
