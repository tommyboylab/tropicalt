import React from 'react';
import { gql } from 'urql';
import Post from '../../../Home/Recents/Recents';
import AboutMe from '../About/AboutMe';
import s from './Sidebar.module.scss';

export const SidebarArticlesFragment = gql`
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
                Img {
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

const PostSidebar = ({ sidebar }): JSX.Element => {
  return (
    <div className={s.blogSidebar}>
      <h2>ˇˇˇ</h2>
      <AboutMe avatar={sidebar[0]?.attributes.Author.data.attributes} />
      {sidebar.map((article) => (
        <Post
          id={article?.id}
          type='blog'
          key={article?.id}
          slug={String(article?.attributes.Slug)}
          cover={`/uploads/sqip_${String(article?.attributes.Cover?.img?.data.attributes.hash)}.svg`}
          img={article?.attributes.Cover?.img?.data.attributes.url}
          title={article?.attributes.Title}
          date={String(article?.attributes.Published)}
          name={article?.attributes.Author?.data.attributes.username}
          excerpt={article?.attributes.Tagline}
        />
      ))}
    </div>
  );
};

PostSidebar.displayName = 'Sidebar';

PostSidebar.fragments = {
  SidebarArticlesFragment: SidebarArticlesFragment,
};

export default PostSidebar;
