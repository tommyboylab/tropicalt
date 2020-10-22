import React from 'react';
import gql from 'graphql-tag';
import Post from '../Recents';
import s from './RecentPosts.module.scss';

type Article = [
  {
    id: string;
    slug: string;
    cover: { img: { id: string; url: string; hash: string } };
    title: string;
    date: string;
    user: { username: string };
    excerpt: string;
  }
];

const RecentArticlesFragment = gql`
  fragment RecentArticlesFragment on Query {
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

const Articles = (articles: any): JSX.Element => {
  articles = articles.data?.articles as Article[];

  return (
    <div className={s.recentArticles}>
      <h2>Recent Posts</h2>
      {articles.map((article: any) => (
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

Articles.fragments = {
  RecentArticlesFragment: RecentArticlesFragment,
};
export default Articles;
