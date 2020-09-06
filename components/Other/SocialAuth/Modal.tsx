import React, { MouseEventHandler, SetStateAction, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import s from './Modal.module.scss';
import SocialButton from './Button/Button';
import { setCookie } from 'nookies';

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
  const receiveAuthInfo = (e: any) => {
    if (e.origin !== 'https://www.tropicalt.ca') {
      console.log('wrong origin', { origin });
      return;
    }
    const { data } = e;
    console.log('real data', data);
    if (data.source === 'oauthWindow') {
      setCookie(undefined, 'token', data, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('message', receiveAuthInfo);
  }, []);

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
          <button onClick={hide}>Close</button>
        </Modal>
      )}
    />
  );
};

export default Toggle;

Modal.displayName = 'Modal';
