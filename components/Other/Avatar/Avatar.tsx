const s = require('./Avatar.scss');
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import * as React from 'react';
import Load from '../../Other/Load/Load';
import Err from '../../Other/Error/Error';

const getAvatar = gql`
    {
        avatar(id: "1") {
            id
            avatar {
                id
                url
            }
            alt
        }
    }
`;

const Avatar = () => {
    const { data, error, loading } = useQuery(getAvatar);
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
        <div key={data.avatar.id} className={s.avatar}>
            <img src={`https://api.tropicalt.ca${data.avatar.avatar.url}`} alt={data.avatar.alt} />
        </div>
    );
};
export default Avatar;
