const s = require('../Resume.scss');

export default highlightImg => (
    <div className={s.highlightImg}>
        <img src={`https://api.tropicalt.ca${highlightImg.url}`} />
    </div>
);
