import React, { useState } from 'react';
import Comment, { Me } from '../Comment/Comment';
import s from '../Comments.module.scss';

type NestedComment = {
  me: Me;
  articleID: string;
  child:
    | Array<
        | {
            __typename?: 'Comment';
            id: string;
            content?: string | null | undefined;
            user?:
              | {
                  __typename?: 'UsersPermissionsUser';
                  id: string;
                  username: string;
                  avatar?: string | null | undefined;
                }
              | null
              | undefined;
            likes?:
              | Array<
                  | {
                      __typename?: 'ComponentBlogLikes';
                      user?: { __typename?: 'UsersPermissionsUser'; id: string } | null | undefined;
                    }
                  | null
                  | undefined
                >
              | null
              | undefined;
            dislikes?:
              | Array<
                  | {
                      __typename?: 'ComponentBlogDislike';
                      user?: { __typename?: 'UsersPermissionsUser'; id: string } | null | undefined;
                    }
                  | null
                  | undefined
                >
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

const NestedComment = ({ child, me }: NestedComment): JSX.Element => {
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
            <Comment nested comment={comment} key={index} me={me} />
          </>
        ))}
    </div>
  );
};

export default NestedComment;
