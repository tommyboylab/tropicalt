import React, { SetStateAction, useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Load from '../../Other/Load/Load';
import Err from '../../Other/Error/Error';
import s from './Hero.module.scss';
import Img from '../../Other/Img/Img';

export type Heroes = [
  {
    id: number;
    title: string;
    cover: { img: { id: string; url: string }; placeholder: { id: string; url: string } };
  }
];
const getImgB = gql`
  query getImageBanner {
    hero(id: 1) {
      id
      hero {
        id
        title
        cover {
          img {
            id
            url
          }
          placeholder {
            id
            url
          }
        }
      }
    }
  }
`;

const ImgB = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data, error, loading } = useQuery(getImgB);

  const heroes = data?.hero?.hero as Heroes;

  const nextHero = (): SetStateAction<void> => {
    setCurrentIndex(currentIndex === heroes.length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const clear = setInterval(nextHero, 5000);
    return (): void => {
      clearTimeout(clear);
    };
  });

  if (loading && !data) return <Load />;
  if (error) return <Err />;

  return (
    <>
      {heroes.map((hero, index) => (
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
            placeholder={hero.cover.placeholder.url}
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
      ))}
    </>
  );
};

export default ImgB;
