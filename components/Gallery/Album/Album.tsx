import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import gql from 'graphql-tag';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import axios from 'axios';
import MainWindow from './MainWindow/MainWindow';
import Sidebar from './Sidebar/Sidebar';
import Load from '../../Other/Load/Load';
import Err from '../../Other/Error/Error';

const getAlbum = gql`
	query getAlbums($slug: [String!]) {
		albums(where: { slug: $slug }) {
			title
			excerpt
			albumID
		}
	}
`;

type Albums = {
	title: string;
	excerpt: string;
	albumID: number;
};

type Photo = {
	original: string;
	thumbnail: string;
};

//@ts-ignore
const fetchData = async (albumID: Albums, setPhotos: (photos: Photo[]) => void) => {
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
	if (loading && !data) return <Load />;
	if (error) return <Err />;

	const albums = data?.albums as Albums[];

	return (
		<>
			<Sidebar
				title={albums[0].title}
				excerpt={albums[0].excerpt}
				photos={photos}
				activeItemID={activePhoto}
				setActiveItem={setActivePhoto}
			/>
			<MainWindow src={activePhoto} />
		</>
	);
};
export default Album;
