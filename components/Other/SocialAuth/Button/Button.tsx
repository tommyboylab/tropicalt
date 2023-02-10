import React from 'react';
import s from './Button.module.scss';

const oauth = (provider: string) => {
    window.open(`${process.env.API}/api/connect/${provider}`, 'oauthWindow', 'width=500,height=600');
};
const SocialButton = ({ provider }: { provider: string }) => {
  return (
    <button onClick={() => oauth(provider)} className={s.link} type='button'>
      <img src={`/static/images/social/${provider}_logo.svg`} />
    </button>
  );
};

export default SocialButton;
