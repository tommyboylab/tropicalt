import React from 'react';
import gql from 'graphql-tag';
import Link from './ActiveLink/ActiveLink';
import s from './Nav.module.scss';

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
      <li className={s.menu}>T^T</li>
      <ul>
        <style jsx>{`
          .link.active:after {
            height: -0.2em;
            text-align: center;
            content: ' -------';
          }
        `}</style>
        {nav &&
          nav.map((nav: { url: string; id: string | number | undefined; title: React.ReactNode }) => {
            return (
              <Link href={nav.url} key={nav.id}>
                <li className='link'>{nav.title}</li>
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
