import ReactMarkdown from 'react-markdown';

const s = require('../Resume.scss');

export default education => (
    <div className={s.education}>
        <h2>Education</h2>
        <ReactMarkdown source={education.content} />
        {/*<h3>University of Kent 2016-2017</h3>*/}
        {/*<p>Bachelor of Forensic Science</p>*/}
        {/*<img src="./static/images/Kent_University_Logo.png" />*/}
        {/*<h3>Trent University 2013-2018</h3>*/}
        {/*<p>BAS Joint Major: Forensic Science & Media Studies</p>*/}
        {/*<img src="./static/images/Trent_University_Logo.svg" />*/}
    </div>
);
