import * as React from 'react';
import Link from 'next/link';
import Moment from 'react-moment';
const s = require('./Recents.scss');

interface Recent {
	id: string;
	type: string;
	slug: string;
	cover: string;
	title: string;
	date: string;
	name: string;
	excerpt: string;
}

export default (Recent: Recent) => (
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
