import React from 'react';
import Markdown from 'markdown-to-jsx';
import s from '../Resume.module.scss';
import { gql } from 'urql';

export const EducationFragment = gql`
  fragment EducationFragment on Resume {
    Education
  }
`;

type EducationType = {
  edu: string;
};

const Education = ({ edu }: EducationType): JSX.Element => {
  return (
    <div className={s.education}>
      <h2>Education</h2>
      <Markdown>{edu}</Markdown>
    </div>
  );
};

Education.displayName = 'Education';

Education.fragments = {
  EducationFragment: EducationFragment,
};

export default Education;
