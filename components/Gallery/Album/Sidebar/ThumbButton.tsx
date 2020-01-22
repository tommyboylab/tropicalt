import React from 'react';

type Props = {
	src?: any;
	isActive?: any;
	setActive?: any;
	id?: string;
};

const ThumbButton = ({ isActive, setActive, id, src }: Props) => (
	<button onFocus={setActive} onClick={setActive}>
		<img id={id} src={src} />
	</button>
);
export default ThumbButton;
