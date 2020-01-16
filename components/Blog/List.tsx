import Post from '../Home/Recents/Recents';
const s = require('./List.scss');
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Err from '../Other/Error/Error';
import React, { useState } from 'react';
import Load from '../Other/Load/Load';

interface Article {
	id: string;
	slug: string;
	cover: { placeholder: { url: string } };
	title: string;
	date: string;
	user: { username: string };
	excerpt: string;
}

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
	if (loading && !data) {
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
		<div className={s.postList}>
			{data.articles.map((Article: Article) => (
				<Post
					id={Article.id}
					type='post'
					slug={Article.slug}
					key={Article.id}
					cover={Article.cover.placeholder.url}
					title={Article.title}
					date={Article.date}
					name={Article.user.username}
					excerpt={Article.excerpt}
				/>
			))}{' '}
			<div className={s.postControls}>
				<button
					// reduce the offset by 10 to fetch the previous page
					onClick={() => setNextPosts(nextPosts - 7)}
					disabled={nextPosts === 0}>
					Prev
				</button>
				<button
					// increase the offset by 10 to fetch the next page
					onClick={() => setNextPosts(nextPosts + 7)}
					disabled={data.articles.length < 7}>
					Next
				</button>
			</div>
		</div>
	);
};
export default () => <Articles />;
