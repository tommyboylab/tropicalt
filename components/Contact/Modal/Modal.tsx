import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import s from './Modal.module.scss';

type Toggle = {
	toggle: Function;
	content: Function;
};

export const ToggleContent = ({ toggle, content }: Toggle) => {
	const [isShown, setIsShown] = useState(false);
	const hide = () => setIsShown(false);
	const show = () => setIsShown(true);

	return (
		<React.Fragment>
			{toggle(show)}
			{isShown && content(hide)}
		</React.Fragment>
	);
};

type Modal = {
	children: JSX.Element[];
};

export const Modal = ({ children }: Modal) =>
	ReactDOM.createPortal(
		<div className={s.modalOverlay}>
			<div className={s.modal}>{children}</div>
		</div>,
		document.getElementById('__next')!
	);
