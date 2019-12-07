const s = require('./CoverImg.scss');

export default postImg => (
    <div className={s.postImg}>
        <h3>{postImg.title}</h3>
        <img src={`https://api.tropicalt.ca${postImg.url}`} />
    </div>
);
