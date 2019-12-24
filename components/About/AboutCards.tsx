import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Text from './AboutCard/AboutCardText';
import Img from './AboutCard/AboutCardImage';
import Load from '../Other/Load/Load';
import Err from '../Other/Error/Error';

const getAboutCards = gql`
    {
        aboutcards {
            id
            title
            excerpt
            img {
                id
                url
            }
        }
    }
`;

const AboutCards = () => {
    const { data, error, loading } = useQuery(getAboutCards);
    if (loading) {
        return <Load />;
    }
    if (error) {
        return;
        <div>
            <Err />
            Error! {error.message}
        </div>;
    }

    return (
        <>
            {data.aboutcards.map(about => {
                return (
                    <React.Fragment key={about.id}>
                        <Img url={about.img.url} />
                        <Text title={about.title} excerpt={about.excerpt} />
                    </React.Fragment>
                );
            })}
        </>
    );
};
export default () => <AboutCards />;
