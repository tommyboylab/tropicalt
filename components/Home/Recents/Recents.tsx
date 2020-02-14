import React from 'react';
import Link from 'next/link';
import Moment from 'react-moment';
import s from './Recents.module.scss';

type Recent = {
	id: string;
	type: string;
	slug: string;
	cover: string;
	title: string;
	date: string;
	name: string;
	excerpt: string;
};

const Recent = (Recent: Recent): JSX.Element => (
	<Link href={`/${Recent.type}/${Recent.slug}`} as={`/${Recent.type}/${Recent.slug}`}>
		<article
			id={Recent.id}
			className={s.recent}
			style={{ backgroundImage: `url(https://api.tropicalt.ca${Recent.cover})` }}>
			<h3 className={s.title}>{Recent.title}</h3>
			<ul className={s.detailsList}>
				<li className={s.details}>
					<Moment format='MMM Do YYYY'>{Recent.date}</Moment>
				</li>
				<li className={s.details}>{Recent.name}</li>
				<li className={s.details}>{Recent.excerpt}</li>
			</ul>
		</article>
	</Link>
);

export default Recent;
