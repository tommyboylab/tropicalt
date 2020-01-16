import React, { useEffect, useState } from 'react';
import MainWindow from './MainWindow/MainWindow';
import Sidebar from './Sidebar/Sidebar';
import gql from 'graphql-tag';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import Load from '../../Other/Load/Load';
import Err from '../../Other/Error/Error';
import { useRouter } from 'next/router';
import axios from 'axios';
// import getGoogleAlbum from '../GoogleAPI/API';

const getAlbum = gql`
	query($slug: [String!]) {
		albums(where: { slug: $slug }) {
			title
			excerpt
			albumID
		}
	}
`;

type Photo = {
	original: string;
	thumbnail: string;
};
//@ts-ignore
const fetchData = async (albumID: number, setPhotos: (photos: Photo[]) => void) => {
	if (!albumID) return <Load />;
	const photosArray = await axios.get(`https://google-photos-album-demo.glitch.me/${albumID}`);
	// const photosArray = await getGoogleAlbum(albumID);
	if (photosArray && photosArray.data.length > 0) {
		setPhotos(
			photosArray.data.map((url: string) => ({
				original: `${url}=w2048`,
				thumbnail: `${url}=w400`,
			}))
		);
	}
};

const Album = () => {
	const router = useRouter();
	const slug = router.query.slug;
	const [activePhoto, setActivePhoto] = useState<Photo>();
	const [photos, setPhotos] = useState<Photo[]>([]);
	const client = useApolloClient();

	useEffect(() => {
		if (!slug) return;
		async function fetchAlbums() {
			const { data } = await client.query({ query: getAlbum, variables: { slug } });
			await fetchData(data?.albums[0].albumID, setPhotos);
		}
		fetchAlbums();
	}, [slug]);

	const { data, error, loading } = useQuery(getAlbum, { variables: { slug } });
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
		<>
			<Sidebar
				title={data.albums[0].title}
				excerpt={data.albums[0].excerpt}
				items={photos}
				activeItemId={activePhoto}
				setActiveItem={setActivePhoto}
			/>
			<MainWindow item={activePhoto} />
		</>
	);
};
export default Album;
