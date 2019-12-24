const s = require('../AboutCards.scss');

export default img => <img className={s.aboutCardImg} src={`https://api.tropicalt.ca${img.url}`} />;
