import React from 'react';
import ReactMarkdown from 'react-markdown';
import s from '../Resume.module.scss';
import { gql } from 'urql';
// import { HobbiesFragmentFragment } from '../../../apollo/gql/graphql';

export const HobbiesFragment = gql(`
  fragment HobbiesFragment on Resume {
    Hobbies
  }
`);

const Hobbies = (hobbies): JSX.Element => {
  return (
    <div className={s.hobbies}>
      <h2>Hobbies</h2>
      <ReactMarkdown>{hobbies.hobbies}</ReactMarkdown>
    </div>
  );
};

Hobbies.displayName = 'My Hobbies';

Hobbies.fragments = {
  HobbiesFragment: HobbiesFragment,
};
export default Hobbies;
