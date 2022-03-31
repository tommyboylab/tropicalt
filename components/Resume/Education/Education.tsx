import React from 'react';
import ReactMarkdown from 'react-markdown';
import s from '../Resume.module.scss';
import { gql } from '@app/gql';
import { EducationFragmentFragment } from '../../../apollo/gql/graphql';

const EducationFragment = gql(`
  fragment EducationFragment on Resume {
    edu
  }
`);

const Education = (education: EducationFragmentFragment): JSX.Element => {
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
