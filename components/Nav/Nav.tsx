import React from 'react';
import { gql, DocumentType } from '@app/gql';
import Link from './ActiveLink/ActiveLink';
import s from './Nav.module.scss';

const NavFragment = gql(`
  fragment NavigationFragment on Query {
    nav(id: 1) {
      nav {
        id
        title
        url
      }
    }
  }
`);

const Nav = ({ nav }: DocumentType<typeof NavFragment>): JSX.Element => {
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
          nav?.nav?.map((nav) => {
            return (
              <Link href={nav ? nav.url : '/'} key={nav?.id}>
                <li className='link'>{nav?.title}</li>
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
