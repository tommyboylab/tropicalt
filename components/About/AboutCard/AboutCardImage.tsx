const s = require('../AboutCards.scss');

export default img => <img className={s.aboutCardImg} src={`http://127.0.0.1:1337${img.url}`} />;
