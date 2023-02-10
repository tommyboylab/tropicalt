import React, {useRef} from 'react';
import { gql, DocumentType } from '@app/gql';
import Post from '../Home/Recents/Recents';
import s from './List.module.scss';
import {motion} from "framer-motion";

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
  const scrollContainer = useRef(null);

  return (
    <motion.div
        key={'post'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        ref={scrollContainer}
        className={s.postList}
        >
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
    </motion.div
>
  );
};

Articles.displayName = 'ArticleList';

Articles.fragments = {
  ArticleListFragment,
};

export default Articles;
