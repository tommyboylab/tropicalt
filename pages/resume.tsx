import React from 'react';
import Resume from '../components/Resume/Resume';
const s = require('../components/Other/Layout/Resume.module.scss');

export default function Blog() {
	return (
		<main className={s.layout}>
			<Resume />
		</main>
	);
}
