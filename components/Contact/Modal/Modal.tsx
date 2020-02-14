import React, { SetStateAction, useState } from 'react';
import ReactDOM from 'react-dom';
import s from './Modal.module.scss';

type Toggle = {
	toggle: Function;
	content: Function;
};

export const ToggleContent = ({ toggle, content }: Toggle): JSX.Element => {
	const [isShown, setIsShown] = useState(false);
	const hide = (): SetStateAction<void> => setIsShown(false);
	const show = (): SetStateAction<void> => setIsShown(true);

	return (
		<>
			{toggle(show)}
			{isShown && content(hide)}
		</>
	);
};

type Modal = {
	children: JSX.Element[];
};

export const Modal = ({ children }: Modal): JSX.Element =>
	ReactDOM.createPortal(
		<div className={s.modalOverlay}>
			<div className={s.modal}>{children}</div>
		</div>,
		document.getElementById('__next')!
	);
