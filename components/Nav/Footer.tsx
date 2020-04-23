import React from 'react';
import Link from './ActiveLink/ActiveLink';
import s from './Footer.module.scss';

type Footer = [
  {
    id: string;
    title: string;
    url: string;
  }
];

const Footer = (footer: any): JSX.Element => {
  footer = footer.data?.nav?.nav as Footer;

  return (
    <footer className={s.footer}>
      <Link href='/'>
        <li>T^T</li>
      </Link>
      <h3>Made by Thomas Fiala with a little help from Education</h3>
      <ul>
        {footer &&
          footer.map((nav: { url: string; id: string | number | undefined; title: React.ReactNode }) => {
            return (
              <Link href={nav.url} key={nav.id}>
                <li>{nav.title}</li>
              </Link>
            );
          })}
      </ul>
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
