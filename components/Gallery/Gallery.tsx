import React from 'react';
import Recents from '../Home/Recents/Recents';
import s from './Gallery.module.scss';
import { gql } from 'urql';

export const AlbumFragment = gql`
  fragment AlbumFragment on Query {
    albums(sort: "Date:desc") {
      data {
        attributes {
          Name
          Tagline
          Slug
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
          GPhotoId
        }
      }
    }
  }
`;

const Albums = ({ albums }): JSX.Element => {
  return (
    <div className={s.albumList}>
      {albums &&
        albums.map((album) => (
          <Recents
            key={album?.id}
            type='albums'
            id={album?.id}
            slug={String(album?.attributes.Slug)}
            cover={`/uploads/sqip_${String(album?.attributes.Cover?.img?.data.attributes.hash)}.svg`}
            img={album?.attributes.Cover?.img?.data.attributes.url}
            title={album?.attributes.Title}
            date={String(album?.attributes.Date)}
            name={album?.attributes.Photographer.data.attributes.username}
            excerpt={`Location: ${String(album?.attributes.Location)}`}
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
