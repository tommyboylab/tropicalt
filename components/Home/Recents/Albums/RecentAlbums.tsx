import React from 'react';
import { gql } from 'urql';
import Recents from '../Recents';
import s from './RecentAlbums.module.scss';

export const RecentAlbumFragment = gql(`
  fragment RecentAlbumFragment on Query {
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

const Albums = ({ albums }): JSX.Element => {
  return (
    <div className={s.recentAlbums}>
      <h2>Recent Albums</h2>
      {albums?.map((album) => (
        <Recents
          id={album?.id}
          type='albums'
          key={album?.id}
          slug={String(album?.attributes.Slug)}
          cover={`/uploads/sqip_${String(album?.attributes.Cover?.img?.data.attributes.hash)}.svg`}
          img={String(album?.attributes.Cover?.img?.data.attributes.url)}
          title={String(album?.attributes.Name)}
          date={String(album?.attributes.Date)}
          name={String(album?.attributes.Photographer.data.attributes.username)}
          excerpt={`Location: ${String(album?.attributes.Location)}`}
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
