import React from 'react';
import Link from './ActiveLink/ActiveLink';
import s from './Footer.module.scss';
import { NavigationFragmentFragment } from '../../apollo/gql/graphql';

type Footer = [
  {
    id: string;
    title: string;
    url: string;
  }
];

const Footer = ({ nav }: NavigationFragmentFragment): JSX.Element => {
  return (
    <footer className={s.footer}>
      <Link href='/'>
        <li>T^T</li>
      </Link>
      <h3>Made by Thomas Fiala with a little help from Education</h3>
      <ul>
        {nav &&
          nav?.nav?.map((nav) => {
            return (
              <Link href={String(nav?.url)} key={nav?.id}>
                <li>{nav?.title}</li>
              </Link>
            );
          })}
      </ul>
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
