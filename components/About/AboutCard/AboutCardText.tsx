import React from 'react';
const s = require('../AboutCards.scss');

type Txt = {
	title: string;
	excerpt: string;
};

const Text = (Txt: Txt) => (
	<div className={s.aboutCardText}>
		<h2>{Txt.title}</h2>
		<p>{Txt.excerpt}</p>
	</div>
);

export default Text;
