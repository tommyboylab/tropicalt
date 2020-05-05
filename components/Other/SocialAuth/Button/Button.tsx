import React from 'react';
import s from './Button.module.scss';
const SocialButton = ({ provider }: any) => {
  return (
    <a href={`https://api.tropicalt.ca/connect/${provider}`} className={s.link}>
      <button className={s[provider]} type='button'>
        {provider}
      </button>
    </a>
  );
};

export default SocialButton;
