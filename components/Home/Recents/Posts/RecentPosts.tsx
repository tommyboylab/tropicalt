import React from 'react';
import { gql, DocumentType } from '@app/gql';
import Post from '../Recents';
import s from './RecentPosts.module.scss';

const RecentArticlesFragment = gql(`
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
`);

const Articles = ({ articles }: DocumentType<typeof RecentArticlesFragment>): JSX.Element => {
  return (
    <div className={s.recentArticles}>
      <h2>Recent Posts</h2>
      {articles?.map((article) => (
        <Post
          id={article?.id}
          type='blog'
          key={article?.id}
          slug={String(article?.slug)}
          cover={`/uploads/${String(article?.cover?.img?.hash)}-thumb.svg`}
          img={String(article?.cover?.img?.url)}
          title={String(article?.title)}
          date={String(article?.date)}
          name={String(article?.user?.username)}
          excerpt={String(article?.excerpt)}
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
