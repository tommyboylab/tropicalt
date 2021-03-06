import React from 'react';
import Videos from '../components/Video/List';
import Nav from '../components/Nav/Nav';
import Meta from '../components/Other/Meta/Meta';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Load from '../components/Other/Load/Load';
import Err from '../components/Other/Error/Error';

const getVlogQuery = gql`
  query getImageBanner {
    ...NavigationFragment
    ...VideoFragment
  }
  ${Nav.fragments.NavigationFragment}
  ${Videos.fragments.VideoFragment}
`;

export default function VlogPage(): JSX.Element {
  const { data, error, loading } = useQuery(getVlogQuery);
  if (loading && !data) return <Load />;
  if (error) return <Err />;
  return (
    <main>
      <Meta title={'TropicalT - Vlog'} excerpt={'Smile for the camera'} url={'/vlog'} />
      <Nav data={data} />
      <Videos data={data} />
    </main>
  );
}
