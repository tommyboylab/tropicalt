import React, { CSSProperties } from 'react';
import Image from 'next/image';

type Img = {
  id?: string;
  class: string;
  url?: string;
  alt: string;
  placeholder: string;
  style?: CSSProperties;
  layout?: string;
};

const ImgComp = (Img: Img): JSX.Element => {
  return (
    <Image
      style={{ backgroundImage: `url(https://api.tropicalt.ca${Img.placeholder})` }}
      id={Img.id}
      className={Img.class}
      src={`https://api.tropicalt.ca${String(Img.url)}`}
      loading='lazy'
      alt={Img.alt}
      sizes='100%'
      width='100%'
      height='100%'
      layout='raw'
    />
  );
};
export default ImgComp;
