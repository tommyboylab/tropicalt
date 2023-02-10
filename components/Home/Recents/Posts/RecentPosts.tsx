import React from 'react';
import { DocumentType, gql } from '@app/gql';
import Post from '../Recents';
import s from './RecentPosts.module.scss';

export const RecentArticlesFragment = gql(`
  fragment RecentArticlesFragment on Query {
 articles(sort:"Published:desc", pagination: { start: 0, limit: 3}){
    data {
      id
      attributes {
        Slug
        Title
        Tagline
        Published
        Author{
          data{
            attributes{
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

const Articles = ({ articles }: DocumentType<typeof RecentArticlesFragment>): JSX.Element => {
  const articleData = articles?.data;

  return (
    <div className={s.recentArticles}>
      <h2>Recent Posts</h2>
      {articleData?.map((article) => (
        <Post
          id={String(article?.id)}
          type='blog'
          key={article?.id}
          slug={String(article?.attributes?.Slug)}
          cover={`/uploads/sqip_${String(article?.attributes?.Cover?.img?.data?.attributes?.hash)}.svg`}
          img={String(article?.attributes?.Cover?.img?.data?.attributes?.url)}
          title={String(article?.attributes?.Title)}
          date={String(article?.attributes?.Published)}
          name={String(article?.attributes?.Author?.data?.attributes?.username)}
          excerpt={String(article?.attributes?.Tagline)}
        />
      ))}
    </div>
  );
};

Articles.displayName = 'Recent Articles';

Articles.fragments = {
  RecentArticlesFragment,
};

export default Articles;
