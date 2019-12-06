import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Album from '../Home/Recents/Recents';
const s = require('./Gallery.scss');
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Load from '../Other/Load/Load';
import Err from '../Other/Error/Error';
import { useRouter } from 'next/router';

const getAlbum = gql`
    {
        albums {
            id
            slug
            coverImg {
                id
                url
            }
            title
            date
            excerpt
            location
            user {
                name
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
                Error! {error.message}
            </div>
        );
    }
    return (
        <div className={s.albumList}>
            {data.albums.map(album => (
                <Album
                    type="album"
                    id={album.id}
                    slug={album.slug}
                    coverImg={album.coverImg.url}
                    title={album.title}
                    date={album.date}
                    name={album.user.name}
                    excerpt={`Location: ${album.location}`}
                />
            ))}
        </div>
    );
};
export default () => <Albums />;
