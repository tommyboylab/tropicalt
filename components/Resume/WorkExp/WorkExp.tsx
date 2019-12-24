import ReactMarkdown from 'react-markdown';

const s = require('../Resume.scss');

export default workExp => (
    <div className={s.workHistory}>
        <h2>Work History</h2>
        <ReactMarkdown source={workExp.content} />
    </div>
);
