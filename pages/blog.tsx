import React from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Nav/Footer';
import Header from '../components/Blog/Header/Header';
import Sidebar from '../components/Blog/Post/Sidebar/Sidebar';
import List from '../components/Blog/List';
import s from '../components/Other/Layout/Blog.module.scss';

export default function Blog(): JSX.Element {
	return (
		<main className={s.layout}>
			<Nav />
			<Header />
			<List />
			<Sidebar />
			<Footer />
		</main>
	);
}
