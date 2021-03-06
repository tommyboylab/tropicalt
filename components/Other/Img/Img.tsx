import React from 'react';

type Img = {
  class: string;
  url: string;
  alt: string;
  placeholder: string;
  style?: React.CSSProperties;
};

const Image = (Img: Img): JSX.Element => (
  <img
    className={Img.class}
    src={`https://api.tropicalt.ca${Img.url}`}
    loading='lazy'
    alt={Img.alt}
    style={{
      backgroundImage: `url(https://api.tropicalt.ca${Img.placeholder})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      ...Img.style,
    }}
  />
);
export default Image;
