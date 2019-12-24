import * as React from 'react';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
const s = require('./Footer.scss');
import Load from '../Other/Load/Load';
import Err from '../Other/Error/Error';

const getFooterItems = gql`
    {nav(id:1)
    {nav {
        title
        url
    }}}
`;

const Footer = () => {
    const { data, error, loading } = useQuery(getFooterItems);
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
        <footer className={s.footer}>
            <a href="/">T^T</a>
            <h3>Made by Thomas Fiala with a little help from Education</h3>
            <ul>
                {data.nav.nav.map(nav => {
                    return (
                        <Link href={nav.url} key={nav.id}>
                            <li>{nav.title}</li>
                        </Link>
                    );
                })}
            </ul>
        </footer>
    );
};
export default () => <Footer />;
