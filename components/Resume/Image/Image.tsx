import React from 'react';
import Img from '../../Other/Img/Img';
import s from '../Resume.module.scss';

type Img = {
  url: string;
  placeholder: string;
  alt: string;
};

const Highlight = (highlightImg: Img): JSX.Element => (
  <div className={s.highlightImg}>
    <Img
      class={s.highlightImg}
      url={highlightImg.url}
      placeholder={highlightImg.placeholder}
      alt={`Image for ${highlightImg.alt}`}
    />
  </div>
);

export default Highlight;
