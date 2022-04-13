import React from 'react';
import Gallery, { AlbumFragment } from '../components/Gallery/Gallery';
import Nav, { NavFragment } from '../components/Nav/Nav';
import Meta from '../components/Other/Meta/Meta';
import { gql } from 'urql';
import { useQuery } from 'urql';
import Load from '../components/Other/Load/Load';
import Err from '../components/Other/Error/Error';

const getGalleryQuery = gql`
  query getAlbumPage {
    ...NavigationFragment
    ...AlbumFragment
  }
  ${NavFragment}
  ${AlbumFragment}
`;
export default function Albums(): JSX.Element {
  const [result] = useQuery({ query: getGalleryQuery });
  const { data, fetching, error } = result;

  if (fetching && !data) return <Load />;
  if (error) return <Err />;
  return (
    <main>
      <Meta
        title={'T^T - Gallery'}
        excerpt={'My life through pictures '}
        imgUrl={data?.albums?.data[0].attributes?.Cover?.img?.data.attributes.url}
        url={'/albums'}
      />
      <Nav nav={data?.navLink.data.attributes.Link} />
      <Gallery albums={data?.albums.data} />
    </main>
  );
}
