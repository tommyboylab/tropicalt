import React from 'react';
import gql from 'graphql-tag';
import Post from '../Home/Recents/Recents';
import s from './List.module.scss';
type ArticleList = {
  id: string;
  slug: string;
  cover: { img: { id: string; url: string; hash: string } };
  title: string;
  date: string;
  user: { username: string };
  excerpt: string;
};

const ArticleListFragment = gql`
  fragment ArticleListFragment on Query {
    list: articles(limit: 7, start: $start, sort: "date:desc", where: { published: true }) {
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
      date
      excerpt
      user {
        username
      }
    }
  }
`;

const Articles = (articles: any): JSX.Element => {
  articles = articles.data?.list as ArticleList[];

  return (
    <div className={s.postList}>
      {articles &&
        articles.map((article: any) => (
          <Post
            id={article.id}
            type='blog'
            slug={article.slug}
            key={article.id}
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

Articles.displayName = 'ArticleList';

Articles.fragments = {
  ArticleListFragment: ArticleListFragment,
};

export default Articles;
