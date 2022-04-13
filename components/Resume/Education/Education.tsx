import React from 'react';
import ReactMarkdown from 'react-markdown';
import s from '../Resume.module.scss';
import { gql } from 'urql';
// import { EducationFragmentFragment } from '../../../apollo/gql/graphql';

export const EducationFragment = gql`
  fragment EducationFragment on Resume {
    Education
  }
`;

const Education = (education): JSX.Element => {
  return (
    <div className={s.education}>
      <h2>Education</h2>
      <ReactMarkdown>{education.edu}</ReactMarkdown>
    </div>
  );
};

Education.displayName = 'Education';

Education.fragments = {
  EducationFragment: EducationFragment,
};

export default Education;
