import Post from '../../../Home/Recents/Recents';
import AboutMe from '../About/AboutMe';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
const s = require('./Sidebar.scss');
import Load from '../../../Other/Load/Load';
import Err from '../../../Other/Error/Error';
import React from 'react';

interface Article {
	id: string;
	slug: string;
	cover: { placeholder: { url: string } };
	title: string;
	date: string;
	user: { username: string };
	excerpt: string;
}

const getArticles = gql`
	{
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

const PostSidebar = () => {
	const { data, error, loading } = useQuery(getArticles);
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

	return (
		<div className={s.blogSidebar}>
			<h2>ˇˇˇ</h2>
			<AboutMe />
			{data.articles.map((Article: Article) => (
				<Post
					id={Article.id}
					type='post'
					key={Article.id}
					slug={Article.slug}
					cover={Article.cover.placeholder.url}
					title={Article.title}
					date={Article.date}
					name={Article.user.username}
					excerpt={Article.excerpt}
				/>
			))}
		</div>
	);
};
export default () => <PostSidebar />;
