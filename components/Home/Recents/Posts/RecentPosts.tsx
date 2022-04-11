import React from 'react';
import { gql } from 'urql';
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

const Articles = ({ articles }): JSX.Element => {
  return (
    <div className={s.recentArticles}>
      <h2>Recent Posts</h2>
      {articles?.map((article) => (
        <Post
          id={article?.id}
          type='blog'
          key={article?.id}
          slug={String(article?.attributes.slug)}
          cover={`/uploads/sqip_${String(article?.attributes.Cover?.img?.data.attributes.hash)}.svg`}
          img={String(article?.attributes.Cover?.img?.data.attributes.url)}
          title={String(article?.attributes.Title)}
          date={String(article?.attributes.Published)}
          name={String(article?.attributes.Author.data.attributes.username)}
          excerpt={String(article?.attributes.Tagline)}
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
