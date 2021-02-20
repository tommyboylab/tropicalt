import React from 'react';
import Nav from '../components/Nav/Nav';
import AboutCards from '../components/About/AboutCards';
import s from '../components/Other/Layout/About.module.scss';
import Meta from '../components/Other/Meta/Meta';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Load from '../components/Other/Load/Load';
import Err from '../components/Other/Error/Error';

const getAboutCardQuery = gql`
  query getAboutCards {
    ...NavigationFragment
    ...AboutCardFragment
  }
  ${Nav.fragments.NavigationFragment}
  ${AboutCards.fragments.AboutCardFragment}
`;

export default function Home(): JSX.Element {
  const { data, error, loading } = useQuery(getAboutCardQuery);
  if (loading && !data) return <Load />;
  if (error) return <Err />;
  return (
    <main className={s.layout}>
      <Meta
        title={'T^T - About Me'}
        excerpt={data.aboutCards[0].excerpt}
        imgUrl={data.aboutCards[0].img.img.url}
        url={'/about'}
      />
      <Nav data={data} />
      <AboutCards data={data} />
    </main>
  );
}
