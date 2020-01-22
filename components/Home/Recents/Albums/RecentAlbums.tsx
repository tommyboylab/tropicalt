import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Recents from '../Recents';
import Load from '../../../Other/Load/Load';
import Err from '../../../Other/Error/Error';
const s = require('./RecentAlbums.scss');

type Album = {
	id: string;
	slug: string;
	cover: { placeholder: { url: string } };
	title: string;
	date: string;
	user: { username: string };
	location: string;
};

const getAlbums = gql`
	query getAlbums {
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

	if (loading && !data) return <Load />;
	if (error) return <Err />;

	const albums = data?.albums as Album[];

	return (
		<div className={s.recentAlbums}>
			<h2>Recent Albums</h2>
			{albums.map((album) => (
				<Recents
					id={album.id}
					type='Album'
					key={album.id}
					slug={album.slug}
					cover={album.cover.placeholder.url}
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
