import React from 'react';
import s from '../Resume.module.scss';

type Footer = {
	email: string;
};

const Footer = (footer: Footer): JSX.Element => (
	<div className={s.contact}>
		<p>
			Contact Information:
			<a href={`mailto:${footer.email}`}>Email</a>
		</p>
	</div>
);

export default Footer;
