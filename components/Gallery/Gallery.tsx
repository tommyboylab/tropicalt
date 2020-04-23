import React from 'react';
import Recents from '../Home/Recents/Recents';
import s from './Gallery.module.scss';
import gql from 'graphql-tag';

type Albums = {
  id: string;
  slug: string;
  cover: { img: { id: string; url: string; hash: string } };
  title: string;
  date: string;
  user: { username: string };
  location: string;
};

const AlbumFragment = gql`
  fragment AlbumFragment on Query {
    albums(sort: "date:desc", where: { published: true }) {
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
      location
      user {
        username
      }
    }
  }
`;

const Albums = (albums: any): JSX.Element => {
  albums = albums.data?.albums as Albums[];

  return (
    <div className={s.albumList}>
      {albums.map((album: Albums) => (
        <Recents
          key={album.id}
          type='albums'
          id={album.id}
          slug={album.slug}
          cover={`/uploads/${album.cover.img.hash}-thumb.svg`}
          img={album.cover.img.url}
          title={album.title}
          date={album.date}
          name={album.user.username}
          excerpt={`Location: ${album.location}`}
        />
      ))}
    </div>
  );
};

Albums.displayName = 'Album Gallery';

Albums.fragments = {
  AlbumFragment: AlbumFragment,
};

export default Albums;
