import React from 'react';
import { gql, DocumentType } from '@app/gql';
import Link from './ActiveLink/ActiveLink';
import s from './Nav.module.scss';

export const NavigationFragment = gql(`
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
`);

const Nav = ({ navLink }: DocumentType<typeof NavigationFragment>): JSX.Element => {
  const navData = navLink?.data?.attributes?.Link;

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
        {navData &&
          navData.map((nav) => {
            return (
              <Link href={String(nav?.URL)} key={nav?.id}>
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
  NavigationFragment,
};

export default Nav;
