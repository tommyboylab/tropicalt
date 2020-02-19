import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Post from '../../../Home/Recents/Recents';
import AboutMe from '../About/AboutMe';
import Load from '../../../Other/Load/Load';
import Err from '../../../Other/Error/Error';
import s from './Sidebar.module.scss';

type Article = {
	id: string;
	slug: string;
	cover: { img: { url: string }; placeholder: { url: string } };
	title: string;
	date: string;
	user: { username: string };
	excerpt: string;
};

const getArticles = gql`
	query Articles {
		articles(limit: 4, sort: "date:desc", where: { published: true }) {
			id
			slug
			cover {
				img {
					id
					url
				}
				placeholder {
					id
					url
				}
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

const PostSidebar = (): JSX.Element => {
	const { data, error, loading } = useQuery(getArticles);

	if (loading && !data) return <Load />;
	if (error) return <Err />;

	const articles = data?.articles as Article[];

	return (
		<div className={s.blogSidebar}>
			<h2>ˇˇˇ</h2>
			<AboutMe />
			{articles.map((article) => (
				<Post
					id={article.id}
					type='blog'
					key={article.id}
					slug={article.slug}
					cover={article.cover.placeholder.url}
					img={article.cover.img.url}
					title={article.title}
					date={article.date}
					name={article.user.username}
					excerpt={article.excerpt}
				/>
			))}
		</div>
	);
};

PostSidebar.displayName = 'Sidebar';

export default PostSidebar;
