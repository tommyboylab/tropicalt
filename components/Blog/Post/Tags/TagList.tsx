import React from 'react';
import s from './TagList.module.scss';

const TagList = ({ children }: any): JSX.Element => (
  <ul className={s.tagList}>
    <li>Tags:</li>
    {children}
  </ul>
);

export default TagList;
