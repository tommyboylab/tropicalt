import React, { useState } from 'react';
import Comment from '../Comment/Comment';
import s from '../Comments.module.scss';

type NestedComment = {
  article: string;
  parent: [
    {
      id: number | undefined;
      content: string;
      user: { id: string; username: string; avatar: string };
      likes: [{ user: { id: string } }];
      dislikes: [{ user: { id: string } }];
    }
  ];
};

const NestedComment = ({ parent, article }: NestedComment): JSX.Element => {
  const [openReplies, setOpenReplies] = useState(false);
  const CommentNumber = parent.length;

  const handleChange = () => {
    setOpenReplies(!openReplies);
  };
  return (
    <div className={s.commentNested}>
      {CommentNumber > 0 && (
        <p className={s.commentViewMore} onClick={handleChange}>
          View {CommentNumber} More Comments
        </p>
      )}
      {openReplies &&
        parent.map((comment, index) => (
          <>
            <Comment
              nested
              comment={comment}
              article={article}
              key={index}
              user={comment.user}
              content={comment.content}
              likes={comment.likes}
              dislikes={comment.dislikes}
              updateState={() => {}}
            />
          </>
        ))}
    </div>
  );
};

export default NestedComment;
