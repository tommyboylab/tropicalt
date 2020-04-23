import React from 'react';
import ReactMarkdown from 'react-markdown';
import s from '../Resume.module.scss';
import gql from 'graphql-tag';

type Skills = {
  skills: string;
};
const SkillsFragment = gql`
  fragment SkillsFragment on Resume {
    skills
  }
`;

const Skills = (skills: any): JSX.Element => {
  skills = skills.data?.resume as Skills;
  return (
    <div className={s.skills}>
      <h2>Skills</h2>
      <ReactMarkdown source={skills.skills} />
    </div>
  );
};

Skills.displayName = 'My Skills';

Skills.fragments = {
  SkillsFragment: SkillsFragment,
};
export default Skills;
