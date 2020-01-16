const s = require('./Error.scss');
export default (err:any) => (
	<div className={s.error}>
		<img src='/static/err.png' />
		<h2>Who you gonna call?</h2>
	</div>
);
