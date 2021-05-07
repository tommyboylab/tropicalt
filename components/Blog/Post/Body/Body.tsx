import React from 'react';
import ReactMarkdown from 'react-markdown';
import s from './Body.module.scss';

type Content = {
  content: string;
};
const Body = (Content: Content): JSX.Element => (
  <div className={s.postText}>
    <ReactMarkdown children={Content.content} />
  </div>
);

export default Body;
