import React from 'react';
import s from '../Comments.module.scss';

type commentHeader = {
  totalComments: number;
};
const CommentHeader = ({ totalComments }: commentHeader): JSX.Element => {
  return (
    <div className={s.commentHeader}>
      {totalComments > 0 && (
        <>
          <h3>Comments:</h3>
          <h3>
            {totalComments} {totalComments > 1 ? 'Comments' : 'Comment'}
          </h3>
        </>
      )}
    </div>
  );
};

export default CommentHeader;
