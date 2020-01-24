import React from 'react';
import ReactMarkdown from 'react-markdown';
import s from './Body.module.scss';

type Content = {
	content: string;
};
const Body = (Content: Content) => (
	<div className={s.postText}>
		<ReactMarkdown source={Content.content} />
	</div>
);

export default Body;
