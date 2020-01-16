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
const s = require('../../Other/Layout/Post.scss');

interface Article {
	id: string;
	title: string;
	cover: { img: { url: string }; placeholder: { url: string } };
	tag: any[];
	content: string;
}

const Post = () => {
	const router = useRouter();
	const slug = router.query.slug;

	const getArticle = gql`
        {
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
	if (loading) {
		return <Load />;
	}
	if (error) {
		return (
			<div>
				<Err />
				{console.log(error.message)}
			</div>
		);
	}

	return data.articles.map((Article: Article) => (
		<main className={s.layout} key={Article.id}>
			<Nav />
			<CoverImg
				title={Article.title}
				url={Article.cover.img.url}
				placeholder={Article.cover.placeholder.url}
				alt={Article.title}
			/>
			{Article.tag.map((tag) => (
				<Tags tag={tag.tag} />
			))}
			<Body content={Article.content} />
			<Sidebar />
			<Footer />
		</main>
	));
};
export default () => <Post />;
