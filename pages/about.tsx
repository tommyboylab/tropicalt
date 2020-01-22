import React from 'react';
import Nav from '../components/Nav/Nav';
import AboutCards from '../components/About/AboutCards';
const s = require('../components/Other/Layout/About.scss');

export default function Home() {
	return (
		<main className={s.layout}>
			<Nav />
			<AboutCards />
		</main>
	);
}
