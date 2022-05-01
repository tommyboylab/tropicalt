import React, { useCallback, useState } from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Nav/Footer';
import Header from '../components/Blog/Header/Header';
import Sidebar from '../components/Blog/Post/Sidebar/Sidebar';
import List from '../components/Blog/List';
import s from '../components/Other/Layout/Blog.module.scss';
import Meta from '../components/Other/Meta/Meta';
import { gql } from '@app/gql';
import { useQuery } from 'urql';
import Load from '../components/Other/Load/Load';
import Err from '../components/Other/Error/Error';

const GetArticlesQuery = gql(`
  query GetArticles($start: Int!) {
    ...NavigationFragment
    ...ArticleListFragment
    ...SidebarArticlesFragment
  }
`);

export default function Blog(): JSX.Element {
  const [nextPosts, setNextPosts] = useState(0);
  const prev = useCallback((): void => {
    setNextPosts(nextPosts - 7), window.scrollTo(0, 0);
  }, [nextPosts]);
  const next = useCallback((): void => {
    setNextPosts(nextPosts + 7), window.scrollTo(0, 0);
  }, [nextPosts]);

  const [result] = useQuery({ query: GetArticlesQuery, variables: { start: nextPosts } });
  const { data, fetching, error } = result;

  if (fetching && !data) return <Load />;
  if (error) return <Err />;

  return (
    <main className={s.layout}>
      <Meta
        title={'T^T - Blog'}
        excerpt={'The blog that involves me, drinking a pot of tea and sharing some thoughts.'}
        imgUrl={data?.list?.data?.[0]?.attributes?.Cover?.img?.data?.attributes?.url}
        url={'/blog'}
      />
      <Nav navLink={data?.navLink} />
      <Header />
      <List list={data?.list} />
      <div className={s.postControls}>
        <button onClick={prev} disabled={nextPosts === 0}>
          Prev
        </button>
        <button onClick={next} disabled={data?.list?.data ? data?.list?.data?.length < 7 : true}>
          Next
        </button>
      </div>
      <Sidebar sidebar={data?.sidebar} />
      <Footer navLink={data?.navLink} />
    </main>
  );
}
