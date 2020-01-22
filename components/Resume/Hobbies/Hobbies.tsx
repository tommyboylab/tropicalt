import React from 'react';
import ReactMarkdown from 'react-markdown';
const s = require('../Resume.scss');

type Hobbies = {
	content: string;
};

const Hobbies = (hobbies: Hobbies) => (
	<div className={s.hobbies}>
		<h2>Hobbies</h2>
		<ReactMarkdown source={hobbies.content} />
	</div>
);
export default Hobbies;
