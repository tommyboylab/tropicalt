import React from 'react';
import ReactMarkdown from 'react-markdown';
import s from '../Resume.module.scss';
import { gql } from '@app/gql';
// import { WorkExpFragmentFragment } from '../../../apollo/gql/graphql';

const WorkExpFragment = gql(`
  fragment WorkExpFragment on Resume {
    workExp
  }
`);

const WorkExp = (workExp): JSX.Element => {
  return (
    <div className={s.workHistory}>
      <h2>Work History</h2>
      <ReactMarkdown>{workExp.workExp}</ReactMarkdown>
    </div>
  );
};

WorkExp.displayName = 'Work Experience';

WorkExp.fragments = {
  WorkExpFragment: WorkExpFragment,
};

export default WorkExp;
