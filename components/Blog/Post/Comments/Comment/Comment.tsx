import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Rating from './Rating/Rating';
import CommentForm from '../CommentForm/CommentForm';
import s from '../Comments.module.scss';

type Comment = {
  nested?: boolean;
  comment: { id: number | undefined };
  user: { id: string; avatar: string; username: string };
  content: string;
  likes: [{ user: { id: string } }];
  dislikes: [{ user: { id: string } }];
  updateState: CallableFunction;
  article: { id: string };
};
const Comment = ({ comment, user, content, likes, dislikes, article, nested }: Comment): JSX.Element => {
  const [openReplyBox, setOpenReplyBox] = useState(false);

  console.log(openReplyBox);
  const openReply = () => {
    setOpenReplyBox(!openReplyBox);
  };

  return (
    <div className={s.comment}>
      <img src='/static/images/avatar.jpg' className={s.commentAvatar} alt={`${user.username}'s avatar image`} />
      <h3 className={s.commentName}>{user.username}</h3>
      <ReactMarkdown className={s.commentContent}>{content}</ReactMarkdown>
      <Rating
        comment={comment}
        user={user}
        replyIsOpen={openReplyBox}
        nested={nested}
        reply={openReply}
        likes={likes}
        dislikes={dislikes}
      />
      {openReplyBox && (
        <CommentForm
          comment={comment}
          nested={nested}
          user={user}
          article={article}
          updateState={() => {}}
          content={''}
        />
      )}
    </div>
  );
};

export default Comment;
