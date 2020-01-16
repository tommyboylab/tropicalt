import Recents from '../Recents';
import './RecentAlbums.scss';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
const s = require('./RecentAlbums.scss');
import Load from '../../../Other/Load/Load';
import Err from '../../../Other/Error/Error';
import React from 'react';

interface Album {
	id: string;
	slug: string;
	cover: { placeholder: { url: string } };
	title: string;
	date: string;
	user: { username: string };
	location: string;
}

const getAlbums = gql`
	{
		albums(limit: 4, sort: "date:desc", where: { published: true }) {
			slug
			id
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
			location
			user {
				username
			}
		}
	}
`;

const Albums = () => {
	const { data, error, loading } = useQuery(getAlbums);
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
		<div className={s.recentAlbums}>
			<h2>Recent Albums</h2>
			{data.albums.map((Album: Album) => (
				<Recents
					id={Album.id}
					type='Album'
					key={Album.id}
					slug={Album.slug}
					cover={Album.cover.placeholder.url}
					title={Album.title}
					date={Album.date}
					name={Album.user.username}
					excerpt={`Location: ${Album.location}`}
				/>
			))}
		</div>
	);
};
export default () => <Albums />;
