import React from 'react';
import ReactMarkdown from 'react-markdown';
import s from '../Resume.module.scss';

type Hobbies = {
  content: string;
};

const Hobbies = (hobbies: Hobbies): JSX.Element => (
  <div className={s.hobbies}>
    <h2>Hobbies</h2>
    <ReactMarkdown source={hobbies.content} />
  </div>
);
export default Hobbies;
