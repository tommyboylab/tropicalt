import React from 'react';
import Resume from '../components/Resume/Resume';
import s from '../components/Other/Layout/Resume.module.scss';

export default function ResumePage(): JSX.Element {
	return (
		<main className={s.layout}>
			<Resume />
		</main>
	);
}
