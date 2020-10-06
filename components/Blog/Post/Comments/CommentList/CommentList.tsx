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

type UserType = {
  id: string;
  username: string;
  avatar: string | undefined;
};
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

const getCommentList = gql`
  query Comments($slug: String) {
    me {
      id
      username
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

const CommentList = ({ article }: any): JSX.Element => {
  const router = useRouter();
  const slug = router.query.slug;
  const { data, error, loading } = useQuery(getCommentList, { variables: { slug } });
  if (loading && !data) return <Load />;
  if (error)
    return (
      <>
        {console.log(error)}
        <Modal />
      </>
    );

  const comments = data?.comments as CommentList[];
  const user = data?.user as UserType;

  const parentCommentLength = comments.length;
  let nestedCommentLength = 0;
  comments.forEach((comment) => (nestedCommentLength += comment.children.length));
  const totalCommentLength = nestedCommentLength + parentCommentLength;

  return (
    <div className={s.commentList}>
      <CommentHeader totalComments={totalCommentLength} />
      <CommentForm user={user} article={article} updateState={() => {}} content={''} />
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
