import React from 'react';
import s from './TagList.module.scss';
import { Enum_Componentblogtag_Tag } from '../../../../apollo/gql/graphql';

type BlogTag = {
  // children: React.ReactElement<any, any>;
  children: (Enum_Componentblogtag_Tag | null | undefined)[] | undefined;
};

const TagList = (children: BlogTag): JSX.Element => (
  <ul className={s.tagList}>
    <li>Tags:</li>
    {children}
  </ul>
);

export default TagList;
