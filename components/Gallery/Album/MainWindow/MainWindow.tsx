import React from 'react';
import s from '../Album.module.scss';

type MainWindow = {
	src: any;
};

const MainWindow = ({ src }: MainWindow) => (
	<div className={s.mainPane}>
		<img src={src} />
	</div>
);

export default MainWindow;
