import React from 'react';
const s = require('./Error.scss');

const Err = () => (
	<div className={s.error}>
		<img src='/static/err.png' alt={`You've found an error my friend!'`} />
		<h2>Who you gonna call?</h2>
	</div>
);

export default Err;
