import React from 'react';
import s from '../Resume.module.scss';

type Contact = {
	phone: string;
	address: string;
};

const Contact = (contact: Contact) => (
	<div className={s.contactInfo}>
		<p className={s.cellphone}>{contact.phone}</p>
		<p className={s.address}>{contact.address}</p>
	</div>
);

export default Contact;
