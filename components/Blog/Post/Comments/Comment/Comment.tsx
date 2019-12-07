import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Rating from './Rating/Rating';
import CommentForm from '../CommentForm/CommentForm';
import s from '../Comments.module.scss';

type Comment = {
  id: number;
  nested?: boolean;
  comment: { id: number };
  user: { id: number; avatar: string; username: string };
  content: string;
  likes: [{ user: { id: number } }];
  dislikes: [{ user: { id: number } }];
  articleID: number;
  updateState: CallableFunction;
};
const Comment = ({ comment, user, content, likes, dislikes, articleID, nested, updateState }: Comment): JSX.Element => {
  const [openReplyBox, setOpenReplyBox] = useState(false);

  console.log(openReplyBox);
  const openReply = () => {
    setOpenReplyBox(!openReplyBox);
  };

  return (
    <div className={s.comment}>
      <img src={user.avatar} className={s.commentAvatar} alt={`${user.username}'s avatar image`} />
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
          updateState={updateState}
          comment={comment}
          nested={nested}
          user={user}
          articleID={articleID}
          content={''}
        />
      )}
    </div>
  );
};

export default Comment;
