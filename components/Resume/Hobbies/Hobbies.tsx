import ReactMarkdown from 'react-markdown';

const s = require('../Resume.scss');

interface Hobbies {
	content: string;
}

export default (Hobbies: Hobbies) => (
	<div className={s.hobbies}>
		<h2>Hobbies</h2>
		<ReactMarkdown source={Hobbies.content} />
	</div>
);
