import React from 'react';

type Props = {
  src: string;
  setActive: any;
  id: string;
};

const ThumbButton = ({ setActive, id, src }: Props): JSX.Element => (
  <button onFocus={setActive} onClick={setActive}>
    <img id={id} src={src} />
  </button>
);
export default ThumbButton;
