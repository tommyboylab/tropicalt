import React from 'react';
import s from './MobileHeader.module.scss';

const MobileHeader = (): JSX.Element => (
  <a className={s.mobileHeader} href='/blog'>
    <h2>The Blog...</h2>
  </a>
);

export default MobileHeader;
