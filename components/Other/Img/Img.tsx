import React, { CSSProperties } from 'react';
import Image from 'next/image';

type Img = {
  id?: string;
  class: string;
  url: string;
  alt: string;
  placeholder: string;
  style?: CSSProperties;
};

const placeholder = () => 'url(https://api.tropicalt.ca${Img.placeholder})';

const ImgComp = (Img: Img): JSX.Element => (
  <Image
    id={Img.id}
    className={Img.class}
    src={`https://api.tropicalt.ca${Img.url}`}
    loading='lazy'
    alt={Img.alt}
    layout='fill'
    objectFit='cover'
    loader={placeholder}
  />
);
export default ImgComp;
