import React from 'react';
import s from './Footer.module.scss';
import {motion} from "framer-motion";

const Footer = (): JSX.Element => {
  return (
    <motion.footer className={s.footer}>
      <motion.h3>Made by Thomas Fiala with a little help from Education</motion.h3>
    </motion.footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
