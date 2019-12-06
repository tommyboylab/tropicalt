// import Layout from '../components/Layout/Layout'
// import Link from 'next/link'
// import "./about.scss";
import Nav from '../components/Nav/Nav';
// import Footer from '../components/Nav/Footer';
import AboutCards from '../components/About/AboutCards';

export default function Home() {
    return (
        <main>
            <Nav />
            <AboutCards />
            {/*<Footer />*/}
        </main>
    );
}
