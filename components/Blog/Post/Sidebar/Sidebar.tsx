import Post from '../../../Home/Recents/Recents';
import AboutMe from '../Aboutme/AboutMe';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
const s = require('./Sidebar.scss');
import Load from '../../../Other/Load/Load';
import Err from '../../../Other/Error/Error';

const getArticles = gql`
    {
        articles(limit: 4) {
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

const PostSidebar = () => {
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
        <div className={s.blogSidebar}>
            <h2>ˇˇˇ</h2>
            <AboutMe />
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
export default () => <PostSidebar />;
