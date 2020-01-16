import ReactMarkdown from 'react-markdown';
const s = require('./Body.scss');
interface Content {
	content:string
}
export default (Content:Content) => (
	<div className={s.postText}>
		<ReactMarkdown source={Content.content} />
	</div>
);
