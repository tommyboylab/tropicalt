import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import moment from 'moment';
import { useMutation } from 'urql';
import { gql } from 'urql';
import s from '../Comments.module.scss';

const CreateComment = gql`
  mutation AddComment($articleId: ID!, $userId: ID!, $content: String!, $date: DateTime!, $parentId: ID) {
    createComment(
      data: { article: $articleId, Author: $userId, Content: $content, Published: $date, Parent: $parentId }
    ) {
      data {
        id
        attributes {
          Content
          Author {
            data {
              id
            }
          }
          article {
            data {
              id
            }
          }
          Published
          Parent {
            data {
              id
            }
          }
        }
      }
    }
  }
`;

const commentSchema = yup.object({ content: yup.string().min(2, `That's not good enough!`).max(40).required() });
type commentType = yup.InferType<typeof commentSchema>;

// type Props = {
//   commentId?: string;
//   content: string;
//   me:
//     | {
//         __typename?: 'UsersPermissionsMe' | undefined;
//         id: string;
//         username: string;
//         avatar?: string | null | undefined;
//       }
//     | null
//     | undefined;
//   articleId: string;
//   nested?: boolean;
// };

const CommentForm = ({ commentId, me, articleId, nested }): JSX.Element => {
  const commentCreateDate = moment().toISOString();
  const commentParentID = nested ? commentId : null;
  const [addCommentResult, addComment] = useMutation(CreateComment);

  const {
    register,
    handleSubmit,
    formState,
    reset,
    formState: { errors },
  } = useForm<commentType>({
    mode: 'onChange',
    resolver: yupResolver(commentSchema),
  });

  const onSubmit = async (data: { content: string }): Promise<void> => {
    await addComment({
      variables: {
        userId: String(me?.id),
        articleId: articleId,
        content: data.content,
        date: commentCreateDate,
        parentId: commentParentID,
      },
    }).then((result) => {
      if (result.error) {
        console.error('Oh no!', result.error);
      }
      return;
    });
    reset({
      content: '',
    });
  };

  console.log('Mutation is fething', addCommentResult.fetching);
  return (
    <form className={s.commentForm} onSubmit={void handleSubmit(onSubmit)}>
      <img
        className={s.commentAvatar}
        src={String(me?.data.Img.img.data.attributes.url)}
        alt={`${String(me?.data.username)}'s Avatar`}
      />
      <div className={s.formInput}>
        <input
          type='text'
          placeholder='Leave a comment'
          {...register('content', { required: true })}
          maxLength={40}
          minLength={2}
        />
      </div>
      {errors.content && <p className={s.error}>{errors.content.message}</p>}
      <button
        className={s.formButton}
        type='submit'
        onClick={() => {
          handleSubmit(onSubmit);
        }}
        disabled={!!addCommentResult.error || !formState.isValid || (errors && addCommentResult.fetching)}>
        {addCommentResult.error ? `Error :( Please try again` : `Send`}
      </button>
    </form>
  );
};
export default CommentForm;
