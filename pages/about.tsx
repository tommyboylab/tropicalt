// import Layout from '../components/Layout/Layout'
// import Link from 'next/link'
const s = require('../components/Other/Layout/About.scss');
import Nav from '../components/Nav/Nav';
import AboutCards from '../components/About/AboutCards';

export default function Home() {
	return (
		<main className={s.layout}>
			<Nav />
			<AboutCards />
		</main>
	);
}
