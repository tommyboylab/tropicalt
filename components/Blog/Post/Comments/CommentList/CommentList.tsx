import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import s from '../Comments.module.scss';
import CommentHeader from '../CommentHeader/CommentHeader';
import CommentForm from '../CommentForm/CommentForm';
import Comment from '../Comment/Comment';
import NestedComment from '../NestedComment/NestedComment';
import Load from '../../../../Other/Load/Load';
import Modal from 'components/Other/SocialAuth/Modal';
import { NetworkStatus } from '@apollo/client';
import {isSignedIn} from "../../../../../apollo/apollo";

type UserType = {
  id: number;
  username: string;
  avatar: string;
};
type CommentList = {
  id: number;
  user: { id: number; avatar: string; username: string };
  articleID: number;
  content: string;
  newComment: ConcatArray<never>;
  children: [
    {
      id: number;
      articleID: number;
      content: string;
      user: { id: number; username: string; avatar: string };
      likes: [{ user: { id: number } }];
      dislikes: [{ user: { id: number } }];
    }
  ];
  likes: [{ user: { id: number } }];
  dislikes: [{ user: { id: number } }];
};

const getCommentList = gql`
  query Comments($slug: String) {
    me {
      id
      username
      avatar
    }
    comments(where: { article: { slug: $slug }, parent_null: true }) {
      id
      content
      article {
        id
      }
      user {
        id
        username
        avatar
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
      children {
        id
        content
        user {
          id
          username
          avatar
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
  }
`;

const CommentList = ({ articleID, slug }: any): JSX.Element => {
  const { data, loading, refetch, networkStatus } = useQuery(getCommentList, {
    variables: { slug },
    notifyOnNetworkStatusChange: true,
  });

  const authenticated = isSignedIn()

  if ((loading && !data) || networkStatus === NetworkStatus.refetch) return <Load />;

  const comments = data?.comments as CommentList[];
  const user = data?.me as UserType;

  const parentCommentLength = comments.length;

  let nestedCommentLength = 0;
  comments.forEach((comment) => (nestedCommentLength += comment.children.length));
  const totalCommentLength = nestedCommentLength + parentCommentLength;

  return (
      authenticated ?
    <div className={s.commentList}>
      <CommentHeader totalComments={totalCommentLength} />
      <CommentForm updateState={refetch} user={user} articleID={articleID} content={''} />

      {comments.length > 0 &&
        comments.map((comment) => (
          <>
            <Comment
              id={comment.id}
              comment={comment}
              articleID={articleID}
              key={comment.id}
              user={comment.user}
              content={comment.content}
              likes={comment.likes}
              dislikes={comment.dislikes}
              updateState={refetch}
            />
            <NestedComment articleID={articleID} parent={comment.children} updateState={refetch} />
          </>
        ))}
    </div> : <Modal/>
  );
};

export default CommentList;
