import React from 'react';
import { gql } from 'urql';
import Post from '../Home/Recents/Recents';
import s from './List.module.scss';

export const ArticleListFragment = gql`
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
`;

const Articles = ({ list }): JSX.Element => {
  return (
    <div className={s.postList}>
      {list.map((article) => (
        <Post
          id={article?.id}
          type='blog'
          slug={String(article?.attributes.Slug)}
          key={article?.id}
          cover={`/uploads/sqip_${String(article?.attributes.Cover?.img?.data.attributes.hash)}.svg`}
          img={article?.attributes.Cover?.img?.data.attributes.url}
          title={article?.attributes.Title}
          date={String(article?.attributes.Published)}
          name={article?.attributes.Author.data.attributes?.username}
          excerpt={article?.attributes.Tagline}
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
