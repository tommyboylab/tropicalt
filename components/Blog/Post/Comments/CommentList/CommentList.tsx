import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import s from '../Comments.module.scss';
import CommentHeader from '../CommentHeader/CommentHeader';
import CommentForm from '../CommentForm/CommentForm';
import Comment from '../Comment/Comment';
import NestedComment from '../NestedComment/NestedComment';
import Load from '../../../../Other/Load/Load';
import Modal from 'components/Other/SocialAuth/Modal';

type CommentList = {
  id: number | undefined;
  user: { id: string; avatar: string; username: string };
  article: string;
  content: string;
  newComment: ConcatArray<never>;
  children: [
    {
      id: number | undefined;
      article: string;
      content: string;
      user: { id: string; username: string; avatar: string };
      likes: [{ user: { id: string } }];
      dislikes: [{ user: { id: string } }];
    }
  ];
  likes: [{ user: { id: string } }];
  dislikes: [{ user: { id: string } }];
};

const getUser = gql`
  query User {
    me {
      id
      username
      avatar
    }
  }
`;

const getCommentList = gql`
  query Comments($slug: String) {
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

const CommentList = ({ article }: any): JSX.Element => {
  const router = useRouter();
  const slug = router.query.slug;
  const { data, error, loading } = useQuery(getCommentList, { variables: { slug } });
  const { data: userData, error: userError, loading: userLoading } = useQuery(getUser);
  if (loading && userLoading && !data && !userData) return <Load />;
  if (error) return <></>;
  if (userError)
    return (
      <div>
        <h3>
          Want to see something secret?
          <Modal />
        </h3>
      </div>
    );
  const comments = data?.comments as CommentList[];

  const parentCommentLength = comments.length;
  let nestedCommentLength = 0;
  comments.forEach((comment) => (nestedCommentLength += comment.children.length));
  const totalCommentLength = nestedCommentLength + parentCommentLength;
  // const user = data?.me as UserType;
  const user = { id: '1', avatar: '/static/images/avatar.jpg', username: 'Thomas Fiala' };
  return (
    <div className={s.commentList}>
      <CommentHeader totalComments={totalCommentLength} />
      <CommentForm query={getCommentList} user={user} article={article} updateState={() => {}} content={''} />
      {comments.map((comment) => (
        <>
          <Comment
            comment={comment}
            article={article}
            key={comment.id}
            user={comment.user}
            content={comment.content}
            likes={comment.likes}
            dislikes={comment.dislikes}
            updateState={() => {}}
          />
          <NestedComment article={article} parent={comment.children} />
        </>
      ))}
    </div>
  );
};

export default CommentList;
