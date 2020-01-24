import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Post from '../Home/Recents/Recents';
import Err from '../Other/Error/Error';
import Load from '../Other/Load/Load';
import s from './List.module.scss';

type ArticleList = {
	id: string;
	slug: string;
	cover: { placeholder: { url: string } };
	title: string;
	date: string;
	user: { username: string };
	excerpt: string;
};

const getArticlesQuery = gql`
	query getArticles($start: Int!) {
		articles(limit: 7, start: $start, sort: "date:desc", where: { published: true }) {
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

const Articles = () => {
	const [nextPosts, setNextPosts] = useState(0);
	const { data, error, loading } = useQuery(getArticlesQuery, {
		variables: {
			start: nextPosts,
		},
		fetchPolicy: 'cache-and-network',
	});

	if (loading && !data) return <Load />;
	if (error) return <Err />;

	const articles = data?.articles as ArticleList[];

	return (
		<div className={s.postList}>
			{articles.map((article) => (
				<Post
					id={article.id}
					type='post'
					slug={article.slug}
					key={article.id}
					cover={article.cover.placeholder.url}
					title={article.title}
					date={article.date}
					name={article.user.username}
					excerpt={article.excerpt}
				/>
			))}
			<div className={s.postControls}>
				<button onClick={() => setNextPosts(nextPosts - 7)} disabled={nextPosts === 0}>
					Prev
				</button>
				<button onClick={() => setNextPosts(nextPosts + 7)} disabled={articles.length < 7}>
					Next
				</button>
			</div>
		</div>
	);
};
export default () => <Articles />;
