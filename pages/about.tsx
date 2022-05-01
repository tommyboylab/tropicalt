import React from 'react';
import Nav from '../components/Nav/Nav';
import AboutCards from '../components/About/AboutCards';
import s from '../components/Other/Layout/About.module.scss';
import Meta from '../components/Other/Meta/Meta';
import { gql } from '@app/gql';
import { useQuery } from 'urql';
import Load from '../components/Other/Load/Load';
import Err from '../components/Other/Error/Error';

const GetAboutCardQuery = gql(`
  query GetAboutPage {
    ...NavigationFragment
    ...AboutCardFragment
  }
`);

export default function About(): JSX.Element {
  const [result] = useQuery({ query: GetAboutCardQuery });
  const { data, fetching, error } = result;

  if (fetching && !data) return <Load />;
  if (error) return <Err />;

  return (
    <main className={s.layout}>
      <Meta
        title={'T^T - About Me'}
        excerpt={data?.about?.data?.attributes?.AboutCard?.[0]?.Extension}
        imgUrl={data?.about?.data?.attributes?.AboutCard?.[0]?.Img?.[0]?.img?.data?.attributes?.url}
        url={'/about'}
      />
      <Nav navLink={data?.navLink} />
      <AboutCards about={data?.about} />
    </main>
  );
}
