import Post from '../Home/Recents/Recents';
const s = require('./List.scss');
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Err from "../Other/Error/Error";
import React from "react";
import Load from "../Other/Load/Load";

const getArticles = gql`
    {
        articles(sort: "date:desc", where: {
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

const Articles = () => {
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
        <div className={s.postList}>
            {data.articles.map(article => (
                <Post
                    type="post"
                    slug={article.slug}
                    key={article.id}
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
