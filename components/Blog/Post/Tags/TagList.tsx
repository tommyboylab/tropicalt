import React from 'react';
import s from './TagList.module.scss';

type BlogTag = {
  children: Array<{ tag?: string | null } | null> | null;
};

const TagList = ({ children }: BlogTag): JSX.Element => (
  <ul className={s.tagList}>
    <li>Tags:</li>
    <>{children}</>
  </ul>
);

export default TagList;
