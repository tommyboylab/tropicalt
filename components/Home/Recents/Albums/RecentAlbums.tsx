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
        albums(limit: 4, sort: "date:desc", where: {
            published: true
        }) {
            slug
            id
            cover {
                id
                url
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
        return   <div>
            <Err />
            {console.log (error.message)}
        </div>;
    }

    return (
        <div className={s.recentAlbums}>
            <h2>Recent Albums</h2>
            {data.albums.map(album => (
                <Album
                    type="album"
                    key={album.id}
                    slug={album.slug}
                    cover={album.cover.url}
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
