import React from 'react';
import s from './Tags.module.scss';

type Tag = {
  tag: { id: string; tag: string };
};

const TagList = (tag: Tag): JSX.Element => <li className={s.postTags}>{tag.tag},</li>;

export default TagList;
