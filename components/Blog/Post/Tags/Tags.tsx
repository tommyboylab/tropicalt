import React from 'react';
import s from './Tags.module.scss';

type Tag = {
	tag: { id: string; tag: string };
};

const TagList = (tag: Tag): JSX.Element => (
	<li className={s.postTags}>
		<a href={`/blog/tag/${tag.tag}`}>{tag.tag}</a>
	</li>
);

export default TagList;
