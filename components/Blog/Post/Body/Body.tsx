import ReactMarkdown from 'react-markdown';
const s = require('./Body.scss');
export default content => (
    <div className={s.postText}>
        <ReactMarkdown source={content.content} />
    </div>
);
