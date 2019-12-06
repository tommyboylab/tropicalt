import Avatar from '../../../Other/Avatar/Avatar';
const s = require('./AboutMe.scss');
export default () => (
    <div className={s.postAbout}>
        <Avatar />
        <p>I'm just a simple man with a dream of building a personal website.</p>
        <a>Read More...</a>
    </div>
);
