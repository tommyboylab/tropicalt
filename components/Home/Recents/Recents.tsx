import React from 'react';
import Link from 'next/link';
import Moment from 'react-moment';
import s from './Recents.module.scss';
import Img from '../../Other/Img/Img';

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
      <Img
        class={s.img}
        url={`${String(Recent.img)}`}
        placeholder={Recent.cover}
        alt={`Image for ${String(Recent.title)}`}
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
