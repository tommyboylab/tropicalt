import React from 'react';
import Markdown from 'markdown-to-jsx';
import s from '../Resume.module.scss';
import { gql } from 'urql';

export const HobbiesFragment = gql(`
  fragment HobbiesFragment on Resume {
    Hobbies
  }
`);

type HobbyType = {
  hobbies: string;
};

const Hobbies = ({ hobbies }: HobbyType): JSX.Element => {
  return (
    <div className={s.hobbies}>
      <h2>Hobbies</h2>
      <Markdown>{hobbies}</Markdown>
    </div>
  );
};

Hobbies.displayName = 'My Hobbies';

Hobbies.fragments = {
  HobbiesFragment: HobbiesFragment,
};
export default Hobbies;
