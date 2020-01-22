import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import Nav from '../../Nav/Nav';
import CoverImg from './CoverImg/CoverImg';
import Tags from './Tags/Tags';
import Body from './Body/Body';
import Sidebar from './Sidebar/Sidebar';
import Footer from '../../Nav/Footer';
import Load from '../../Other/Load/Load';
import Err from '../../Other/Error/Error';
const s = require('../../Other/Layout/Post.scss');

type Article = {
	id: string;
	title: string;
	cover: { img: { url: string }; placeholder: { url: string } };
	tag: any[];
	content: string;
};

const Post = () => {
	const router = useRouter();
	const slug = router.query.slug;

	const getArticle = gql`
        query Article {
            articles (where: {slug: "${slug}"}) {
                id
                slug
                cover {
                    img{
                        id
                        url
                    }
                    placeholder{
                        id
                        url 
                    }
                }
                title
                content
                tag {
                tag
                }
            }
        }
    `;

	const { data, error, loading } = useQuery(getArticle, { variables: { slug } });

	if (loading && !data) return <Load />;
	if (error) return <Err />;

	const articles = data?.articles as Article[];

	return (
		<>
			{articles.map((article) => (
				<main className={s.layout} key={article.id}>
					<Nav />
					<CoverImg
						title={article.title}
						url={article.cover.img.url}
						placeholder={article.cover.placeholder.url}
						alt={article.title}
					/>
					{article.tag.map(({ tag }) => (
						<Tags tag={tag} />
					))}
					<Body content={article.content} />
					<Sidebar />
					<Footer />
				</main>
			))}
		</>
	);
};

export default Post;
