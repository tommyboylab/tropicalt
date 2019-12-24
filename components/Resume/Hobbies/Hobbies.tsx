import ReactMarkdown from 'react-markdown';

const s = require('../Resume.scss');

export default hobbies => (
    <div className={s.hobbies}>
        <h2>Hobbies</h2>
        <ReactMarkdown source={hobbies.content} />
    </div>
);
