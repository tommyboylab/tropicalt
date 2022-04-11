import React from 'react';
import { gql } from '@app/gql';
// import { gql } from 'urql';
import Post from '../Home/Recents/Recents';
import s from './List.module.scss';

const ArticleListFragment = gql(`
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
`);

const Articles = ({ list }): JSX.Element => {
  return (
    <div className={s.postList}>
      {list &&
        list.map((article) => (
          <Post
            id={article?.id}
            type='blog'
            slug={String(article?.slug)}
            key={article?.id}
            cover={`/uploads/${String(article?.cover?.img?.hash)}-thumb.svg`}
            img={article?.cover?.img?.url}
            title={article?.title}
            date={String(article?.date)}
            name={article?.user?.username}
            excerpt={article?.excerpt}
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
