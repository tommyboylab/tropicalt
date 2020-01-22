import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Post from '../Recents';
import Load from '../../../Other/Load/Load';
import Err from '../../../Other/Error/Error';
const s = require('./RecentPosts.scss');

type Article = {
	id: string;
	slug: string;
	cover: { placeholder: { url: string } };
	title: string;
	date: string;
	user: { username: string };
	excerpt: string;
};

const getArticles = gql`
	query getArticles {
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

	if (loading && !data) return <Load />;
	if (error) return <Err />;

	const articles = data?.articles as Article[];

	return (
		<div className={s.recentArticles}>
			<h2>Recent Posts</h2>
			{articles.map((article) => (
				<Post
					id={article.id}
					type='post'
					key={article.id}
					slug={article.slug}
					cover={article.cover.placeholder.url}
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
