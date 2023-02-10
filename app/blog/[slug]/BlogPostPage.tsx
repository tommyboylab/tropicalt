'use client';
import React from 'react';
import { gql } from '@app/gql';
import { useSearchParams } from 'next/navigation';
import { useQuery } from 'urql';
import Load from '../../../components/Other/Load/Load';
import Err from '../../../components/Other/Error/Error';
import Meta from '../../../components/Other/Meta/Meta';
import s from '../../../components/Other/Layout/Post.module.scss';
import NewNav from '../../../components/Nav/NewNav';
import MobileHeader from '../../../components/Blog/Post/MobileHeader/MobileHeader';
import CoverImg from '../../../components/Blog/Post/CoverImg/CoverImg';
// import TagList from '../../components/Blog/Post/Tags/TagList';
// import Tags from '../../components/Blog/Post/Tags/Tag/Tags';
import Body from '../../../components/Blog/Post/Body/Body';
import Sidebar from '../../../components/Blog/Post/Sidebar/Sidebar';
import Footer from '../../../components/Nav/Footer';
import CommentList from '../../../components/Blog/Post/Comments/CommentList/CommentList';
import { isSignedIn } from '../../../gql/urqlClient';
// import { GetArticlesQuery } from '../blog';
import Modal from '../../../components/Other/SocialAuth/Modal';
import {motion} from 'framer-motion';

export const getBlogSlugs = gql(`
query Articles {
  articles {
    data {
      id
      attributes {
        Slug
      }
    }
  }
}
`);

const getArticle = gql(`
  query Article($slug: String) {
    ...NavigationFragment
    articles(filters: { Slug: { eq: $slug } }) {
      data {
        id
        attributes {
          Slug
          Title
          Tagline
          Published
          Content
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
    ...SidebarArticlesFragment
  }
`);

const BlogPostPage = () => {
  const params = useSearchParams();
  const slug = params.get('slug')?.toString();
  const authenticated = isSignedIn();

  const [result] = useQuery({ query: getArticle, variables: { slug: slug } });
  const { data, fetching, error } = result;

  if (fetching && !data) return <Load />;
  if (error) return <Err />;

  const articleData = data?.articles?.data[0].attributes;
  return (
    <>
      <Meta
        title={articleData?.Title}
        excerpt={String(articleData?.Tagline)}
        imgUrl={articleData?.Cover?.img?.data?.attributes?.url}
        url={`/blog/${String(slug)}`}
      />
      <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ pointerEvents: "auto" }}
          className={s.layout} key={data?.articles?.data[0].id}>
        <NewNav navLink={data?.navLink} />
        <MobileHeader />
        <CoverImg
          title={String(articleData?.Title)}
          url={String(articleData?.Cover?.img?.data?.attributes?.url)}
          placeholder={`/uploads/sqip_${String(articleData?.Cover?.img?.data?.attributes?.hash)}.svg`}
          alt={String(articleData?.Title)}
        />
        {/*<TagList>{articleData?.tag?.map((tag) => tag?.tag)}</TagList>*/}
        <Body content={String(articleData?.Content)} />
        <Sidebar sidebar={data?.sidebar} />
        {authenticated ? <CommentList slug={String(slug)} articleID={String(data?.articles?.data[0].id)} /> : <Modal />}
        <Footer />
      </motion.main
>
    </>
  );
};

BlogPostPage.displayName = 'Blog Post Page';

export default BlogPostPage;
