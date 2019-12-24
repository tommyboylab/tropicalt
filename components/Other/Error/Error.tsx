const s = require('./Error.scss');
export default error => (
    <div className={s.error}>
        <img src="/static/err.png" />
        <h2>Well, I guess I F**ked Up</h2>
    </div>
);
