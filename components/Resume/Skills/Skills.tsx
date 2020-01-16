import ReactMarkdown from 'react-markdown';

const s = require('../Resume.scss');
interface Skills {
	content: string;
}

export default (Skills: Skills) => (
	<div className={s.skills}>
		<h2>Skills</h2>
		<ReactMarkdown source={Skills.content} />
	</div>
);
