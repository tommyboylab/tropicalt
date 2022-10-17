import React from 'react';
import Markdown from 'markdown-to-jsx';
import s from './Body.module.scss';

type Content = {
  content: string;
};
const Body = ({ content }: Content): JSX.Element => (
  <div className={s.postText}>
    <Markdown>{content}</Markdown>
  </div>
);

export default Body;
