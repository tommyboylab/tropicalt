import React from 'react';
import Nav from '../../Nav/Nav';
import CoverImg from './CoverImg/CoverImg';
import Tags from './Tags/Tags';
import Body from './Body/Body';
import Sidebar from './Sidebar/Sidebar';
import Footer from '../../Nav/Footer';
import Load from '../../Other/Load/Load';
import Err from '../../Other/Error/Error';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import Album from '../../Home/Recents/Recents';
const s = require('../../Other/Layout/Post.scss');

const Post = () => {
    const router = useRouter();
    const slug = router.query.slug;

    const getArticle = gql`
        {
            articles (where: {slug: "${slug}"}) {
                id
                slug
                coverImg {
                    id
                    url
                }
                title
                updated_at
                content
                user{
                    name
                }
                tags
            }
        }
    `;

    const { data, error, loading } = useQuery(getArticle, { variables: { slug } });
    if (loading) {
        return <Load />;
    }
    if (error) {
        return (
            <div>
                <Err />
                Error! {error.message}
            </div>
        );
    }

    return data.articles.map(article => (
        <main className={s.post}>
            <Nav />
            <CoverImg title={article.title} url={article.coverImg.url} />
            <Tags />
            <Body content={article.content} />
            <Sidebar />
            <Footer />
        </main>
    ));
};
export default () => <Post />;
