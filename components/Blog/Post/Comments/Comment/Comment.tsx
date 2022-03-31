import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Rating from './Rating/Rating';
import CommentForm from '../CommentForm/CommentForm';
import s from '../Comments.module.scss';
// import {Comment, CommentsQuery} from '../../../../../apollo/gql/graphql';

export type Me =
  | {
      __typename?: 'UsersPermissionsMe' | undefined;
      id: string;
      username: string;
      avatar?: string | null | undefined;
    }
  | null
  | undefined;

export type Comment =
  | {
      __typename?: 'Comment';
      id: string;
      content?: string | null | undefined;
      article?: { __typename?: 'Article'; id: string } | null | undefined;
      user?:
        | { __typename?: 'UsersPermissionsUser'; id: string; username: string; avatar?: string | null | undefined }
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
      children?:
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
    }
  | null
  | undefined;

type CommentProps = {
  comment?: Comment | null;
  me: Me;
  nested?: boolean;
};

const Comment = ({ comment, me, nested }: CommentProps): JSX.Element => {
  const [openReplyBox, setOpenReplyBox] = useState(false);

  const { content, article, id, user } = comment!;

  const openReply = () => {
    setOpenReplyBox(!openReplyBox);
  };

  return (
    <div className={s.comment}>
      <img src={String(user?.avatar)} className={s.commentAvatar} alt={`${String(user?.username)}'s avatar image`} />
      <h3 className={s.commentName}>{user?.username}</h3>
      <ReactMarkdown className={s.commentContent}>{String(content)}</ReactMarkdown>
      <Rating comment={comment} me={me} replyIsOpen={openReplyBox} nested={nested} reply={openReply} />
      {openReplyBox && (
        <CommentForm commentId={id} nested={nested} me={me} articleId={String(article?.id)} content='' />
      )}
    </div>
  );
};

export default Comment;
