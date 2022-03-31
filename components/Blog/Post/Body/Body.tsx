import React from 'react';
import ReactMarkdown from 'react-markdown';
import s from './Body.module.scss';

type Content = {
  content: string;
};
const Body = ({ content }: Content): JSX.Element => (
  <div className={s.postText}>
    <ReactMarkdown>{content}</ReactMarkdown>
  </div>
);

export default Body;
