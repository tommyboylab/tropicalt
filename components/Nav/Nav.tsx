import * as React from 'react';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
const s = require('./Nav.scss');
import Load from '../Other/Load/Load';
import Err from '../Other/Error/Error';

const getNavItems = gql`
    {
        navs {
            id
            title
            url
        }
    }
`;

const Nav = () => {
    const { data, error, loading } = useQuery(getNavItems);
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
        <nav>
            <li className={s.menu}>T^T</li>
            <ul>
                {data.navs.map(nav => {
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
