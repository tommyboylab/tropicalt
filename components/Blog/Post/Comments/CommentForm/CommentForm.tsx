import React from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import moment from 'moment';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import s from '../Comments.module.scss';

type CommentForm = {
  user: { id: number; avatar: string | undefined; username: string };
  article: { id: string };
  updateState: CallableFunction;
  content: string;
};

const createComment = gql`
  mutation AddComment($articleID: String!, $userID: String!, $content: String!, $date: String!) {
    createComment(
      input: {
        data: { article: $articleID, user: $userID, content: $content, date: $date, likes: $likes, dislikes: $dislikes }
      }
    ) {
      comment {
        id
        content
        user {
          id
        }
        article {
          id
        }
        date
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

const commentSchema = object().shape({
  content: string().min(2, `That's not good enough!`).max(40).required(),
});

const CommentForm = ({ user, article }: CommentForm): JSX.Element => {
  const commentCreateDate = moment().toISOString();

  const [addComment, { loading: mutationLoading, error: mutationError }] = useMutation(createComment);

  const { register, errors, handleSubmit, formState, reset } = useForm<CommentForm>({
    mode: 'onChange',
    //@ts-ignore
    validationSchema: commentSchema,
  });

  const onSubmit = async (data: {
    user: string;
    article: string;
    content: string;
    date: string;
    likes: { user: { id: string } };
    dislikes: { user: { id: string } };
  }): Promise<void> => {
    // Handle Likes and dislikes based on number gathered from endpoint
    await addComment({
      variables: {
        user: user.id,
        article: article.id,
        content: data.content,
        date: commentCreateDate,
      },
    });
    reset({
      content: '',
    });
  };
  // ${user.username}'s Avatar
  return (
    <form className={s.commentForm} onSubmit={handleSubmit(onSubmit)}>
      <img className={s.commentAvatar} src={user.avatar} alt={``} />
      <div className={s.formInput}>
        <input
          type='text'
          placeholder='Leave a comment'
          name='content'
          ref={register}
          maxLength={40}
          minLength={2}
          required={true}
        />
      </div>
      {errors.content && <p className={s.error}>{errors.content.message}</p>}
      <button
        className={s.formButton}
        type='submit'
        onClick={(event) => {
          handleSubmit(onSubmit);
        }}
        disabled={!!mutationError || !formState.isValid || (errors && mutationLoading)}>
        Send
      </button>
      {mutationError && <p className={s.submitError}>Error :( Please try again</p>}
    </form>
  );
};
export default CommentForm;
