import React from 'react';
import s from './Button.module.scss';

const oauth = (provider: string) => {
  window.open(`https://api.tropicalt.ca/connect/${provider}`, 'oauthWindow', 'width=500,height=600');
};
const SocialButton = ({ provider }: any) => {
  return (
    <button onClick={() => oauth(provider)} className={s.link} type='button'>
      <img src={`/static/images/social/${provider}.svg`} />
    </button>
  );
};

export default SocialButton;
