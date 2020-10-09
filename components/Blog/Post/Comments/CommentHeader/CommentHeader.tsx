import React from 'react';
import s from '../Comments.module.scss';

type commentHeader = {
  totalComments: number;
};
const CommentHeader = ({ totalComments }: commentHeader): JSX.Element => {
  return (
    <div className={s.commentHeader}>
      <h3>Comments:</h3>
      <h3>
        {totalComments} {totalComments > 0 ? 'Comments' : 'Comment'}
      </h3>
    </div>
  );
};

export default CommentHeader;
