import React from 'react';
import Gallery from '../components/Gallery/Gallery';
import Nav from '../components/Nav/Nav';
import Meta from '../components/Other/Meta/Meta';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Load from '../components/Other/Load/Load';
import Err from '../components/Other/Error/Error';

const getGalleryQuery = gql`
  query getImageBanner {
    ...NavigationFragment
    ...AlbumFragment
  }
  ${Nav.fragments.NavigationFragment}
  ${Gallery.fragments.AlbumFragment}
`;

export default function Albums(): JSX.Element {
  const { data, error, loading } = useQuery(getGalleryQuery);
  if (loading && !data) return <Load />;
  if (error) return <Err />;
  return (
    <main>
      <Meta
        title={'T^T - Gallery'}
        excerpt={'My life through pictures '}
        imgUrl={data.albums[0].cover.img.url}
        url={'/albums'}
      />
      <Nav data={data} />
      <Gallery data={data} />
    </main>
  );
}
