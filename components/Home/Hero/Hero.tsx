import React, { SetStateAction, useEffect, useState } from 'react';
import s from './Hero.module.scss';
import Img from '../../Other/Img/Img';
import { gql, DocumentType } from '@app/gql';

const HeroFragment = gql(`
  fragment HeroFragment on Query {
  home {
    data {
      attributes {
        Hero {
          id
          Img {
            img {
              data {
                attributes {
                  url
                  hash
                }
              }
            }
          }
          Caption
        }
      }
    }
  }
}
`);

const Hero = ({ home }: DocumentType<typeof HeroFragment>): JSX.Element => {
  const heroData = home?.data?.attributes?.Hero;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextHero = (): SetStateAction<void> => {
    setCurrentIndex(currentIndex === Number(heroData?.length) - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const clear = setInterval(nextHero, 5000);
    return (): void => {
      clearTimeout(clear);
    };
  });

  return (
    <>
      {heroData &&
        heroData.map((heroData, index: number) => (
          <div
            className={s.imageBanner}
            key={heroData?.id}
            style={{
              animation: `${currentIndex === index ? 'fadeInOut' : 'fadeOut'} 5s infinite ease-in-out`,
            }}>
            <h1>{heroData?.Caption}</h1>
            <Img
              key={heroData?.id}
              id={heroData?.id}
              class={s.imageBanner}
              url={heroData?.Img?.[0]?.img?.data?.attributes?.url}
              placeholder={`/uploads/sqip_${String(heroData?.Img?.[0]?.img?.data?.attributes?.hash)}.svg`}
              alt={`Image for ${String(heroData?.Caption)}`}
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

Hero.fragments = {
  HeroFragment,
};

export default Hero;
