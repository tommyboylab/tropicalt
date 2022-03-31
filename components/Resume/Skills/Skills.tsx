import React from 'react';
import ReactMarkdown from 'react-markdown';
import s from '../Resume.module.scss';
import { gql } from '@app/gql';
import { SkillsFragmentFragment } from '../../../apollo/gql/graphql';

const SkillsFragment = gql(`
  fragment SkillsFragment on Resume {
    skills
  }
`);

const Skills = (skills: SkillsFragmentFragment): JSX.Element => {
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
