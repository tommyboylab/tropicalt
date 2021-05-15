import React from 'react';
import ReactMarkdown from 'react-markdown';
import s from '../Resume.module.scss';
import gql from 'graphql-tag';

type Work = {
  workExp: string;
};

const WorkExpFragment = gql`
  fragment WorkExpFragment on Resume {
    workExp
  }
`;

const WorkExp = (workExp: any): JSX.Element => {
  workExp = workExp.data?.resume as Work;
  return (
    <div className={s.workHistory}>
      <h2>Work History</h2>
      <ReactMarkdown children={workExp.workExp} />
    </div>
  );
};

WorkExp.displayName = 'Work Experience';

WorkExp.fragments = {
  WorkExpFragment: WorkExpFragment,
};

export default WorkExp;
