import React from 'react';
import Footer from '../components/Nav/Footer';
import RecentPosts from '../components/Home/Recents/Posts/RecentPosts';
import RecentAlbums from '../components/Home/Recents/Albums/RecentAlbums';
import Hero from '../components/Home/Hero/Hero';
import Bio from '../components/Home/Bio/Bio';
import s from '../components/Other/Layout/Home.module.scss';
import Meta from '../components/Other/Meta/Meta';
import Load from '../components/Other/Load/Load';
import Err from '../components/Other/Error/Error';

import { useQuery } from 'urql';
import { gql } from '@app/gql';
import { client, ssrCacheExchange } from '../gql/urqlClient';
import NewNav from '../components/Nav/NewNav';

const GetHomepageQuery = gql(`
  query GetHomePage {
    ...NavigationFragment
    ...HeroFragment
    ...BiographyFragment
    ...RecentArticlesFragment
    ...RecentAlbumsFragment
  }
`);

export default function Home(): JSX.Element {
  const [result] = useQuery({ query: GetHomepageQuery });

  const { data, error, fetching } = result;

  if (fetching && !data) return <Load />;
  if (error) return <Err />;

  return (
    <main className={s.layout}>
      <Meta
        title={'T^T - TropicalT'}
        excerpt={'The homepage of Thomas Fiala'}
        imgUrl={data?.usersPermissionsUser?.data?.attributes?.Img?.img?.data?.attributes?.url}
        url={'/'}
      />
      <NewNav navLink={data?.navLink} />
      <Hero home={data?.home} />
      <Bio usersPermissionsUser={data?.usersPermissionsUser} />
      <RecentPosts articles={data?.articles} />
      <RecentAlbums albums={data?.albums} />
      <Footer />
    </main>
  );
}

export async function getStaticProps() {
  await client.query(GetHomepageQuery).toPromise();
  return { props: { urqlState: ssrCacheExchange.extractData() }, revalidate: 1200 };
}
