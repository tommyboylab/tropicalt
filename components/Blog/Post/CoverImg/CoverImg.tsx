import React from 'react';
import Img from '../../../Other/Img/Img';
import s from './CoverImg.module.scss';
import {motion} from "framer-motion";

type PostImg = {
  title: string;
  placeholder: string;
  url: string;
  alt: string;
};

const Image = (PostImg: PostImg): JSX.Element => (
  <motion.div className={s.postImg}>
    <motion.h1>{PostImg.title}</motion.h1>
    <Img class={s.postImg} url={PostImg.url} placeholder={PostImg.placeholder} alt={`Image for ${PostImg.alt}`} />
  </motion.div>
);

export default Image;
