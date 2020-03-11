import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import Meta from '../../Other/Meta/Meta';
import Nav from '../../Nav/Nav';
import CoverImg from './CoverImg/CoverImg';
import Tags from './Tags/Tags';
import Body from './Body/Body';
import Sidebar from './Sidebar/Sidebar';
import Footer from '../../Nav/Footer';
import Load from '../../Other/Load/Load';
import Err from '../../Other/Error/Error';
import s from '../../Other/Layout/Post.module.scss';
import MobileHeader from './MobileHeader/MobileHeader';

type Article = {
  id: string;
  title: string;
  cover: { img: { url: string }; placeholder: { url: string } };
  tag: [{ tag: { id: string; tag: string } }];
  content: string;
  excerpt: string;
};

const getArticle = gql`
  query Article($slug: String) {
    articles(where: { slug: $slug }) {
      id
      slug
      cover {
        img {
          id
          url
        }
        placeholder {
          id
          url
        }
      }
      title
      excerpt
      content
      tag {
        tag
      }
    }
  }
`;

const Post = (): JSX.Element => {
  const router = useRouter();
  const slug = router.query.slug;

  const { data, error, loading } = useQuery(getArticle, { variables: { slug } });

  if (loading && !data) return <Load />;
  if (error) return <Err />;

  const articles = data?.articles as Article[];

  return (
    <>
      {articles.map((article) => (
        <>
          <Meta
            type={'post'}
            title={article.title}
            excerpt={article.excerpt}
            imgUrl={article.cover.img.url}
            slug={`${slug}`}
          />
          <main className={s.layout} key={article.id}>
            <Nav />
            <MobileHeader />
            <CoverImg
              title={article.title}
              url={article.cover.img.url}
              placeholder={article.cover.placeholder.url}
              alt={article.title}
            />
            {article.tag.map(({ tag: tag }) => (
              <Tags key={tag.id} tag={tag} />
            ))}
            <Body content={article.content} />
            <Sidebar />
            <Footer />
          </main>
        </>
      ))}
    </>
  );
};

Post.displayName = 'Post';

export default Post;
