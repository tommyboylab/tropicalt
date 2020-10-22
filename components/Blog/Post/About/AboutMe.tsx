import React from 'react';
import Avatar from '../../../Other/Avatar/Avatar';
import s from './AboutMe.module.scss';

const About = (aboutMe: any): JSX.Element => (
  <div className={s.postAbout}>
    <Avatar data={aboutMe.data} />
    <p>{`I'm just a simple man with a dream of building a personal website.`}</p>
    <a href='/about'>Read More...</a>
  </div>
);

About.displayName = 'About';

export default About;
