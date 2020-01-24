import React from 'react';
import s from '../AboutCards.module.scss';

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
