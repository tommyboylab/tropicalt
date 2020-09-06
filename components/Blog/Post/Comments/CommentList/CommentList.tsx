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
import Err from '../../../../Other/Error/Error';

// type UserType = {
//   id: number;
//   username: string;
//   avatar: string | undefined;
// };

type CommentList = {
  id: string | undefined;
  user: { id: number; avatar: string; username: string };
  article: { id: string };
  content: string;
  newComment: ConcatArray<never>;
  children: [
    {
      id: string;
      article: { id: string };
      content: string;
      user: { id: number; username: string; avatar: string };
      likes: [{ user: { id: string } }];
      dislikes: [{ user: { id: string } }];
    }
  ];
  likes: [{ user: { id: string } }];
  dislikes: [{ user: { id: string } }];
};

const getCommentList = gql`
  query Comments($slug: String) {
    #    me {
    #      id
    #      username
    #      avatar
    #    }
    comments(where: { article: { slug: $slug }, children_null: false }) {
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

const CommentList = (): JSX.Element => {
  const router = useRouter();
  const slug = router.query.slug;
  const { data, error, loading } = useQuery(getCommentList, { variables: { slug } });

  if (loading && !data) return <Load />;
  if (error) return <Err />;

  const comments = data?.comments as CommentList[];
  // const user = data?.me as UserType;
  return (
    <div className={s.commentList}>
      <CommentHeader totalComments={comments.length} />
      <CommentForm
        user={{ id: 2, avatar: '/static/images/avatar.jpg', username: 'Thomas Fiala' }}
        article={comments[0].article}
        updateState={() => {}}
        content={''}
      />
      {comments.map((comment) => (
        <>
          <Comment
            article={comment.article}
            key={comment.id}
            user={comment.user}
            content={comment.content}
            likes={comment.likes}
            dislikes={comment.dislikes}
            updateState={() => {}}
          />
          <NestedComment parent={comment.children} />
        </>
      ))}
    </div>
  );
};

export default CommentList;
