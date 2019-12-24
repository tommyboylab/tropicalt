import React from 'react';
import ReactDOM from 'react-dom';
const s = require('./Modal.scss');

export const ToggleContent = ({ toggle, content }) => {
    const [isShown, setIsShown] = React.useState(false);
    const hide = () => setIsShown(false);
    const show = () => setIsShown(true);

    return (
        <React.Fragment>
            {toggle(show)}
            {isShown && content(hide)}
        </React.Fragment>
    );
};

export const Modal = ({ children }) =>
    ReactDOM.createPortal(
        <div className={s.modalOverlay}>
            <div className={s.modal}>{children}</div>
        </div>,
        document.getElementById('__next')
    );
