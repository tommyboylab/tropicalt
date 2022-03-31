import React from 'react';
import Recents from '../Home/Recents/Recents';
import s from './Gallery.module.scss';
import { DocumentType, gql } from '@app/gql';

const AlbumFragment = gql(`
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
`);

const Albums = ({ albums }: DocumentType<typeof AlbumFragment>): JSX.Element => {
  return (
    <div className={s.albumList}>
      {albums &&
        albums.map((album) => (
          <Recents
            key={album?.id}
            type='albums'
            id={album?.id}
            slug={String(album?.slug)}
            cover={`/uploads/${String(album?.cover?.img?.hash)}-thumb.svg`}
            img={album?.cover?.img?.url}
            title={album?.title}
            date={String(album?.date)}
            name={album?.user?.username}
            excerpt={`Location: ${String(album?.location)}`}
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
