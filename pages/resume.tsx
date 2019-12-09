const s = require('../components/Other/Layout/Resume.scss');
import Header from '../components/Resume/Nav/Header';
import Contact from '../components/Resume/Contact/Contact';
import Footer from '../components/Resume/Nav/Footer';
import Edu from '../components/Resume/Education/Education';
import WorkExp from '../components/Resume/WorkExp/WorkExp';
import HighlightImg from '../components/Resume/Image/Image';
import Hobbies from '../components/Resume/Hobbies/Hobbies';

export default function Blog() {
    return (
        <main className={s.layout}>
            <Header />
            <Contact />
            <WorkExp />
            <Edu />
            <HighlightImg />
            <Hobbies />
            <Footer />
        </main>
    );
}
