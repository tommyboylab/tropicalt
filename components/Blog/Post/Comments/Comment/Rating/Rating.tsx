import React, { MouseEventHandler } from 'react';
import { useMutation } from 'urql';
import { gql } from 'urql';
import s from '../../Comments.module.scss';
// import { Comment } from '../Comment';

const UpdateCommentLikes = gql(`
mutation updateCommentLikes(
  $commentId: ID!
  $likes: Int!
  $dislikes: Int!
) {
  updateComment(
    id: $commentId
    data: { Likes: { UserId: $likes }, Dislikes: { UserId: $dislikes } }
  ) {
    data {
      id
      attributes {
        Likes {
          UserId
        }
        Dislikes {
          UserId
        }
      }
    }
  }
}

`);

type CommentRatingProps = {
  commentId?: string | null;
  userId?: string;
  nested?: boolean;
  reply: MouseEventHandler<SVGSVGElement>;
  replyIsOpen: boolean;
  likes?: Array<{ UserId?: number | null } | null> | null;
  dislikes?: Array<{ UserId?: number | null } | null> | null;
};

const Rating = ({
  commentId,
  likes,
  dislikes,
  userId,
  nested,
  reply,
  replyIsOpen,
}: CommentRatingProps): JSX.Element => {
  const likeNum = likes?.length;
  const dislikeNum = dislikes?.length;

  const isLiked = likes?.some((like) => like?.UserId === userId);

  const isDisliked = dislikes?.some((dislike) => dislike?.UserId === userId);

  const liked = () =>
    isLiked ? likes?.filter((like) => like?.UserId !== userId) : likes ? [...likes, { UserId: userId }] : likes;

  const disliked = () =>
    isDisliked
      ? dislikes?.filter((dislike) => dislike?.UserId !== userId)
      : dislikes
      ? [...dislikes, { UserId: userId }]
      : dislikes;

  //      ? [...dislikes, { id: String(dislikes?.length + 1), me }]

  const removeLike = () =>
    likes?.some((like) => like?.UserId === userId) ? likes?.filter((like) => like?.UserId !== userId) : likes;

  const removeDislike = () =>
    dislikes?.some((dislike) => dislike?.UserId === userId)
      ? dislikes?.filter((dislike) => dislike?.UserId !== userId)
      : dislikes;

  const [UpdateCommentLikesResult, updateCommentLikes] = useMutation(UpdateCommentLikes);

  const [UpdateCommentDislikesResult, updateCommentDislikes] = useMutation(UpdateCommentLikes);

  const updateLike = async (commentID: string) => {
    await updateCommentLikes({
      variables: {
        commentID,
        likes: liked(),
        dislikes: removeDislike(),
      },
    });
  };

  const updateDislike = async (commentID: string) => {
    await updateCommentDislikes({
      variables: {
        commentID,
        likes: removeLike(),
        dislikes: disliked(),
      },
    });
  };

  return (
    <div className={s.commentRating}>
      <svg
        aria-disabled={UpdateCommentLikesResult.fetching}
        onClick={void updateLike(String(commentId))}
        style={{ fill: `${isLiked ? '#0FA' : 'black'}` }}
        className={s.commentLikeImg}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'>
        <defs />
        <path d='M452 188h-30c-7 0-13 1-19 3L305 37l-13-18-1-1a60 60 0 00-100 61v2l1 1 10 20c9 18 24 47 26 56-1 11-15 17-25 17H71a57 57 0 00-49 86 57 57 0 00-7 83l8 8a57 57 0 0022 78c-3 7-5 15-5 23 0 34 24 59 57 59h196a20 20 0 100-40H97c-15 0-17-13-17-19 0-8 7-12 9-13 11-7 13-16 13-20 0-13-11-23-25-23h-5c-9 0-17-8-17-17 0-6 3-12 9-15h1c9-5 13-12 13-21 0-7-5-20-24-21-8-1-14-8-14-17 0-8 5-15 13-16 12-4 20-13 20-24 0-5-2-13-12-20-4-3-7-8-7-14 0-9 8-17 17-17h132c30 0 64-22 65-57 0-12-9-31-30-74a2751 2751 0 01-10-24 20 20 0 0133-15l10 14 101 157c-6 9-10 20-10 32v204c0 33 27 60 60 60h30c33 0 60-27 60-60V248c0-33-27-60-60-60zm20 264c0 11-9 20-20 20h-30c-11 0-20-9-20-20V248c0-11 9-20 20-20h30c11 0 20 9 20 20v204z' />
      </svg>
      <h3 className={s.commentLike}>{likeNum}</h3>
      <svg
        aria-disabled={UpdateCommentDislikesResult.fetching}
        onClick={void updateDislike(String(commentId))}
        style={{ fill: `${isDisliked ? 'red' : 'black'}` }}
        className={s.commentDislikeImg}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'>
        <defs />
        <path d='M512 206a58 58 0 00-23-46 57 57 0 00-22-78c3-7 5-15 5-23 0-34-24-59-57-59H219a20 20 0 100 40h196c15 0 17 13 17 19 0 8-7 12-9 13-11 7-13 16-13 20 0 13 11 23 25 23h5c9 0 17 8 17 17 0 6-3 12-9 15h-1c-9 5-13 12-13 21 0 7 5 20 24 21 8 1 14 8 14 17 0 8-5 15-13 16-12 4-20 13-20 24 0 5 2 13 12 20 4 3 7 8 7 14 0 9-8 17-17 17H309c-30 0-64 22-65 57 0 12 9 31 30 74a2802 2802 0 0110 24 20 20 0 01-33 15l-10-14-101-157c6-9 10-20 10-32V60c0-33-27-60-60-60H60C27 0 0 27 0 60v204c0 33 27 60 60 60h30c7 0 13-1 19-3l98 154 13 18 1 1a60 60 0 00100-61v-2l-1-1-10-20c-9-18-24-47-26-56 1-11 15-17 25-17h132a57 57 0 0049-86c14-11 22-27 22-45zm-402 58c0 11-9 20-20 20H60c-11 0-20-9-20-20V60c0-11 9-20 20-20h30c11 0 20 9 20 20v204z' />
      </svg>
      <h3 className={s.commentDislike}>{dislikeNum}</h3>
      {!nested && (
        <svg
          className={s.commentReply}
          style={{ fill: `${replyIsOpen ? 'gold' : 'black'}` }}
          onClick={reply}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'>
          <defs />
          <path d='M171 313L46 187c-8-8-8-20 0-28L171 34a20 20 0 00-28-28L18 131a60 60 0 000 84l125 126a20 20 0 0028 0c8-8 8-20 0-28z' />
          <path d='M332 153H119a20 20 0 100 40h213a140 140 0 010 279 20 20 0 100 40 180 180 0 000-359z' />
        </svg>
      )}
    </div>
  );
};

export default Rating;
