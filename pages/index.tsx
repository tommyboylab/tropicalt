import React from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Nav/Footer';
import RecentPosts from '../components/Home/Recents/Posts/RecentPosts';
import RecentAlbums from '../components/Home/Recents/Albums/RecentAlbums';
import ImgB from '../components/Home/Hero/Hero';
import Bio from '../components/Home/Bio/Bio';
import s from '../components/Other/Layout/Home.module.scss';

export default function Home(): JSX.Element {
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
