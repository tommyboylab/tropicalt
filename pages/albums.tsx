import React from 'react';
import Gallery from '../components/Gallery/Gallery';
import Nav from '../components/Nav/Nav';
import Meta from '../components/Other/Meta/Meta';
import { gql } from '@app/gql';
import { useQuery } from 'urql';
import Load from '../components/Other/Load/Load';
import Err from '../components/Other/Error/Error';

const GetGalleryQuery = gql(`
  query GetAlbumPage {
    ...NavigationFragment
    ...AlbumFragment
  }
`);
export default function Albums(): JSX.Element {
  const [result] = useQuery({ query: GetGalleryQuery });
  const { data, fetching, error } = result;

  if (fetching && !data) return <Load />;
  if (error) return <Err />;
  return (
    <main>
      <Meta
        title={'T^T - Gallery'}
        excerpt={'My life through pictures '}
        imgUrl={data?.albums?.data?.[0]?.attributes?.Cover?.img?.data?.attributes?.url}
        url={'/albums'}
      />
      <Nav navLink={data?.navLink} />
      <Gallery albums={data?.albums} />
    </main>
  );
}
