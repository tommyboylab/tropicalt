import React from 'react';
import Nav, { NavFragment } from '../components/Nav/Nav';
import AboutCards, { AboutCardFragment } from '../components/About/AboutCards';
import s from '../components/Other/Layout/About.module.scss';
import Meta from '../components/Other/Meta/Meta';
import { gql } from 'urql';
import { useQuery } from 'urql';
import Load from '../components/Other/Load/Load';
import Err from '../components/Other/Error/Error';

const getAboutCardQuery = gql`
  query {
    ...NavigationFragment
    ...AboutCardFragment
  }
  ${NavFragment}
  ${AboutCardFragment}
`;

export default function Home(): JSX.Element {
  const [result] = useQuery({ query: getAboutCardQuery });
  const { data, fetching, error } = result;

  // const { data, error, loading } = useQuery(getAboutCardQuery);
  if (fetching && !data) return <Load />;
  if (error) return <Err />;
  return (
    <main className={s.layout}>
      <Meta
        title={'T^T - About Me'}
        excerpt={data?.about.data.attributes.AboutCard?.[0]?.Extension}
        imgUrl={data?.about.data.attributes.AboutCard?.[0]?.Img?.img?.data.attributes.url}
        url={'/about'}
      />
      <Nav nav={data?.navLink.data.attributes.Link} />
      <AboutCards aboutCards={data?.about.data.attributes.AboutCard} />
    </main>
  );
}
