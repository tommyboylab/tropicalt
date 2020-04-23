import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import Text from './AboutCard/AboutCardText';
import Img from '../Other/Img/Img';
import s from './AboutCards.module.scss';

type AboutCard = [
  {
    img: { img: { id: string; url: string; hash: string } };
    id: string;
    title: string;
    excerpt: string;
  }
];

const AboutCardFragment = gql`
  fragment AboutCardFragment on Query {
    aboutCards {
      id
      title
      excerpt
      img {
        img {
          id
          url
          hash
        }
      }
    }
  }
`;

const AboutCards = (aboutCards: any): JSX.Element => {
  aboutCards = aboutCards.data?.aboutCards as AboutCard;

  return (
    <>
      {aboutCards.map((aboutCard: any) => {
        return (
          <Fragment key={aboutCard.id}>
            <Img
              class={s.aboutCardImg}
              url={aboutCard.img.img.url}
              placeholder={`/uploads/${aboutCard.img.img.hash}-thumb.svg`}
              alt={`Image for ${aboutCard.title}`}
            />
            <Text title={aboutCard.title} excerpt={aboutCard.excerpt} />
          </Fragment>
        );
      })}
    </>
  );
};

AboutCards.displayName = 'AboutCards';

AboutCards.fragments = {
  AboutCardFragment: AboutCardFragment,
};

export default AboutCards;
