const s = require('../components/Other/Layout/Blog.scss');
import Nav from '../components/Nav/Nav';
import Footer from '../components/Nav/Footer';
import Header from '../components/Blog/Post/Header/Header';
import Sidebar from '../components/Blog/Post/Sidebar/Sidebar';
import List from '../components/Blog/List';

export default function Blog() {
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
