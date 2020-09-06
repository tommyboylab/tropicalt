import React from 'react';
import CommentHeader from './CommentHeader/CommentHeader';
import CommentForm from './CommentForm/CommentForm';
import Comment from './Comment/Comment';

type Comments = {
  totalComments: number;
  comment: {
    user: { id: number; avatar: string; username: string };
    date: string;
    likes: [{ user: { id: string }; comment: string; article: string }];
    dislikes: [{ user: { id: string }; comment: string; article: string }];
    content: string;
    parentID?: string;
    article: { id: string };
  };
};

const Comments = ({ totalComments, comment }: Comments): JSX.Element => {
  return (
    <>
      <CommentHeader totalComments={totalComments} />
      <CommentForm user={comment.user} article={comment.article} content={''} updateState={() => {}} />
      <Comment
        content={comment.content}
        user={comment.user}
        likes={comment.likes}
        dislikes={comment.dislikes}
        article={comment.article}
        updateState={() => {}}
      />
    </>
  );
};

export default Comments;
