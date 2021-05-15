import React from 'react';
import ReactMarkdown from 'react-markdown';
import s from '../Resume.module.scss';
import gql from 'graphql-tag';

type Education = {
  edu: string;
};

const EducationFragment = gql`
  fragment EducationFragment on Resume {
    edu
  }
`;

const Education = (education: any): JSX.Element => {
  education = education.data?.resume as Education;
  return (
    <div className={s.education}>
      <h2>Education</h2>
      <ReactMarkdown children={education.edu} />
    </div>
  );
};

Education.displayName = 'Education';

Education.fragments = {
  EducationFragment: EducationFragment,
};

export default Education;
