import React from 'react';
import Nav, { NavFragment } from '../components/Nav/Nav';
import Footer from '../components/Nav/Footer';
import RecentPosts, { RecentArticlesFragment } from '../components/Home/Recents/Posts/RecentPosts';
import RecentAlbums, { RecentAlbumFragment } from '../components/Home/Recents/Albums/RecentAlbums';
import ImgB, { ImgBFragment } from '../components/Home/Hero/Hero';
import Bio, { BioFragment } from '../components/Home/Bio/Bio';
import s from '../components/Other/Layout/Home.module.scss';
import Meta from '../components/Other/Meta/Meta';
import Load from '../components/Other/Load/Load';
import Err from '../components/Other/Error/Error';

import { useQuery, gql } from 'urql';

const getHomepageQuery = gql`
  query {
    ...ImageBannerFragment
    ...NavigationFragment
    ...BiographyFragment
    ...RecentArticlesFragment
    ...RecentAlbumFragment
  }
  ${ImgBFragment}
  ${NavFragment}
  ${BioFragment}
  ${RecentArticlesFragment}
  ${RecentAlbumFragment}
`;

export default function Home(): JSX.Element {
  const [result] = useQuery({ query: getHomepageQuery });

  const { data, error, fetching } = result;
  // const { data, error, loading } = useQuery(getHomepageQuery);

  if (fetching && !data) return <Load />;
  if (error) return <Err />;

  return (
    <main className={s.layout}>
      <Meta
        title={'T^T - TropicalT'}
        excerpt={'The homepage of Thomas Fiala'}
        imgUrl={data.usersPermissionsUser.data.attributes.Img.img.data.attributes.url}
        url={'/'}
      />
      <Nav nav={data?.navLink.data.attributes.Link} />
      <ImgB hero={data?.home.data.attributes.Hero} />
      <Bio avatar={data?.usersPermissionsUser.data.attributes} />
      <RecentPosts articles={data?.articles.data} />
      <RecentAlbums albums={data?.albums.data} />
      <Footer nav={data?.navLink.data.attributes.Link} />
    </main>
  );
}

// export async function getServerSideProps() {
//   // const apolloClient = initializeApollo();
//   //
//   // await apolloClient.query({
//   //   query: getHomepageQuery,
//   // });
//   //
//   // return addApolloState(apolloClient, {
//   //   props: {},
//   // });
// }
