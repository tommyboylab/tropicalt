import React, { useCallback, useState } from 'react';
import Nav, { NavFragment } from '../components/Nav/Nav';
import Footer from '../components/Nav/Footer';
import Header from '../components/Blog/Header/Header';
import Sidebar from '../components/Blog/Post/Sidebar/Sidebar';
import List from '../components/Blog/List';
import s from '../components/Other/Layout/Blog.module.scss';
import Meta from '../components/Other/Meta/Meta';
import { gql } from 'urql';
// import { useQuery } from '@apollo/client';
import { useQuery } from 'urql';
import Load from '../components/Other/Load/Load';
import Err from '../components/Other/Error/Error';

const getArticlesQuery = gql`
  query getArticles($start: Int!) {
    ...NavigationFragment
    ...ArticleListFragment
    ...SidebarArticlesFragment
  }
  ${NavFragment}
  ${}
`;

export default function Blog(): JSX.Element {
  const [nextPosts, setNextPosts] = useState(0);
  const prev = useCallback((): void => {
    setNextPosts(nextPosts - 7), window.scrollTo(0, 0);
  }, [nextPosts]);
  const next = useCallback((): void => {
    setNextPosts(nextPosts + 7), window.scrollTo(0, 0);
  }, [nextPosts]);

  const [result] = useQuery({ query: getArticlesQuery, variables: { start: nextPosts } });
  const { data, fetching, error } = result;
  //   const { data, error, loading } = useQuery(getArticlesQuery, {
  //   variables: {
  //     start: nextPosts,
  //   },
  //   fetchPolicy: 'cache-and-network',
  // });
  if (fetching && !data) return <Load />;
  if (error) return <Err />;

  return (
    <main className={s.layout}>
      <Meta
        title={'T^T - Blog'}
        excerpt={'The blog that involves me, drinking a pot of tea and sharing some thoughts.'}
        imgUrl={data?.list?.[0]?.cover?.img?.url}
        url={'/blog'}
      />
      <Nav nav={data?.nav} />
      <Header />
      <List list={data?.list} />
      <div className={s.postControls}>
        <button onClick={prev} disabled={nextPosts === 0}>
          Prev
        </button>
        <button onClick={next} disabled={data?.list ? data.list.length < 7 : true}>
          Next
        </button>
      </div>
      <Sidebar sidebar={data?.sidebar} />
      <Footer nav={data?.nav} />
    </main>
  );
}
