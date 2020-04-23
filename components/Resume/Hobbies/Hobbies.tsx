import React from 'react';
import ReactMarkdown from 'react-markdown';
import s from '../Resume.module.scss';
import gql from 'graphql-tag';

type Hobbies = {
  hobbies: string;
};

const HobbiesFragment = gql`
  fragment HobbiesFragment on Resume {
    hobbies
  }
`;

const Hobbies = (hobbies: any): JSX.Element => {
  hobbies = hobbies.data?.resume as Hobbies;

  return (
    <div className={s.hobbies}>
      <h2>Hobbies</h2>
      <ReactMarkdown source={hobbies.hobbies} />
    </div>
  );
};

Hobbies.displayName = 'My Hobbies';

Hobbies.fragments = {
  HobbiesFragment: HobbiesFragment,
};
export default Hobbies;
