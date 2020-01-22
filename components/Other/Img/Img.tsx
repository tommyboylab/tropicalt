import React from 'react';

type Img = {
	class: string;
	url: string;
	alt: string;
	placeholder: string;
};
const Image = (Img: Img) => (
	<img
		className={Img.class}
		src={`https://api.tropicalt.ca${Img.url}`}
		alt={Img.alt}
		style={{
			backgroundImage: `url(https://api.tropicalt.ca/${Img.placeholder})`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
		}}
	/>
);
export default Image;
