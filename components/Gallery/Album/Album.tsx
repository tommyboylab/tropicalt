import React, { useState } from 'react';
import { useRouter } from 'next/router';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import axios from 'axios';
import MainWindow from './MainWindow/MainWindow';
import Sidebar from './Sidebar/Sidebar';
import Meta from '../../Other/Meta/Meta';
import Load from '../../Other/Load/Load';
import Err from '../../Other/Error/Error';

const getAlbum = gql`
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
`;

type Albums = {
  title: string;
  excerpt: string;
  cover: { img: { id: string; url: string; hash: string } };
  albumID: number;
};

type Photo = {
  original: string;
  thumbnail: string;
};

const Album = (): JSX.Element => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [activePhoto, setActivePhoto] = useState<Photo>();
  const [photos, setPhotos] = useState<Photo[]>([]);

  const { data, error, loading } = useQuery(getAlbum, {
    variables: { slug: router.query.slug },
    onCompleted: async (d) => {
      const albumId = d?.albums[0].albumID;
      if (albumId) {
        const photosArray = await axios.get(`https://tropicalt-google-photos.glitch.me/${albumId}`);
        setPhotos(
          photosArray?.data?.map((url: string) => ({
            original: `${url}=w2048`,
            thumbnail: `${url}=w400`,
          }))
        );
      }
      setIsLoading(false);
    },
  });

  if (isLoading || loading) return <Load />;
  if (error || (!isLoading && !photos.length)) return <Err />;

  const albums = data?.albums as Albums[];

  return (
    <>
      <Meta
        type={'albums'}
        title={albums[0].title}
        excerpt={albums[0].excerpt}
        imgUrl={albums[0].cover.img.url}
        slug={`${router.query.slug}`}
      />
      <Sidebar
        title={albums[0].title}
        excerpt={albums[0].excerpt}
        photos={photos}
        activeItemID={activePhoto}
        setActiveItem={setActivePhoto}
      />
      <MainWindow src={activePhoto} />
    </>
  );
};
export default Album;
