import React from 'react';
import ReactMarkdown from 'react-markdown';
import s from '../Resume.module.scss';
import { gql } from 'urql';
// import { SkillsFragmentFragment } from '../../../apollo/gql/graphql';

export const SkillsFragment = gql`
  fragment SkillsFragment on Resume {
    Skills
  }
`;

const Skills = (skills): JSX.Element => {
  return (
    <div className={s.skills}>
      <h2>Skills</h2>
      <ReactMarkdown>{skills.skills}</ReactMarkdown>
    </div>
  );
};

Skills.displayName = 'My Skills';

Skills.fragments = {
  SkillsFragment: SkillsFragment,
};
export default Skills;
