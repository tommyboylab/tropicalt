import React from 'react';
import Markdown from 'markdown-to-jsx';
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
      <Markdown>{skills}</Markdown>
    </div>
  );
};

Skills.displayName = 'My Skills';

Skills.fragments = {
  SkillsFragment: SkillsFragment,
};
export default Skills;
