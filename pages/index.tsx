import React from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Nav/Footer';
import RecentPosts from '../components/Home/Recents/Posts/RecentPosts';
import RecentAlbums from '../components/Home/Recents/Albums/RecentAlbums';
import ImgB from '../components/Home/Hero/Hero';
import Bio from '../components/Home/Bio/Bio';
const s = require('../components/Other/Layout/Home.scss');

export default function Home() {
	return (
		<main className={s.layout}>
			<Nav />
			<ImgB />
			<Bio />
			<RecentPosts />
			<RecentAlbums />
			<Footer />
		</main>
	);
}
