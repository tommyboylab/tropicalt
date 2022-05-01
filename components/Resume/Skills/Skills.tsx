import React from 'react';
import ReactMarkdown from 'react-markdown';
import s from '../Resume.module.scss';
import { gql } from 'urql';

export const SkillsFragment = gql`
  fragment SkillsFragment on Resume {
    Skills
  }
`;

type SkillsType = {
  skills: string;
};

const Skills = ({ skills }: SkillsType): JSX.Element => {
  return (
    <div className={s.skills}>
      <h2>Skills</h2>
      <ReactMarkdown>{skills}</ReactMarkdown>
    </div>
  );
};

Skills.displayName = 'My Skills';

Skills.fragments = {
  SkillsFragment: SkillsFragment,
};
export default Skills;
