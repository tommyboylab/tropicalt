import React, { FocusEventHandler, MouseEventHandler } from 'react';

type Props = {
  src: string;
  setActive: (FocusEventHandler<HTMLButtonElement> & MouseEventHandler<HTMLButtonElement>) | undefined;
  id: string;
};

const ThumbButton = ({ setActive, id, src }: Props): JSX.Element => (
  <button onFocus={setActive} onClick={setActive}>
    <img id={id} src={src} alt={'Thumbnail Button'} />
  </button>
);
export default ThumbButton;
