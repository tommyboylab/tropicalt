import React from 'react';
import s from './Tags.module.scss';

type Tags = {
	tag: string[];
};

const TagList = (Tags: Tags) => (
	<ul className={s.postTags}>
		<li>Tags:</li>
		<li>
			<a href='/'>{Tags.tag}</a>
		</li>
	</ul>
);

export default TagList;
