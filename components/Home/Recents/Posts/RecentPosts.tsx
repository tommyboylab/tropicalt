import Post from '../Recents';
import './RecentPosts.scss';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
const s = require('./RecentPosts.scss');
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
		articles(limit: 3, sort: "date:desc", where: { published: true }) {
			id
			slug
			title
			excerpt
			date
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
		return (
			<div>
				<Err />
				{console.log(error.message)}
			</div>
		);
	}

	return (
		<div className={s.recentArticles}>
			<h2>Recent Posts</h2>
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
export default () => <Articles />;
