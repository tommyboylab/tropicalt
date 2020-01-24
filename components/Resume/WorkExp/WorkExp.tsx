import React from 'react';
import ReactMarkdown from 'react-markdown';
import s from '../Resume.module.scss';

type Work = {
	content: string;
};

const WorkExp = (workExp: Work) => (
	<div className={s.workHistory}>
		<h2>Work History</h2>
		<ReactMarkdown source={workExp.content} />
	</div>
);

export default WorkExp;
