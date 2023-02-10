import React from 'react';
import { DocumentType, gql } from '@app/gql';
import Recents from '../Recents';
import s from './RecentAlbums.module.scss';

export const RecentAlbumsFragment = gql(`
  fragment RecentAlbumsFragment on Query {
      albums(sort: "Date:desc", pagination: { start: 0, limit: 4 }) {
    data {
      id
      attributes {
        Slug
        Name
        Tagline
        Date
        Location
        Photographer {
          data {
            attributes {
              username
            }
          }
        }
        Cover {
          img {
            data {
              attributes {
                url
                hash
              }
            }
          }
        }
      }
    }
  }
  }
`);

const Albums = ({ albums }: DocumentType<typeof RecentAlbumsFragment>): JSX.Element => {
  const albumData = albums?.data;

  return (
    <div className={s.recentAlbums}>
      <h2>Recent Albums</h2>
      {albumData?.map((album) => (
        <Recents
          id={String(album?.id)}
          type='albums'
          key={album?.id}
          slug={String(album?.attributes?.Slug)}
          cover={`/uploads/sqip_${String(album?.attributes?.Cover?.img?.data?.attributes?.hash)}.svg`}
          img={String(album?.attributes?.Cover?.img?.data?.attributes?.url)}
          title={String(album?.attributes?.Name)}
          date={String(album?.attributes?.Date)}
          name={String(album?.attributes?.Photographer?.data?.attributes?.username)}
          excerpt={`Location: ${String(album?.attributes?.Location)}`}
        />
      ))}
    </div>
  );
};

Albums.displayName = 'Recent Albums';

Albums.fragments = {
  RecentAlbumsFragment,
};

export default Albums;
