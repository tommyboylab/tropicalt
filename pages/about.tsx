import React from 'react';
import Nav from '../components/Nav/Nav';
import AboutCards from '../components/About/AboutCards';
import s from '../components/Other/Layout/About.module.scss';

export default function Home(): JSX.Element {
	return (
		<main className={s.layout}>
			<Nav />
			<AboutCards />
		</main>
	);
}
