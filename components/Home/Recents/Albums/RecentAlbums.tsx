import Album from '../Recents';
import './RecentAlbums.scss';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
const s = require('./RecentAlbums.scss');
import Load from '../../../Other/Load/Load';
import Err from '../../../Other/Error/Error';
import React from 'react';

const getAlbums = gql`
    {
        albums(limit: 3) {
            slug
            id
            coverImg {
                id
                url
            }
            title
            date
            excerpt
            location
            photos {
                title
                excerpt
                img {
                    url
                }
            }
            user {
                name
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
                Error! {error.message}
            </div>
        );
    }

    return (
        <div className={s.recentAlbums}>
            <h2>Recent Albums</h2>
            {data.albums.map(album => (
                <Album
                    type="album"
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
