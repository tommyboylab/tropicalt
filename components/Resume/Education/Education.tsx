import ReactMarkdown from 'react-markdown';

interface Education {
	content: string;
}

const s = require('../Resume.scss');

export default (Education: Education) => (
	<div className={s.education}>
		<h2>Education</h2>
		<ReactMarkdown source={Education.content} />
	</div>
);
