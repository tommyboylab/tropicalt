import React from 'react';
import Contact from '../components/Contact/Contact';
import Nav from '../components/Nav/Nav';
import s from '../components/Other/Layout/Contact.module.scss';

export default function ContactPage(): JSX.Element {
	return (
		<main className={s.layout}>
			<Nav />
			<Contact />
		</main>
	);
}
