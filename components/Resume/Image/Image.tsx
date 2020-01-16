import Img from '../../Other/Img/Img';
import React from 'react';

const s = require('../Resume.scss');

interface Img {
	url: string;
	placeholder: string;
	alt: string;
}

export default (highlightImg: Img) => (
	<div className={s.highlightImg}>
		<Img
			class={s.highlightImg.img}
			url={highlightImg.url}
			placeholder={highlightImg.placeholder}
			alt={`Image for ${highlightImg.alt}`}
		/>
	</div>
);
