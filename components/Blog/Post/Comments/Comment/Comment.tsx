import React, { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import Rating from './Rating/Rating';
import CommentForm from '../CommentForm/CommentForm';
import s from '../Comments.module.scss';

type CommentType = {
  comment:
    | {
        Content?: string | null;
        createdAt?: any;
        updatedAt?: any;
        article?: {
          data?: {
            id?: string | null;
            attributes?: { Slug?: string | null } | null;
          } | null;
        } | null;
        Author?: {
          data?: {
            attributes?: {
              username: string;
              avatar?: {
                img: {
                  data?: {
                    attributes?: { url: string; hash: string } | null;
                  } | null;
                };
              } | null;
            } | null;
          } | null;
        } | null;
        Children?: {
          data: Array<{
            attributes?: {
              Content?: string | null;
              createdAt?: any;
              updatedAt?: any;
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
        } | null;
        Likes?: Array<{ __typename?: 'ComponentCommentLikes'; UserId?: number | null } | null> | null;
        Dislikes?: Array<{ __typename?: 'ComponentCommentLikes'; UserId?: number | null } | null> | null;
      }
    | null
    | undefined;
  commentId?: string | null;
  userId?: string;
  nested?: boolean;
  articleId: string;
};

const Comment = ({ comment, commentId, userId, nested, articleId }: CommentType): JSX.Element => {
  const [openReplyBox, setOpenReplyBox] = useState(false);

  const openReply = () => {
    setOpenReplyBox(!openReplyBox);
  };

  return (
    <div className={s.comment}>
      <img
        src={String(comment?.Author?.data?.attributes?.avatar?.img?.data?.attributes?.url)}
        className={s.commentAvatar}
        alt={`${String(comment?.Author?.data?.attributes?.username)}'s avatar image`}
      />
      <h3 className={s.commentName}>{comment?.Author?.data?.attributes?.username}</h3>
      <Markdown className={s.commentContent}>{String(comment?.Content)}</Markdown>
      <Rating
        commentId={commentId}
        likes={comment?.Likes}
        dislikes={comment?.Dislikes}
        userId={userId}
        replyIsOpen={openReplyBox}
        nested={nested}
        reply={openReply}
      />
      {openReplyBox && (
        <CommentForm commentId={commentId} nested={nested} userId={userId} articleId={String(articleId)} />
      )}
    </div>
  );
};

export default Comment;
