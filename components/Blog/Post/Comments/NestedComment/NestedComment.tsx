import React, { useState } from 'react';
import Comment from '../Comment/Comment';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Load from '../../../../Other/Load/Load';
import Err from '../../../../Other/Error/Error';

type NestedComment = {
  parent: string | undefined;
};

type CommentArr = {
  user: { name: string; avatar: string };
  parent: { id: string };
  article: { id: string };
  likes: [{ user: string }];
  dislikes: [{ user: string }];
  updateState: CallableFunction;
  content: string;
};

const getNestedComment = gql`
  query NestedComments($slug: String, $articleID: String!) {
    comments(where: { article: { slug: $slug }, parent: { id: $articleID } }) {
      id
      content
      article {
        id
      }
      user {
        username
        avatar
      }
      parent {
        id
      }
      likes {
        user {
          id
        }
      }
      dislikes {
        user {
          id
        }
      }
    }
  }
`;

const NestedComment = ({ parent }: NestedComment): JSX.Element => {
  const [openReply, setOpenReply] = useState(false);
  const { data, error, loading } = useQuery(getNestedComment, { variables: { parent } });

  if (loading && !data) return <Load />;
  if (error) return <Err />;

  const nComments = data?.comments as CommentArr[];

  const nCommentNumber = nComments.length;

  const handleChange = () => {
    setOpenReply(!openReply);
  };
  return (
    <div>
      {nCommentNumber > 0 && <p onClick={handleChange}>View {nCommentNumber} More Comments</p>}
      {nComments.map((comment, index) => {
        {
          openReply && (
            <div>
              <Comment
                key={index}
                article={comment.article}
                user={comment.user}
                content={comment.content}
                likes={comment.likes}
                dislikes={comment.dislikes}
                updateState={() => {}}
              />
              <NestedComment parent={comment.parent.id} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default NestedComment;
