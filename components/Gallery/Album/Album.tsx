import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { gql } from '@app/gql';
// import { useQuery } from '@apollo/client';
import axios, { Response } from 'redaxios';
import MainWindow from './MainWindow/MainWindow';
import Sidebar from './Sidebar/Sidebar';
import Meta from '../../Other/Meta/Meta';
import Load from '../../Other/Load/Load';
import Err from '../../Other/Error/Error';
import { useQuery } from 'urql';

const getAlbum = gql(`
  query getAlbums($slug: [String!]) {
    albums(where: { slug: $slug }) {
      id
      title
      slug
      cover {
        img {
          id
          url
        }
      }
      excerpt
      albumID
    }
  }
`);

export type Photo = {
  original: string;
  thumbnail: string;
};

const Album = (): JSX.Element => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [activePhoto, setActivePhoto] = useState<Photo>();
  const [photos, setPhotos] = useState<Photo[]>([]);

  const [result] = useQuery({ query: getAlbum, variables: { slug: router.query.slug }, on });
  const { data, fetching, error } = result;

  useEffect(() => {
    const albumId = data?.albums?.[0]?.albumID;
    if (albumId) {
      axios
        .get(`https://tropicalt-google-photos.glitch.me/${String(albumId)}`)
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
  }, [data?.albums]);

  // const { data, error, loading } = useQuery(getAlbum, {
  //   variables: { slug: router.query.slug },
  //   async onCompleted(data) {
  //     const albumId = data?.albums?.[0]?.albumID;
  //     if (albumId) {
  //       const { data }: Response<Array<string>> = await axios.get(
  //         `https://tropicalt-google-photos.glitch.me/${albumId}`
  //       );
  //       setPhotos(
  //         data?.map((url: string) => ({
  //           original: `${url}=w2048`,
  //           thumbnail: `${url}=w400`,
  //         }))
  //       );
  //     }
  //     setIsLoading(false);
  //   },
  // });

  if (isLoading || fetching) return <Load />;
  if (error || (!isLoading && !photos.length)) return <Err />;

  const albums = data?.albums;

  return (
    <>
      <Meta
        title={albums?.[0]?.title}
        excerpt={albums?.[0]?.excerpt}
        imgUrl={albums?.[0]?.cover?.img?.url}
        url={`/albums/${String(router.query.slug)}`}
      />
      <Sidebar
        title={albums?.[0]?.title}
        excerpt={albums?.[0]?.excerpt}
        photos={photos}
        activeItemID={activePhoto}
        setActiveItem={setActivePhoto}
      />
      <MainWindow src={String(activePhoto?.original)} />
    </>
  );
};
export default Album;
