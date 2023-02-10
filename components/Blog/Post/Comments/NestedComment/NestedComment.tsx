import React, { useState } from 'react';
import Comment from '../Comment/Comment';
import s from '../Comments.module.scss';

type ChildCommentProps = {
  child?: Array<{
    attributes?: {
      Content?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      Likes?: Array<{ UserId?: number | null } | null> | null;
      Dislikes?: Array<{ UserId?: number | null } | null> | null;
      Author?: {
        data?: {
          attributes?: {
            username: string;
            Img?: {
              img: {
                data?: {
                  attributes?: { url: string; hash: string } | null;
                } | null;
              };
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  }>;
  userId?: string;
  articleId?: string;
};

const NestedComment = ({ child, userId, articleId }: ChildCommentProps): JSX.Element => {
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
            <Comment
              nested={true}
              comment={comment.attributes}
              key={index}
              userId={userId}
              articleId={String(articleId)}
            />
          </>
        ))}
    </div>
  );
};

export default NestedComment;
