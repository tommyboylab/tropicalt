const s = require('../AboutCards.scss');

export default text => (
    <div className={s.aboutCardText}>
        <h2>{text.title}</h2>
        <p>{text.excerpt}</p>
    </div>
);
