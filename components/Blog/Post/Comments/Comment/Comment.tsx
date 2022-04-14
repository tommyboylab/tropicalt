import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Rating from './Rating/Rating';
import CommentForm from '../CommentForm/CommentForm';
import s from '../Comments.module.scss';

// type CommentProps = {
//   comment?: Comment | null;
//   commentId: string;
//   me: Me;
//   nested?: boolean;
// };

const Comment = ({ comment, commentId, me, nested }): JSX.Element => {
  const [openReplyBox, setOpenReplyBox] = useState(false);

  const openReply = () => {
    setOpenReplyBox(!openReplyBox);
  };

  return (
    <div className={s.comment}>
      <img
        src={String(comment.Author.data.attributes.Img.img.data.attributes.url)}
        className={s.commentAvatar}
        alt={`${String(comment.Author.data.attributes.username)}'s avatar image`}
      />
      <h3 className={s.commentName}>{comment.Author.data.attributes?.username}</h3>
      <ReactMarkdown className={s.commentContent}>{String(comment.Content)}</ReactMarkdown>
      <Rating comment={comment} me={me} replyIsOpen={openReplyBox} nested={nested} reply={openReply} />
      {openReplyBox && (
        <CommentForm
          commentId={commentId}
          nested={nested}
          me={me}
          articleId={String(comment.article.data.id)}
          content=''
        />
      )}
    </div>
  );
};

export default Comment;
