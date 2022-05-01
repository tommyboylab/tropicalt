import React from 'react';
import { gql, DocumentType } from '@app/gql';
import Post from '../Home/Recents/Recents';
import s from './List.module.scss';

export const ArticleListFragment = gql(`
  fragment ArticleListFragment on Query {
    list: articles(sort: "Published:desc", pagination: { start: $start, limit: 7 }) {
      data {
        id
        attributes {
          Slug
          Title
          Tagline
          Published
          Author {
            data {
              attributes {
                username
              }
            }
          }
          Cover {
            img {
              data {
                attributes {
                  url
                  hash
                }
              }
            }
          }
        }
      }
    }
  }
`);

const Articles = ({ list }: DocumentType<typeof ArticleListFragment>): JSX.Element => {
  const listData = list?.data;

  return (
    <div className={s.postList}>
      {listData &&
        listData.map((article) => (
          <Post
            id={String(article?.id)}
            type='blog'
            slug={String(article?.attributes?.Slug)}
            key={article?.id}
            cover={`/uploads/sqip_${String(article?.attributes?.Cover?.img?.data?.attributes?.hash)}.svg`}
            img={article?.attributes?.Cover?.img?.data?.attributes?.url}
            title={article?.attributes?.Title}
            date={String(article?.attributes?.Published)}
            name={article?.attributes?.Author?.data?.attributes?.username}
            excerpt={String(article?.attributes?.Tagline)}
          />
        ))}
    </div>
  );
};

Articles.displayName = 'ArticleList';

Articles.fragments = {
  ArticleListFragment,
};

export default Articles;
