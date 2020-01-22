import React from 'react';
const s = require('../Resume.scss');

type Footer = {
	email: string;
};

const Footer = (footer: Footer) => (
	<div className={s.contact}>
		<p>
			Contact Information:
			<a href={`mailto:${footer.email}`}>Email</a>
		</p>
	</div>
);

export default Footer;
