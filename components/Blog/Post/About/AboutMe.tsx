import React from 'react';
import Avatar from '../../../Other/Avatar/Avatar';
import s from './AboutMe.module.scss';

const About = () => (
	<div className={s.postAbout}>
		<Avatar />
		<p>I'm just a simple man with a dream of building a personal website.</p>
		<a>Read More...</a>
	</div>
);

export default About;
