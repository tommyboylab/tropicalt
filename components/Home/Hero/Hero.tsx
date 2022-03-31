import React, { SetStateAction, useEffect, useState } from 'react';
import s from './Hero.module.scss';
import Img from '../../Other/Img/Img';
import { gql, DocumentType } from '@app/gql';

const ImgBFragment = gql(`
  fragment ImageBannerFragment on Query {
    hero(id: 1) {
      id
      hero {
        id
        title
        cover {
          img {
            id
            url
            hash
          }
        }
      }
    }
  }
`);

const ImgB = ({ hero }: DocumentType<typeof ImgBFragment>): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextHero = (): SetStateAction<void> => {
    setCurrentIndex(currentIndex === Number(hero?.hero?.length) - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const clear = setInterval(nextHero, 5000);
    return (): void => {
      clearTimeout(clear);
    };
  });

  return (
    <>
      {hero?.hero?.map((hero, index: number) => (
        <div
          className={s.imageBanner}
          key={hero?.id}
          style={{
            animation: `${currentIndex === index ? 'fadeInOut' : 'fadeOut'} 5s infinite ease-in-out`,
          }}>
          <h1>{hero?.title}</h1>
          <Img
            key={hero?.id}
            id={hero?.id}
            class={s.imageBanner}
            url={String(hero?.cover?.img?.url)}
            placeholder={`/uploads/${String(hero?.cover?.img?.hash)}-thumb.svg`}
            alt={`Image for ${String(hero?.title)}`}
          />
          <style global jsx>{`
            @keyframes fadeInOut {
              0% {
                opacity: 0;
                animation-timing-function: ease-in;
              }

              10% {
                opacity: 1;
                animation-timing-function: ease-out;
              }

              85% {
                opacity: 1;
              }

              100% {
                opacity: 0;
              }
            }

            @keyframes fadeOut {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 0;
              }
            }
          `}</style>
        </div>
      ))}
    </>
  );
};

ImgB.fragments = {
  HeroesFragment: ImgBFragment,
};

export default ImgB;
