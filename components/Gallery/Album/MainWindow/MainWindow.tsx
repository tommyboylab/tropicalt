import React from 'react';
import s from '../Album.module.scss';

type MainWindow = {
  src: string;
};

const MainWindow = ({ src }: MainWindow): JSX.Element => (
  <div className={s.mainPane}>
    <img src={src} />
  </div>
);

export default MainWindow;
