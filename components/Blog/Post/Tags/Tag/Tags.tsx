import React from 'react';
import s from './Tags.module.scss';
import { Maybe, Enum_Componentblogtag_Tag } from '../../../../../apollo/gql/graphql';

const TagList = (tag: Maybe<Enum_Componentblogtag_Tag> | undefined): JSX.Element => (
  <li className={s.postTags}>{tag},</li>
);

export default TagList;
