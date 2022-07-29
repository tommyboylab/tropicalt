import React from 'react';
import { gql } from '@app/gql';
import { useRouter } from 'next/router';
import { useQuery } from 'urql';
import Load from '../../components/Other/Load/Load';
import Err from '../../components/Other/Error/Error';
import Meta from '../../components/Other/Meta/Meta';
import s from '../../components/Other/Layout/Post.module.scss';
import NewNav from '../../components/Nav/NewNav';
import MobileHeader from '../../components/Blog/Post/MobileHeader/MobileHeader';
import CoverImg from '../../components/Blog/Post/CoverImg/CoverImg';
// import TagList from '../../components/Blog/Post/Tags/TagList';
// import Tags from '../../components/Blog/Post/Tags/Tag/Tags';
import Body from '../../components/Blog/Post/Body/Body';
import Sidebar from '../../components/Blog/Post/Sidebar/Sidebar';
import Footer from '../../components/Nav/Footer';
import CommentList from '../../components/Blog/Post/Comments/CommentList/CommentList';
import { client, ssrCacheExchange, isSignedIn } from '../../gql/urqlClient';
// import { GetArticlesQuery } from '../blog';
import Modal from '../../components/Other/SocialAuth/Modal';

const getBlogSlugs = gql(`
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

const Post = (): JSX.Element => {
  const router = useRouter();
  const slug = router.query.slug;
  const authenticated = isSignedIn();

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
      </main>
    </>
  );
};

Post.displayName = 'Post';

export default Post;

export async function getStaticPaths() {
  const { data } = await client
    .query(getBlogSlugs)
    .toPromise()
    .catch((err) => {
      throw new Error(`This is the error ${String(err)}`);
    });

  const slugArr = data?.articles?.data.map(({ attributes }) => attributes?.Slug);

  const paths = slugArr?.map((slug) => ({
    params: {
      slug,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context: {
  params: {
    slug: string;
  };
}) {
  const { params } = context;

  const { slug } = params;

  await client.query(getArticle, { slug }).toPromise();

  return { props: { urqlState: ssrCacheExchange.extractData() }, revalidate: 1200 };
}
