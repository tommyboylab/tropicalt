import React from 'react';
import Markdown from 'markdown-to-jsx';
import s from '../Resume.module.scss';
import { gql } from 'urql';

export const WorkExpFragment = gql`
  fragment WorkExpFragment on Resume {
    Experience
  }
`;

type WorkExpType = {
  workExp: string;
};

const WorkExp = ({ workExp }: WorkExpType): JSX.Element => {
  return (
    <div className={s.workHistory}>
      <h2>Work History</h2>
      <Markdown>{workExp}</Markdown>
    </div>
  );
};

WorkExp.displayName = 'Work Experience';

WorkExp.fragments = {
  WorkExpFragment: WorkExpFragment,
};

export default WorkExp;
