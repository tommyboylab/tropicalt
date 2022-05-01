import React from 'react';
import Avatar from '../../../Other/Avatar/Avatar';
import s from './AboutMe.module.scss';

type About = {
  img?:
    | {
        __typename?: 'UploadFileEntityResponse';
        data?: {
          __typename?: 'UploadFileEntity';
          id?: string | null;
          attributes?: { __typename?: 'UploadFile'; url: string; hash: string } | null;
        } | null;
      }
    | undefined;
};

const About = ({ img }: About): JSX.Element => (
  <div className={s.postAbout}>
    <Avatar img={img} />
    <p>{`I'm just a simple man with a dream of building a personal website.`}</p>
    <a href='/about'>Read More...</a>
  </div>
);

About.displayName = 'About';

export default About;
