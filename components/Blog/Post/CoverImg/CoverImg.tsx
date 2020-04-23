import React from 'react';
import Img from '../../../Other/Img/Img';
import s from './CoverImg.module.scss';

type PostImg = {
  title: string;
  placeholder: string;
  url: string;
  alt: string;
};

const Image = (PostImg: PostImg): JSX.Element => (
  <div className={s.postImg}>
    <h1>{PostImg.title}</h1>
    <Img class={s.postImg} url={PostImg.url} placeholder={PostImg.placeholder} alt={`Image for ${PostImg.alt}`} />
  </div>
);

export default Image;
