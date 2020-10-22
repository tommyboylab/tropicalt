import React from 'react';
import gql from 'graphql-tag';
import Post from '../../../Home/Recents/Recents';
import AboutMe from '../About/AboutMe';
import s from './Sidebar.module.scss';
import Avatar from '../../../Other/Avatar/Avatar';

type Article = [
  {
    id: string;
    slug: string;
    cover: { img: { id: string; url: string; hash: string } };
    title: string;
    date: string;
    user: { username: string };
    excerpt: string;
  }
];

const SidebarArticlesFragment = gql`
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
  ${Avatar.fragments.AvatarFragment}
`;

const PostSidebar = (data: any): JSX.Element => {
  const articles = data?.data.sidebar as Article;
  const avatar = data?.data.avatar;
  return (
    <div className={s.blogSidebar}>
      <h2>ˇˇˇ</h2>
      <AboutMe data={avatar} />
      {articles &&
        articles.map((article: any) => (
          <Post
            id={article.id}
            type='blog'
            key={article.id}
            slug={article.slug}
            cover={`/uploads/${article.cover.img.hash}-thumb.svg`}
            img={article.cover.img.url}
            title={article.title}
            date={article.date}
            name={article.user.username}
            excerpt={article.excerpt}
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
