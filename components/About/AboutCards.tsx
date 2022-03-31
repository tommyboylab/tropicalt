import React, { Fragment } from 'react';
import { gql, DocumentType } from '@app/gql';
import Text from './AboutCard/AboutCardText';
import Img from '../Other/Img/Img';
import s from './AboutCards.module.scss';

const AboutCardFragment = gql(`
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
`);

const AboutCards = ({ aboutCards }: DocumentType<typeof AboutCardFragment>): JSX.Element => {
  return (
    <>
      {aboutCards?.map((aboutCard) => {
        return (
          <Fragment key={aboutCard?.id}>
            <Img
              class={s.aboutCardImg}
              url={String(aboutCard?.img?.img?.url)}
              placeholder={`/uploads/${String(aboutCard?.img?.img?.hash)}-thumb.svg`}
              alt={`Image for ${String(aboutCard?.title)}`}
            />
            <Text title={String(aboutCard?.title)} excerpt={String(aboutCard?.excerpt)} />
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
