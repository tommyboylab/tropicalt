import ReactMarkdown from 'react-markdown';

const s = require('../Resume.scss');
interface Work {
	content: string;
}

export default (WorkExp: Work) => (
	<div className={s.workHistory}>
		<h2>Work History</h2>
		<ReactMarkdown source={WorkExp.content} />
	</div>
);
