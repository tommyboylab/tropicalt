import React from 'react';
import '../components/Other/Layout/Home.scss';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Nav/Footer';
import RecentPosts from '../components/Home/Recents/Posts/RecentPosts';
import RecentAlbums from '../components/Home/Recents/Albums/RecentAlbums';
import ImgB from '../components/Home/Hero/Hero';
import Bio from '../components/Home/Bio/Bio';

export default function Home() {
    return (
        <main>
            <Nav />
            <ImgB />
            <Bio />
            <RecentPosts />
            <RecentAlbums />
            <Footer />
        </main>
    );
}
