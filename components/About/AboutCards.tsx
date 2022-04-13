import React, { Fragment } from 'react';
import { gql } from 'urql';
import Text from './AboutCard/AboutCardText';
import Img from '../Other/Img/Img';
import s from './AboutCards.module.scss';

export const AboutCardFragment = gql(`
  fragment AboutCardFragment on Query {
  about {
    data {
      attributes {
        AboutCard {
          id
          Tagline
          Extension
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
        }
      }
    }
  }
  }
`);

const AboutCards = ({ aboutCards }): JSX.Element => {
  return (
    <>
      {aboutCards?.map((aboutCard) => {
        return (
          <Fragment key={aboutCard?.id}>
            <Img
              class={s.aboutCardImg}
              url={String(aboutCard?.Img[0].img.data.attributes.url)}
              placeholder={`/uploads/sqip_${String(aboutCard?.Img[0].img?.data.attributes.hash)}.svg`}
              alt={`Image for ${String(aboutCard?.Tagline)}`}
            />
            <Text title={String(aboutCard?.Tagline)} excerpt={String(aboutCard?.Extension)} />
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
