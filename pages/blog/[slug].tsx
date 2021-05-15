import React from 'react';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Load from '../../components/Other/Load/Load';
import Err from '../../components/Other/Error/Error';
import Meta from '../../components/Other/Meta/Meta';
import s from '../../components/Other/Layout/Post.module.scss';
import Nav from '../../components/Nav/Nav';
import MobileHeader from '../../components/Blog/Post/MobileHeader/MobileHeader';
import CoverImg from '../../components/Blog/Post/CoverImg/CoverImg';
import TagList from '../../components/Blog/Post/Tags/TagList';
import Tags from '../../components/Blog/Post/Tags/Tag/Tags';
import Body from '../../components/Blog/Post/Body/Body';
import Sidebar from '../../components/Blog/Post/Sidebar/Sidebar';
import Footer from '../../components/Nav/Footer';
import Comments from '../../components/Blog/Post/Comments/CommentList/CommentList';
import {isSignedIn} from "../../apollo/apollo";

type Article = {
  id: string;
  title: string;
  cover: { img: { id: string; url: string; hash: string } };
  tag: [{ tag: { id: string; tag: string } }];
  content: string;
  excerpt: string;
};

const getArticle = gql`
  query Article($slug: String) {
    ...NavigationFragment
    articles(where: { slug: $slug }) {
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
      excerpt
      content
      tag {
        tag
      }
    }
    ...SidebarArticlesFragment
  }
  ${Nav.fragments.NavigationFragment}
  ${Sidebar.fragments.SidebarArticlesFragment}
`;

const Post = (): JSX.Element => {
  const router = useRouter();
  const slug = router.query.slug;
  const user = isSignedIn()

  const { data, error, loading } = useQuery(getArticle, { variables: { slug } });

  if (loading && !data) return <Load />;
  if (error) return <Err />;

  const articles = data?.articles as Article[];
  const sidebar = data;

  return (
    <>
      {articles.map((article) => (
        <>
          <Meta title={article.title} excerpt={article.excerpt} imgUrl={article.cover.img.url} url={`/blog/${slug}`} />
          <main className={s.layout} key={article.id}>
            <Nav data={data} />
            <MobileHeader />
            <CoverImg
              title={article.title}
              url={article.cover.img.url}
              placeholder={`/uploads/${article.cover.img.hash}-thumb.svg`}
              alt={article.title}
            />
            <TagList>
              {article.tag.map(({ tag: tag }) => (
                <Tags key={tag.id} tag={tag} />
              ))}
            </TagList>
            <Body content={article.content} />
            <Sidebar data={sidebar} />
            {user && <Comments slug={slug} articleID={article.id}/>}
            <Footer data={data} />
          </main>
        </>
      ))}
    </>
  );
};

Post.displayName = 'Post';

export default Post;
