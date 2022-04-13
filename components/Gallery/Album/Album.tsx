import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { gql } from 'urql';
import axios from 'redaxios';
import MainWindow from './MainWindow/MainWindow';
import Sidebar from './Sidebar/Sidebar';
import Meta from '../../Other/Meta/Meta';
import Load from '../../Other/Load/Load';
import Err from '../../Other/Error/Error';
import { useQuery } from 'urql';

const getAlbum = gql`
  query getAlbums($slug: String!) {
    albums(filters: { Slug: { eq: $slug } }) {
      data {
        attributes {
          Name
          Tagline
          Slug
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

export type Photo = {
  original: string;
  thumbnail: string;
};

const Album = (): JSX.Element => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [activePhoto, setActivePhoto] = useState<Photo>();
  const [photos, setPhotos] = useState<Photo[]>([]);

  const [result] = useQuery({ query: getAlbum, variables: { slug: router.query.slug } });
  const { data, fetching, error } = result;

  useEffect(() => {
    const albumId = data?.albums.data[0].attributes.GPhotoId;
    const url = `https://tropicalt-google-photos.glitch.me/${albumId}`;
    if (albumId) {
      axios
        .get(url)
        .then((res) => {
          return setPhotos(
            res.data?.map((url: string) => ({
              original: `${url}=w2048`,
              thumbnail: `${url}=w400`,
            }))
          );
        })
        .catch((err) => {
          console.log(err);
        });
      return;
    }
    setIsLoading(false);
  }, [data?.albums.data]);

  if (isLoading || fetching) return <Load />;
  if (error || (!isLoading && !photos.length)) return <Err />;

  const albumData = data?.albums.data[0].attributes;

  return (
    <>
      <Meta
        title={albumData?.Name}
        excerpt={albumData?.Tagline}
        imgUrl={albumData?.Cover.img.data.attributes.url}
        url={`/albums/${String(router.query.slug)}`}
      />
      <Sidebar
        title={albumData?.Name}
        excerpt={albumData?.Tagline}
        photos={photos}
        activeItemID={activePhoto}
        setActiveItem={setActivePhoto}
      />
      <MainWindow src={String(activePhoto?.original)} />
    </>
  );
};
export default Album;
