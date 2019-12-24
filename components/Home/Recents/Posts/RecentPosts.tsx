import Post from '../Recents';
import './RecentPosts.scss';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
const s = require('./RecentPosts.scss');
import Load from '../../../Other/Load/Load';
import Err from '../../../Other/Error/Error';
import React from "react";

const getArticles = gql`
    {
        articles(limit: 3, sort: "date:desc", where: {
            published: true
        }) {
            id
            slug
            title
            excerpt
            date
            cover {
                id
                url
            }
           
            user {
                username
            }
        }
    }
`;

const Articles = () => {
    const { data, error, loading } = useQuery(getArticles);
    if (loading) {
        return <Load />;
    }
    if (error) {
        return   <div>
            <Err />
            {console.log (error.message)}
        </div>;
    }

    return (
        <div className={s.recentArticles}>
            <h2>Recent Posts</h2>
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
export default () => <Articles />;
