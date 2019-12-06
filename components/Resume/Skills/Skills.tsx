const s = require('../Resume.scss');

export default () => (
    <div className={s.skills}>
        <h2>Skills</h2>
        <h3>Hard Skills</h3>
        <ul>
            <li>Test Case Creation, Documentation, Reporting</li>
            <li>iOS, Android, Automated E2E Testing</li>
            <li>React, Apollo, Expo, GraphQL</li>
        </ul>
        <h3>Soft Skills</h3>
        <ul>
            <li>Communication</li>
            <li>Critical Thinking</li>
            <li>Attention to Detail</li>
        </ul>
    </div>
);
