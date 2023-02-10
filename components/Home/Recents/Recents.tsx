import React, {useRef} from 'react';
import Link from 'next/link';
import Moment from 'react-moment';
import s from './Recents.module.scss';
import Img from '../../Other/Img/Img';
import {motion, useDeprecatedInvertedScale} from 'framer-motion'

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
  sidebar?: boolean;
};

export const openSpring = { type: "spring", stiffness: 200, damping: 30 };
export const closeSpring = { type: "spring", stiffness: 300, damping: 35 };


const Recent = (Recent: Recent): JSX.Element => {
    const imageRef = useRef(null);
    const springConfig = { type: "spring", stiffness: 200, damping: 30 };

//    const inverted = useDeprecatedInvertedScale();

    return(
        <motion.article
            layout='size'
            layoutScroll
            ref={imageRef}
            layoutId={`${Recent.sidebar? 'sidebar' : 'main'}- ${Recent.id}`}
            transition={springConfig}
            whileTap={{ scale: 0.98 }}
            id={Recent.id}
            className={`${s.recent}`}
            style={{ backgroundImage: `url(${process.env.API}${Recent.cover})` }}>
            <Link href={`/${Recent.type}/${String(Recent.slug)}`} as={`/${Recent.type}/${String(Recent.slug)}`}>
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
            </Link>
        </motion.article

>
        )};

export default Recent;
