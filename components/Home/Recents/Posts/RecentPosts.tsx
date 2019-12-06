import Post from '../Recents';
import './RecentPosts.scss';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
const s = require('./RecentPosts.scss');
import Load from '../../../Other/Load/Load';
import Err from '../../../Other/Error/Error';

const getArticles = gql`
    {
        articles(limit: 3) {
            id
            slug
            coverImg {
                id
                url
            }
            title
            date
            excerpt
            content
            user {
                name
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
        return (
            <div>
                <Err />
                Error! {error.message}
            </div>
        );
    }

    return (
        <div className={s.recentArticles}>
            <h2>Recent Posts</h2>
            {data.articles.map(article => (
                <Post
                    type="post"
                    key={article.id}
                    slug={article.slug}
                    coverImg={article.coverImg.url}
                    title={article.title}
                    date={article.date}
                    name={article.user.name}
                    excerpt={article.excerpt}
                />
            ))}
        </div>
    );
};
export default () => <Articles />;
