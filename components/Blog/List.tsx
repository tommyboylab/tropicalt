import Post from '../Home/Recents/Recents';
const s = require('./List.scss');
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const getArticles = gql`
    {
        articles {
            id
            slug
            coverImg {
                id
                url
            }
            title
            date
            excerpt
            user {
                name
            }
        }
    }
`;

const Articles = () => {
    const { data, error, loading } = useQuery(getArticles);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error! {error.message}</div>;
    }

    return (
        <div className={s.postList}>
            {data.articles.map(article => (
                <Post
                    type="post"
                    slug={article.slug}
                    key={article.id}
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
