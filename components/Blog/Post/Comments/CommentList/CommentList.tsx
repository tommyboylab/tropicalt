import React from 'react';
import CommentHeader from '../CommentHeader/CommentHeader';
import CommentForm from '../CommentForm/CommentForm';
import Comment from '../Comment/Comment';
import NestedComment from '../NestedComment/NestedComment';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import Load from '../../../../Other/Load/Load';
import Err from '../../../../Other/Error/Error';

type CommentList = {
  id: string | undefined;
  user: { avatar: string; name: string };
  article: { id: string };
  content: string;
  newComment: ConcatArray<never>;
  parent: { id: string };
  likes: [{ user: string; comment: string; article: string }];
  dislikes: [{ user: string; comment: string; article: string }];
};

const getCommentList = gql`
  query Comments($slug: String) {
    comments(where: { article: { slug: $slug }, parent: { id_null: true } }) {
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

const CommentList = (): JSX.Element => {
  const router = useRouter();
  const slug = router.query.slug;
  // const [commentList, setCommentList] = useState([]);
  const { data, error, loading } = useQuery(getCommentList, { variables: { slug } });

  if (loading && !data) return <Load />;
  if (error) return <Err />;

  const comments = data?.comments as CommentList[];

  return (
    <>
      <CommentHeader totalComments={comments.length} />
      <CommentForm
        user={{ avatar: '/static/images/avatar.jpg', name: 'Thomas Fiala' }}
        article={comments[0].article}
        updateState={() => {}}
        content={''}
      />
      {comments.map((comment, index) => {
        !comments.length && (
          <>
            <Comment
              article={comment.article}
              key={index}
              user={comment.user}
              content={comment.content}
              likes={comment.likes}
              dislikes={comment.dislikes}
              updateState={() => {}}
            />
            <NestedComment parent={comment.id} />
          </>
        );
      })}
    </>
  );
};

export default CommentList;
