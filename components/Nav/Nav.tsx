import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Link from './ActiveLink/ActiveLink';
import Load from '../Other/Load/Load';
import Err from '../Other/Error/Error';
import s from './Nav.module.scss';

type Nav = {
  id: string;
  title: string;
  url: string;
};

const getNavItems = gql`
  query getNav {
    nav(id: 1) {
      nav {
        id
        title
        url
      }
    }
  }
`;

const Nav = (): JSX.Element => {
  const { data, error, loading } = useQuery(getNavItems);

  if (loading && !data) return <Load />;
  if (error) return <Err />;

  const nav = data?.nav?.nav as Nav[];

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

export default Nav;
