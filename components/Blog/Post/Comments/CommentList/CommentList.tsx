import React from 'react';
import { gql } from '@app/gql';
// import { useQuery } from '@apollo/client';
import { useQuery } from 'urql';
import s from '../Comments.module.scss';
import CommentHeader from '../CommentHeader/CommentHeader';
import CommentForm from '../CommentForm/CommentForm';
import Comment from '../Comment/Comment';
import NestedComment from '../NestedComment/NestedComment';
import Load from '../../../../Other/Load/Load';
// import { NetworkStatus } from '@apollo/client';

export const GetCommentList = gql(`
  query Comments($slug: String) {
    me {
      id
      username
      avatar
    }
    comments(where: { article: { slug: $slug }, parent_null: true }) {
      id
      content
      created_at
      updated_at
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
`);

type CommentList = {
  slug: string;
  articleID: string;
};

const CommentList = ({ slug, articleID }: CommentList): JSX.Element => {
  // const { data, loading, networkStatus } = useQuery(GetCommentList, {
  //   variables: { slug },
  //   notifyOnNetworkStatusChange: true,
  // });

  const [result] = useQuery({ query: GetCommentList, variables: { slug } });
  const { data, loading, fetching, error } = result;

  const { comments } = data;
  const { me } = data;

  if ((loading && !data) || fetching) return <Load />;

  const parentCommentLength = Number(comments?.length);

  const nestedCommentLength = Number(comments?.forEach((comment) => comment?.children?.length));

  // const childCommentLength = comments?.forEach((comment) => (nestedCommentLength += Number(comment?.children?.length)));
  const totalCommentLength = nestedCommentLength + parentCommentLength;

  return (
    <div className={s.commentList}>
      <CommentHeader totalComments={totalCommentLength} />
      <CommentForm me={me} articleId={String(articleID)} content={''} />

      {parentCommentLength > 0 &&
        comments?.map((comment) => (
          <>
            <Comment comment={comment} key={comment?.id} me={me} />
            <NestedComment articleID={String(articleID)} child={comment?.children} me={me} />
          </>
        ))}
    </div>
  );
};

export default CommentList;
