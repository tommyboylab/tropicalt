import React, { useEffect, useState } from 'react';
import MainWindow from './MainWindow/MainWindow';
import Sidebar from './Sidebar/Sidebar';
import gql from 'graphql-tag';
import { useApolloClient, useLazyQuery, useQuery } from '@apollo/react-hooks';
import Load from '../../Other/Load/Load';
import Err from '../../Other/Error/Error';
// import {items} from "./TestGallery";
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import getGoogleAlbum from '../GoogleAPI/API';

const getAlbum = gql`
    query($slug:[String!]) {
        albums(where: { slug: $slug }) {
            albumId
            title
            excerpt
        }
    }
`;

type Photo = {
    original: string;
    thumbnail: string;
};

const fetchData = async (albumId: number, setPhotos: (photos: Photo[]) => void) => {
    if (!albumId) return;
    const photosArray = await getGoogleAlbum(albumId);
    if (photosArray && photosArray.length > 0) {
        setPhotos(
            photosArray.map((url: string) => ({
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
            const { data } = await client.query({ query: getAlbum, variables: { slug, } });
            await fetchData(data?.albums[0].albumId, setPhotos);
        }
        fetchAlbums();
    }, [slug,]);

    const {data, error, loading} = useQuery(getAlbum, { variables: { slug, } });
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error! {error.message}</div>;
    }
    return (
        <>
            <Sidebar title={data.albums[0].title} excerpt={data.albums[0].excerpt} items={photos} activeItemId={activePhoto} setActiveItem={setActivePhoto} />
            <MainWindow item={activePhoto} />
        </>
    );
};
export default Album;
