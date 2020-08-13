import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Rating from './Rating/Rating';
import CommentForm from '../CommentForm/CommentForm';

type Comment = {
  user: { avatar: string; username: string };
  content: string;
  likes: [{ user: string }];
  dislikes: [{ user: string }];
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
    <div>
      <img alt={`${user.username}'s avatar image`} />
      <h3>{user.username}</h3>
      <ReactMarkdown>{content}</ReactMarkdown>
      <Rating likes={likes} dislikes={dislikes} />
      <span onClick={openReply}>Reply</span>
      {openReply && <CommentForm user={user} article={article} updateState={() => {}} content={''} />}
    </div>
  );
};

export default Comment;
