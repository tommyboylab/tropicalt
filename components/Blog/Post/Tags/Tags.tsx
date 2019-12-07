const s = require('./Tags.scss');

export default tags => (
    <ul className={s.postTags}>
            <li>Tag:</li>
        <li><a href="/">{tags.tag}</a></li>
    </ul>
);
