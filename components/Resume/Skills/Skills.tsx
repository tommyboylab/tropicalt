import React from 'react';
import ReactMarkdown from 'react-markdown';
import s from '../Resume.module.scss';

type Skills = {
	content: string;
};

const Skills = (skills: Skills): JSX.Element => (
	<div className={s.skills}>
		<h2>Skills</h2>
		<ReactMarkdown source={skills.content} />
	</div>
);

export default Skills;
