import Post from '../../../Home/Recents/Recents';
import AboutMe from '../About/AboutMe';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
const s = require('./Sidebar.scss');
import Load from '../../../Other/Load/Load';
import Err from '../../../Other/Error/Error';
import React from "react";

const getArticles = gql`
    {
        articles(limit: 4, sort: "date:desc", where: {
            published: true
        }) {
            id
            slug
            cover {
                id
                url
            }
            title
            date
            excerpt
            user {
                username
            }
        }
    }
`;

const PostSidebar = () => {
    const { data, error, loading } = useQuery(getArticles);
    if (loading) {
        return <Load />;
    }
    if (error) {
        <div>
            <Err />
            {console.log (error.message)}
        </div>;
    }

    return (
        <div className={s.blogSidebar}>
            <h2>ˇˇˇ</h2>
            <AboutMe />
            {data.articles.map(article => (
                <Post
                    type="post"
                    key={article.id}
                    slug={article.slug}
                    cover={article.cover.url}
                    title={article.title}
                    date={article.date}
                    name={article.user.username}
                    excerpt={article.excerpt}
                />
            ))}
        </div>
    );
};
export default () => <PostSidebar />;
