import React from 'react';
import s from './Tags.module.scss';

const TagList = (tag): JSX.Element => <li className={s.postTags}>{tag},</li>;

export default TagList;
