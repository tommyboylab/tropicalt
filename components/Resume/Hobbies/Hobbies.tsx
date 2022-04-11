import React from 'react';
import ReactMarkdown from 'react-markdown';
import s from '../Resume.module.scss';
import { gql } from '@app/gql';
// import { HobbiesFragmentFragment } from '../../../apollo/gql/graphql';

const HobbiesFragment = gql(`
  fragment HobbiesFragment on Resume {
    hobbies
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
