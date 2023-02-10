import React from 'react';
import Markdown from 'markdown-to-jsx';
import s from './Body.module.scss';
import {motion} from "framer-motion";

type Content = {
  content: string;
};
const Body = ({ content }: Content): JSX.Element => (
  <motion.div className={s.postText}>
    <Markdown>{content}</Markdown>
  </motion.div>
);

export default Body;
