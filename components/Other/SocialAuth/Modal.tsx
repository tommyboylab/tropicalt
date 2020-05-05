import React, { MouseEventHandler, SetStateAction, useState } from 'react';
import ReactDOM from 'react-dom';
import s from './Modal.module.scss';
import SocialButton from './Button/Button';

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

const Toggle = (): JSX.Element => {
  return (
    <ToggleContent
      toggle={(show: MouseEventHandler): JSX.Element => (
        <button
          className={s.submit}
          onClick={(event) => {
            event.preventDefault();
            show(event);
          }}>
          Social
        </button>
      )}
      content={(hide: MouseEventHandler): JSX.Element => (
        <Modal>
          <SocialButton provider='facebook' />
          <SocialButton provider='twitter' />
          <SocialButton provider='google' />
          <SocialButton provider='github' />
          <h2>Thanks for reaching out</h2>
          <p>{`I'll get back to you shortly.`}</p>
          <button onClick={hide}>Close</button>
        </Modal>
      )}
    />
  );
};

export default Toggle;

Modal.displayName = 'Modal';
