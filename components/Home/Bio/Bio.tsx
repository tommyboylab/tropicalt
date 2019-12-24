import ReactMarkdown from 'react-markdown';

const s = require('./Bio.scss');
import Avatar from '../../Other/Avatar/Avatar';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import * as React from 'react';
import Load from '../../Other/Load/Load';
import Err from '../../Other/Error/Error';

const getBio = gql`
    {
        bio(id: "1") {
            id
            title
            content
        }
    }
`;

const Bio = () => {
    const { data, error, loading } = useQuery(getBio);
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
        <div key={data.bio.id} className={s.bio}>
            <Avatar />
            <h3>{data.bio.title}</h3>
            <ReactMarkdown source={data.bio.content} />
        </div>
    );
};
export default Bio;
