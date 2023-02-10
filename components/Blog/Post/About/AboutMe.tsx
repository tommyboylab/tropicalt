import React from 'react';
import Avatar from '../../../Other/Avatar/Avatar';
import s from './AboutMe.module.scss';
import {motion} from "framer-motion";

type About = {
  img?:
    | {
        __typename?: 'UploadFileEntityResponse';
        data?: {
          __typename?: 'UploadFileEntity';
          id?: string | null;
          attributes?: { __typename?: 'UploadFile'; url: string; hash: string } | null;
        } | null;
      }
    | undefined;
};

const About = ({ img }: About): JSX.Element => (
  <motion.div className={s.postAbout}>
    <Avatar img={img} />
    <motion.p>{`I'm just a simple man with a dream of building a personal website.`}</motion.p>
    <motion.a href='/about'>Read More...</motion.a>
  </motion.div>
);

About.displayName = 'About';

export default About;
