import * as React from 'react';
import Link from 'next/link';
import Moment from 'react-moment';
const s = require('./Recents.scss');

export default Recent => (
    <Link href={`/${Recent.type}/${Recent.slug}`} as={`/${Recent.type}/${Recent.slug}`}>
        <article
            className={s.recent}
            style={{ backgroundImage: `url(http://127.0.0.1:1337${Recent.coverImg})` }}
        >
            <h3 className={s.title}>{Recent.title}</h3>
            <ul className={s.detailsList}>
                <li className={s.details}>
                    <Moment format="MMM Do YYYY">{Recent.date}</Moment>
                </li>
                <li className={s.details}>{Recent.name}</li>
                <li className={s.details}>{Recent.excerpt}</li>
            </ul>
        </article>
    </Link>
);
