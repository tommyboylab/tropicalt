import React from 'react';
import { gql } from '@app/gql';
import { useRouter } from 'next/router';
import { useQuery } from 'urql';
import Load from '../../components/Other/Load/Load';
import Err from '../../components/Other/Error/Error';
import Meta from '../../components/Other/Meta/Meta';
import s from '../../components/Other/Layout/Post.module.scss';
import Nav from '../../components/Nav/Nav';
import MobileHeader from '../../components/Blog/Post/MobileHeader/MobileHeader';
import CoverImg from '../../components/Blog/Post/CoverImg/CoverImg';
// import TagList from '../../components/Blog/Post/Tags/TagList';
// import Tags from '../../components/Blog/Post/Tags/Tag/Tags';
import Body from '../../components/Blog/Post/Body/Body';
import Sidebar from '../../components/Blog/Post/Sidebar/Sidebar';
import Footer from '../../components/Nav/Footer';
import CommentList from '../../components/Blog/Post/Comments/CommentList/CommentList';
// import { isSignedIn } from '../../apollo/apolloClient';
// import Modal from '../../components/Other/SocialAuth/Modal';

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

const Post = (): JSX.Element => {
  const router = useRouter();
  const slug = router.query.slug;
  // const authenticated = isSignedIn();

  const [result] = useQuery({ query: getArticle, variables: { slug: String(slug) } });
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
      <main className={s.layout} key={data?.articles?.data[0].id}>
        <Nav navLink={data?.navLink} />
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
        <CommentList slug={String(slug)} articleID={String(data?.articles?.data[0].id)} />
        {/*{authenticated ? <CommentList slug={String(slug)} articleID={String(data?.articles?.data[0].id)} /> : <Modal />}*/}
        <Footer navLink={data?.navLink} />
      </main>
    </>
  );
};

Post.displayName = 'Post';

export default Post;
