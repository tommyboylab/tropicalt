import React from 'react';
import Img from '../../Other/Img/Img';
const s = require('../Resume.scss');

type Img = {
	url: string;
	placeholder: string;
	alt: string;
};

const Highlight = (highlightImg: Img) => (
	<div className={s.highlightImg}>
		<Img
			class={s.highlightImg.img}
			url={highlightImg.url}
			placeholder={highlightImg.placeholder}
			alt={`Image for ${highlightImg.alt}`}
		/>
	</div>
);

export default Highlight;
