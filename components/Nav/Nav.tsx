import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import Load from '../Other/Load/Load';
import Err from '../Other/Error/Error';
const s = require('./Nav.scss');

const getNavItems = gql`
    {nav(id:1)
    {nav {
        title
        url
    }}}
`;

const Nav = () => {
    const { data, error, loading } = useQuery(getNavItems);
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
        <nav>
            <li className={s.menu}>T^T</li>
            <ul>
                {data.nav.nav.map(nav => {
                    return (
                        <Link href={nav.url} key={nav.id}>
                            <li>{nav.title}</li>
                        </Link>
                    );
                })}
            </ul>
        </nav>
    );
};
export default () => <Nav />;
