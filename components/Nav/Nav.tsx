import React from 'react';
import { gql } from 'urql';
import Link from './ActiveLink/ActiveLink';
import s from './Nav.module.scss';

export const NavFragment = gql`
  fragment NavigationFragment on Query {
    navLink {
      data {
        attributes {
          Link {
            id
            Name
            URL
          }
        }
      }
    }
  }
`;

const Nav = ({ nav }): JSX.Element => {
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
        {nav.map((nav) => {
          return (
            <Link href={nav.URL} key={nav?.id}>
              <li className='link'>{nav?.Name}</li>
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
