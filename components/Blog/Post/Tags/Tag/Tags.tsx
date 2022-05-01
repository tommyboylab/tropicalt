import React from 'react';
import s from './Tags.module.scss';

const TagList = (tag: string): JSX.Element => <li className={s.postTags}>{tag},</li>;

export default TagList;
