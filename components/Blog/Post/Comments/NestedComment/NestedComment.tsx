import React, { useState } from 'react';
import Comment from '../Comment/Comment';
import s from '../Comments.module.scss';

type NestedComment = {
  articleID: number;
  parent: [
    {
      id: number;
      content: string;
      user: { id: number; username: string; avatar: string };
      likes: [{ user: { id: number } }];
      dislikes: [{ user: { id: number } }];
    }
  ];
  updateState: CallableFunction;
};

const NestedComment = ({ parent, articleID, updateState }: NestedComment): JSX.Element => {
  const [openReplies, setOpenReplies] = useState(false);
  const commentNumber = parent.length;

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
        parent.map((comment, index) => (
          <>
            <Comment
              id={comment.id}
              nested
              comment={comment}
              articleID={articleID}
              key={index}
              user={comment.user}
              content={comment.content}
              likes={comment.likes}
              dislikes={comment.dislikes}
              updateState={updateState}
            />
          </>
        ))}
    </div>
  );
};

export default NestedComment;
