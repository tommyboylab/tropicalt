import React from 'react';
import { gql, DocumentType } from '@app/gql';
import Post from '../../../Home/Recents/Recents';
import AboutMe from '../About/AboutMe';
import s from './Sidebar.module.scss';
import {motion} from "framer-motion";

export const SidebarArticlesFragment = gql(`
 fragment SidebarArticlesFragment on Query {
  sidebar: articles(sort: "Published:desc", pagination: { limit: 4 }) {
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
              avatar {
                img {
                  data {
                    id
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
        Cover {
          img {
            data {
              id
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

const PostSidebar = ({ sidebar }: DocumentType<typeof SidebarArticlesFragment>): JSX.Element => {
  const sidebarData = sidebar?.data;

  return (
    <motion.div className={s.blogSidebar}>
      <motion.h2>ˇˇˇ</motion.h2>
      <AboutMe img={sidebar?.data?.[0]?.attributes?.Author?.data?.attributes?.avatar?.img} />
        {sidebarData &&
        sidebarData.map((article) => (
                <Post
            sidebar= {true}
            id={String(article?.id)}
            type='blog'
            key={article?.id}
            slug={String(article?.attributes?.Slug)}
            cover={`/uploads/sqip_${String(article?.attributes?.Cover?.img?.data?.attributes?.hash)}.svg`}
            img={article?.attributes?.Cover?.img?.data?.attributes?.url}
            title={article?.attributes?.Title}
            date={String(article?.attributes?.Published)}
            name={article?.attributes?.Author?.data?.attributes?.username}
            excerpt={String(article?.attributes?.Tagline)}
          />
        ))}
    </motion.div>
  );
};

PostSidebar.displayName = 'Sidebar';

PostSidebar.fragments = {
  SidebarArticlesFragment,
};

export default PostSidebar;
