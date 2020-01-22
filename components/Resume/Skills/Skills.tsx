import React from 'react';
import ReactMarkdown from 'react-markdown';
const s = require('../Resume.scss');

type Skills = {
	content: string;
};

const Skills = (skills: Skills) => (
	<div className={s.skills}>
		<h2>Skills</h2>
		<ReactMarkdown source={skills.content} />
	</div>
);

export default Skills;
