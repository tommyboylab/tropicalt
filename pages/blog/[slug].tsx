import React from 'react';
import { gql } from '@app/gql';
import { useRouter } from 'next/router';
// import { useQuery } from '@apollo/client';
import { useQuery } from 'urql';
import Load from '../../components/Other/Load/Load';
import Err from '../../components/Other/Error/Error';
import Meta from '../../components/Other/Meta/Meta';
import s from '../../components/Other/Layout/Post.module.scss';
import Nav from '../../components/Nav/Nav';
import MobileHeader from '../../components/Blog/Post/MobileHeader/MobileHeader';
import CoverImg from '../../components/Blog/Post/CoverImg/CoverImg';
import TagList from '../../components/Blog/Post/Tags/TagList';
// import Tags from '../../components/Blog/Post/Tags/Tag/Tags';
import Body from '../../components/Blog/Post/Body/Body';
import Sidebar from '../../components/Blog/Post/Sidebar/Sidebar';
import Footer from '../../components/Nav/Footer';
import CommentList from '../../components/Blog/Post/Comments/CommentList/CommentList';
import { isSignedIn } from '../../apollo/apolloClient';
import Modal from '../../components/Other/SocialAuth/Modal';

const getArticle = gql(`
  query Article($slug: String) {
    ...NavigationFragment
    articles(where: { slug: $slug }) {
      id
      slug
      cover {
        img {
          id
          url
          hash
        }
      }
      title
      excerpt
      content
      tag {
        tag
      }
    }
    ...SidebarArticlesFragment
  }`);

const Post = (): JSX.Element => {
  const router = useRouter();
  const slug = router.query.slug;
  const authenticated = isSignedIn();

  const [result] = useQuery({ query: getArticle, variables: { slug: String(slug) } });
  const { data, fetching, error } = result;

  // const { data, error, loading } = useQuery(getArticle, { variables: { slug: String(slug) } });

  if (fetching && !data) return <Load />;
  if (error) return <Err />;

  return (
    <>
      {data?.articles?.map((article) => (
        <>
          <Meta
            title={article?.title}
            excerpt={article?.excerpt}
            imgUrl={article?.cover?.img?.url}
            url={`/blog/${String(slug)}`}
          />
          <main className={s.layout} key={article?.id}>
            <Nav nav={data.nav} />
            <MobileHeader />
            <CoverImg
              title={String(article?.title)}
              url={String(article?.cover?.img?.url)}
              placeholder={`/uploads/${String(article?.cover?.img?.hash)}-thumb.svg`}
              alt={String(article?.title)}
            />
            <TagList>{article?.tag?.map((tag) => tag?.tag)}</TagList>
            <Body content={String(article?.content)} />
            <Sidebar sidebar={data.sidebar} />
            {authenticated ? <CommentList slug={String(article?.slug)} articleID={String(article?.id)} /> : <Modal />}
            <Footer nav={data.nav} />
          </main>
        </>
      ))}
    </>
  );
};

Post.displayName = 'Post';

export default Post;
