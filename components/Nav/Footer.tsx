import React from 'react';
import Link from './ActiveLink/ActiveLink';
import s from './Footer.module.scss';

type Footer = {
  navLink:
    | {
        __typename?: 'NavLinkEntityResponse';
        data?: {
          __typename?: 'NavLinkEntity';
          attributes?: {
            __typename?: 'NavLink';
            Link: Array<{ __typename?: 'ComponentNavigationLink'; id: string; Name: string; URL: string } | null>;
          } | null;
        } | null;
      }
    | null
    | undefined
    | undefined;
};

const Footer = ({ navLink }: Footer): JSX.Element => {
  const navData = navLink?.data?.attributes?.Link;
  return (
    <footer className={s.footer}>
      <Link href='/'>
        <li>T^T</li>
      </Link>
      <h3>Made by Thomas Fiala with a little help from Education</h3>
      <ul>
        {navData?.map((nav) => {
          return (
            <Link href={String(nav?.URL)} key={nav?.id}>
              <li>{nav?.Name}</li>
            </Link>
          );
        })}
      </ul>
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
