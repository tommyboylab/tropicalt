import React from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Nav/Footer';
import RecentPosts from '../components/Home/Recents/Posts/RecentPosts';
import RecentAlbums from '../components/Home/Recents/Albums/RecentAlbums';
import ImgB from '../components/Home/Hero/Hero';
import Bio from '../components/Home/Bio/Bio';
import s from '../components/Other/Layout/Home.module.scss';
import Meta from '../components/Other/Meta/Meta';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Load from '../components/Other/Load/Load';
import Err from '../components/Other/Error/Error';

const getHomepageQuery = gql`
  query getImageBanner {
    ...NavigationFragment
    ...ImageBannerFragment
    ...BiographyFragment
    ...RecentArticlesFragment
    ...RecentAlbumFragment
  }
  ${Nav.fragments.NavigationFragment}
  ${ImgB.fragments.HeroesFragment}
  ${Bio.fragments.BiographyFragment}
  ${RecentAlbums.fragments.RecentAlbumFragment}
  ${RecentPosts.fragments.RecentArticlesFragment}
`;

export default function Home(): JSX.Element {
  const { data, error, loading } = useQuery(getHomepageQuery);
  if (loading && !data) return <Load />;
  if (error) return <Err />;
  return (
    <main className={s.layout}>
      <Meta
        title={'T^T - TropicalT'}
        excerpt={'The homepage of Thomas Fiala'}
        imgUrl={data.avatar.avatar.img.url}
        url={'/'}
      />
      <Nav data={data} />
      <ImgB data={data} />
      <Bio data={data} />
      <RecentPosts data={data} />
      <RecentAlbums data={data} />
      <Footer data={data} />
    </main>
  );
}
