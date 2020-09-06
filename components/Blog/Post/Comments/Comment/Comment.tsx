import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Rating from './Rating/Rating';
import CommentForm from '../CommentForm/CommentForm';
import s from '../Comments.module.scss';

type Comment = {
  user: { id: number; avatar: string; username: string };
  content: string;
  likes: [{ user: { id: string } }];
  dislikes: [{ user: { id: string } }];
  updateState: CallableFunction;
  article: { id: string };
};
const Comment = ({ user, content, likes, dislikes, article }: Comment): JSX.Element => {
  const [openReplyBox, setOpenReplyBox] = useState(false);

  // const onSubmit = (e: any) => {
  //   e.preventDefault();

  // const payload = {
  //   user: user,
  //   articleID,
  //   comment: content,
  // };

  // post request to api enpoint to create a new comment, using payload of form
  // then reset the state of the comment if sucess setComment=''
  // then set open reply back
  // then set refresh function to new data
  // };

  const openReply = () => {
    setOpenReplyBox(!openReplyBox);
  };

  return (
    <div className={s.comment}>
      <img src='/static/images/avatar.jpg' className={s.commentAvatar} alt={`${user.username}'s avatar image`} />
      <h3 className={s.commentName}>{user.username}</h3>
      <ReactMarkdown className={s.commentContent}>{content}</ReactMarkdown>
      <Rating reply={openReply} likes={likes} dislikes={dislikes} />
      {openReplyBox && <CommentForm user={user} article={article} updateState={() => {}} content={''} />}
    </div>
  );
};

export default Comment;
