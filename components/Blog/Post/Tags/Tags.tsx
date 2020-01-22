import React from 'react';
const s = require('./Tags.scss');

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
