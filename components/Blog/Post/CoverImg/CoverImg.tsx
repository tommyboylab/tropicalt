import React from 'react';
import Img from '../../../Other/Img/Img';
const s = require('./CoverImg.scss');

type PostImg = {
	title: string;
	placeholder: string;
	url: string;
	alt: string;
};
const Image = (PostImg: PostImg) => (
	<div className={s.postImg}>
		<h3>{PostImg.title}</h3>
		<Img class={s.postImg.img} url={PostImg.url} placeholder={PostImg.placeholder} alt={`Image for ${PostImg.alt}`} />
	</div>
);

export default Image;
