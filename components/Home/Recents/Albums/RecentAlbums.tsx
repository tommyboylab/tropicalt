import React from 'react';
import { gql, DocumentType } from '@app/gql';
import Recents from '../Recents';
import s from './RecentAlbums.module.scss';

const RecentAlbumFragment = gql(`
  fragment RecentAlbumFragment on Query {
    albums(limit: 4, sort: "date:desc", where: { published: true }) {
      slug
      id
      cover {
        img {
          id
          url
          hash
        }
      }
      title
      date
      location
      user {
        username
      }
    }
  }
`);

const Albums = ({ albums }: DocumentType<typeof RecentAlbumFragment>): JSX.Element => {
  return (
    <div className={s.recentAlbums}>
      <h2>Recent Albums</h2>
      {albums?.map((album) => (
        <Recents
          id={album?.id}
          type='albums'
          key={album?.id}
          slug={String(album?.slug)}
          cover={`/uploads/${String(album?.cover?.img?.hash)}-thumb.svg`}
          img={String(album?.cover?.img?.url)}
          title={String(album?.title)}
          date={String(album?.date)}
          name={String(album?.user?.username)}
          excerpt={`Location: ${String(album?.location)}`}
        />
      ))}
    </div>
  );
};

Albums.displayName = 'Recent Albums';

Albums.fragments = {
  RecentAlbumFragment: RecentAlbumFragment,
};

export default Albums;
