import React from 'react';
import ReactMarkdown from 'react-markdown';
import s from '../Resume.module.scss';

type Education = {
	content: string;
};

const Education = (education: Education) => (
	<div className={s.education}>
		<h2>Education</h2>
		<ReactMarkdown source={education.content} />
	</div>
);

export default Education;
