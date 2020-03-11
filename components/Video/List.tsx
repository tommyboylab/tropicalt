import React from 'react';
import Recents from '../Home/Recents/Recents';
import s from './List.module.scss';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Load from '../Other/Load/Load';
import Err from '../Other/Error/Error';

type Videos = {
  id: string;
  slug: string;
  cover: { img: { url: string }; placeholder: { url: string } };
  title: string;
  date: string;
  user: { username: string };
  tag: { id: string; tag: string };
};

const getVideo = gql`
  query getAlbums {
    videos(sort: "date:desc", where: { published: true }) {
      id
      slug
      title
      cover {
        img {
          id
          url
        }
        placeholder {
          id
          url
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

const Videos = (): JSX.Element => {
  const { data, error, loading } = useQuery(getVideo);

  if (loading && !data) return <Load />;
  if (error) return <Err />;

  const videos = data?.videos as Videos[];

  return (
    <div className={s.videoList}>
      {videos.map((video) => (
        <Recents
          key={video.id}
          type='vlog'
          id={video.id}
          slug={video.slug}
          cover={video.cover.placeholder.url}
          img={video.cover.img.url}
          title={video.title}
          date={video.date}
          name={video.user.username}
          excerpt={`Location: ${video.tag.tag}`}
        />
      ))}
    </div>
  );
};

Videos.displayName = 'Video Gallery';

export default Videos;
