import React from 'react';
import Contact from '../components/Contact/Contact';
import Nav from '../components/Nav/Nav';
const s = require('../components/Other/Layout/Contact.scss');

export default function ContactPage() {
	return (
		<main className={s.layout}>
			<Nav />
			<Contact />
		</main>
	);
}
