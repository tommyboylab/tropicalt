import React from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Nav/Footer';
import RecentPosts from '../components/Home/Recents/Posts/RecentPosts';
import RecentAlbums from '../components/Home/Recents/Albums/RecentAlbums';
import ImgB from '../components/Home/Hero/Hero';
import Bio from '../components/Home/Bio/Bio';
import s from '../components/Other/Layout/Home.module.scss';
import Meta from '../components/Other/Meta/Meta';
import { gql } from '@app/gql';
import { useQuery } from '@apollo/client';
import Load from '../components/Other/Load/Load';
import Err from '../components/Other/Error/Error';
import { initializeApollo, addApolloState } from '../apollo/apolloClient';

const getHomepageQuery = gql(`  
    query getHomePage {
    ...NavigationFragment
    ...ImageBannerFragment
    ...BiographyFragment
    ...RecentArticlesFragment
    ...RecentAlbumFragment
  }`);

export default function Home(): JSX.Element {
  const { data, error, loading } = useQuery(getHomepageQuery);

  if (loading && !data) return <Load />;
  if (error) return <Err />;

  return (
    <main className={s.layout}>
      <Meta
        title={'T^T - TropicalT'}
        excerpt={'The homepage of Thomas Fiala'}
        imgUrl={data?.avatar?.avatar?.img?.url}
        url={'/'}
      />
      <Nav nav={data?.nav} />
      <ImgB hero={data?.hero} />
      <Bio avatar={data?.avatar} />
      <RecentPosts articles={data?.articles} />
      <RecentAlbums albums={data?.albums} />
      <Footer nav={data?.nav} />
    </main>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: getHomepageQuery,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}
