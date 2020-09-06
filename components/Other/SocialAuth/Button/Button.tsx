import React from 'react';
import s from './Button.module.scss';

const oauth = (provider: string) => {
  window.open(`https://api.tropicalt.ca/connect/${provider}`, 'oauthWindow', 'width=350,height=250');
};
const SocialButton = ({ provider }: any) => {
  return (
    <button onClick={() => oauth(provider)} className={s.link} type='button'>
      {provider}
    </button>
  );
};

export default SocialButton;
