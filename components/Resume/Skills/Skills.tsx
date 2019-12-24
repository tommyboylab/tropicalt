import ReactMarkdown from 'react-markdown';

const s = require('../Resume.scss');

export default skills => (
    <div className={s.skills}>
        <h2>Skills</h2>
        <ReactMarkdown source={skills.content} />
    </div>
);
