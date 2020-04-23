import React, { SetStateAction, useEffect, useState } from 'react';
import s from './Hero.module.scss';
import Img from '../../Other/Img/Img';
import gql from 'graphql-tag';

export type Heroes = [
  {
    id: number;
    title: string;
    cover: { img: { id: string; url: string; hash: string } };
  }
];

const ImgBFragment = gql`
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
`;

const ImgB = (heroes: any): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  heroes = heroes.data?.hero?.hero as Heroes;

  const nextHero = (): SetStateAction<void> => {
    setCurrentIndex(currentIndex === heroes.length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const clear = setInterval(nextHero, 5000);
    return (): void => {
      clearTimeout(clear);
    };
  });

  return (
    <>
      {heroes.map(
        (
          hero: { id: string | number | undefined; title: React.ReactNode; cover: { img: { url: string; hash: any } } },
          index: number
        ) => (
          <div
            className={s.imageBanner}
            key={hero.id}
            style={{
              animation: `${currentIndex === index ? 'fadeInOut' : 'fadeOut'} 5s infinite ease-in-out`,
            }}>
            <h1>{hero.title}</h1>
            <Img
              class={s.imageBanner}
              url={hero.cover.img.url}
              placeholder={`/uploads/${hero.cover.img.hash}-thumb.svg`}
              alt={`Image for ${hero.title}`}
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
        )
      )}
    </>
  );
};

ImgB.fragments = {
  HeroesFragment: ImgBFragment,
};

export default ImgB;
