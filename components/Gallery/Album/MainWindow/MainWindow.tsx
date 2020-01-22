import React from 'react';
const s = require('../Album.scss');

type MainWindow = {
	src: any;
};

const MainWindow = ({ src }: MainWindow) => (
	<div className={s.mainPane}>
		<img src={src} />
	</div>
);

export default MainWindow;
