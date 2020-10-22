import React from 'react';
import s from './Load.module.scss';

const Loading = (): JSX.Element => <img className={s.load} src='/static/load.gif' alt='Loading...' />;

export default Loading;
