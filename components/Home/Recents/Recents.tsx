import React from 'react';
import Link from 'next/link';
import Moment from 'react-moment';
import s from './Recents.module.scss';

type Recent = {
  id?: string;
  type: string;
  slug: string | null;
  cover: string;
  img?: string;
  title?: string;
  date: string;
  name?: string;
  excerpt?: string;
};

const Recent = (Recent: Recent): JSX.Element => (
  <Link href={`/${Recent.type}/${String(Recent.slug)}`} as={`/${Recent.type}/${String(Recent.slug)}`}>
    <article
      id={Recent.id}
      className={`${s.recent}`}
      style={{ backgroundImage: `url(https://api.tropicalt.ca${Recent.cover})` }}>
      <img
        className={s.img}
        src={`https://api.tropicalt.ca${String(Recent.img)}`}
        alt={`Image for ${String(Recent.title)}`}
        loading='lazy'
      />
      <div className={`${s.content}`}>
        <h3 className={s.title}>{Recent.title}</h3>
        <ul className={s.detailsList}>
          <li className={s.details}>
            <Moment format='MMM Do YYYY'>{Recent.date}</Moment>
          </li>
          <li className={s.details}>{Recent.name}</li>
          <li className={s.details}>{Recent.excerpt}</li>
        </ul>
      </div>
    </article>
  </Link>
);

export default Recent;
