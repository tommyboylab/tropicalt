import React, { useState } from 'react';
import Comment from '../Comment/Comment';
import s from '../Comments.module.scss';

const NestedComment = ({ child, me }): JSX.Element => {
  const [openReplies, setOpenReplies] = useState(false);
  const commentNumber = Number(child?.length);

  const handleChange = () => {
    setOpenReplies(!openReplies);
  };
  return (
    <div className={s.commentNested}>
      {commentNumber > 0 && (
        <p className={s.commentViewMore} onClick={handleChange}>
          View {commentNumber} {commentNumber > 1 ? 'Comments' : 'Comment'}
        </p>
      )}
      {openReplies &&
        commentNumber > 0 &&
        child?.map((comment, index) => (
          <>
            <Comment nested comment={comment.attributes} key={index} me={me} />
          </>
        ))}
    </div>
  );
};

export default NestedComment;
