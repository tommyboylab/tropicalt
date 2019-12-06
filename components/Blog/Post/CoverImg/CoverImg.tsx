const s = require('./CoverImg.scss');

export default postImg => (
    <div className={s.postImg}>
        <h3>{postImg.title}</h3>
        <img src={`http://127.0.0.1:1337${postImg.url}`} />
    </div>
);
