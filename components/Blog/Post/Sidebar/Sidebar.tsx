import React from 'react';
import { DocumentType, gql } from '@app/gql';
import Post from '../../../Home/Recents/Recents';
import AboutMe from '../About/AboutMe';
import s from './Sidebar.module.scss';

const SidebarArticlesFragment = gql(`
  fragment SidebarArticlesFragment on Query {
    sidebar: articles(limit: 4, sort: "date:desc", where: { published: true }) {
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
    avatar(id: "1") {
      ...AvatarFragment
    }
  }
`);

const PostSidebar = ({ sidebar, avatar }: DocumentType<typeof SidebarArticlesFragment>): JSX.Element => {
  return (
    <div className={s.blogSidebar}>
      <h2>ˇˇˇ</h2>
      <AboutMe avatar={avatar?.avatar} />
      {sidebar &&
        sidebar.map((article) => (
          <Post
            id={article?.id}
            type='blog'
            key={article?.id}
            slug={String(article?.slug)}
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

PostSidebar.displayName = 'Sidebar';

PostSidebar.fragments = {
  SidebarArticlesFragment: SidebarArticlesFragment,
};

export default PostSidebar;
