import React from 'react';
import s from './Footer.module.scss';

const Footer = (): JSX.Element => {
  return (
    <footer className={s.footer}>
      <h3>Made by Thomas Fiala with a little help from Education</h3>
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
