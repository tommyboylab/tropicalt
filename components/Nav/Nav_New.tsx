import React from 'react';
import gql from 'graphql-tag';
import s from './Nav_New.module.scss'
import Link from "./NewActiveLink";

type Nav = [
    {
        id: string;
        title: string;
        url: string;
    }
];

const NavFragment = gql`
    fragment NavigationFragment on Query {
        nav(id: 1) {
            nav {
                id
                title
                url
            }
        }
    }
`;

const Nav = (nav: any): JSX.Element => {
    nav = nav.data?.nav?.nav as Nav;

    return (
        <nav className={s.nav}>
            <ul>
                {nav &&
                nav.map((nav: { url: string; id: string | number | undefined; title: React.ReactNode }) => {
                    return (
                        <Link href={nav.url} key={nav.id} >
                            <>{nav.title}</>
                        </Link>
                    );
                })}
            </ul>
        </nav>
    );
};

Nav.displayName = 'Nav';

Nav.fragments = {
    NavigationFragment: NavFragment,
};

export default Nav;
