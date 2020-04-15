import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Post from '../Recents';
import Load from '../../../Other/Load/Load';
import Err from '../../../Other/Error/Error';
import s from './RecentPosts.module.scss';

type Article = {
  id: string;
  slug: string;
  cover: { img: { id: string; url: string; hash: string } };
  title: string;
  date: string;
  user: { username: string };
  excerpt: string;
};

const getArticles = gql`
  query getArticles {
    articles(limit: 3, sort: "date:desc", where: { published: true }) {
      id
      slug
      title
      excerpt
      date
      cover {
        img {
          id
          url
          hash
        }
      }

      user {
        username
      }
    }
  }
`;

const Articles = (): JSX.Element => {
  const { data, error, loading } = useQuery(getArticles);

  if (loading && !data) return <Load />;
  if (error) return <Err />;

  const articles = data?.articles as Article[];

  return (
    <div className={s.recentArticles}>
      <h2>Recent Posts</h2>
      {articles.map((article) => (
        <Post
          id={article.id}
          type='blog'
          key={article.id}
          slug={article.slug}
          cover={`/uploads/${article.cover.img.hash}-thumb.svg`}
          img={article.cover.img.url}
          title={article.title}
          date={article.date}
          name={article.user.username}
          excerpt={article.excerpt}
        />
      ))}
    </div>
  );
};

Articles.displayName = 'Recent Articles';

export default Articles;
