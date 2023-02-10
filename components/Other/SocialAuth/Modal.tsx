import React, { MouseEventHandler, SetStateAction, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import s from './Modal.module.scss';
import SocialButton from './Button/Button';
import { setCookie } from 'nookies';

type Toggle = {
  toggle: CallableFunction;
  content: CallableFunction;
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
  const receiveAuthInfo = (e: { origin: string; data: string }) => {
    if (e.origin !== 'https://tropicalt.ca') {
      return;
    }
    const { data } = e;

    setCookie(undefined, 'token', data, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
  };

  useEffect(() => {
    window.addEventListener('message', receiveAuthInfo);
  }, []);

  return (
    <ToggleContent
      toggle={(show: MouseEventHandler): JSX.Element => (
        <div className={s.modalContainer}>
          <h3 className={s.modalHeader}>Would you like to know a secret? </h3>
          <button
            className={s.modalToggle}
            onClick={(event) => {
              event.preventDefault();
              show(event);
            }}>
            Click Me
          </button>
        </div>
      )}
      content={(hide: MouseEventHandler): JSX.Element => (
        <Modal>
          <h3 className={s.modalHeader}>Choose your weapon:</h3>
          <SocialButton provider='facebook' />
          <SocialButton provider='twitter' />
          <SocialButton provider='google' />
          <SocialButton provider='github' />
          <button onClick={hide}>Close</button>
        </Modal>
      )}
    />
  );
};

export default Toggle;

Modal.displayName = 'Modal';
