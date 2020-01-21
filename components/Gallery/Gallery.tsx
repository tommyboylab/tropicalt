import React from 'react';
import Recents from '../Home/Recents/Recents';
const s = require('./Gallery.scss');
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Load from '../Other/Load/Load';
import Err from '../Other/Error/Error';

interface Album {
	id: string;
	slug: string;
	cover: { img: { url: string } };
	title: string;
	date: string;
	user: { username: string };
	location: string;
}

const getAlbum = gql`
	{
		albums(sort: "date:desc", where: { published: true }) {
			id
			slug
			title
			cover {
				img {
					id
					url
				}
			}
			date
			location
			user {
				username
			}
		}
	}
`;

const Albums = () => {
	const { data, error, loading } = useQuery(getAlbum);

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
		<div className={s.albumList}>
			{data.albums.map((Album: Album) => (
				<Recents
					key={Album.id}
					type='Album'
					id={Album.id}
					slug={Album.slug}
					cover={Album.cover.img.url}
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
