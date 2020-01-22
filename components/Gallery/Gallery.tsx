import React from 'react';
import Recents from '../Home/Recents/Recents';
const s = require('./Gallery.scss');
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Load from '../Other/Load/Load';
import Err from '../Other/Error/Error';

type Albums = {
	id: string;
	slug: string;
	cover: { img: { url: string } };
	title: string;
	date: string;
	user: { username: string };
	location: string;
};

const getAlbum = gql`
	query getAlbums {
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

	if (loading && !data) return <Load />;
	if (error) return <Err />;

	const albums = data?.albums as Albums[];

	return (
		<div className={s.albumList}>
			{albums.map((album) => (
				<Recents
					key={album.id}
					type='Album'
					id={album.id}
					slug={album.slug}
					cover={album.cover.img.url}
					title={album.title}
					date={album.date}
					name={album.user.username}
					excerpt={`Location: ${album.location}`}
				/>
			))}
		</div>
	);
};
export default () => <Albums />;
