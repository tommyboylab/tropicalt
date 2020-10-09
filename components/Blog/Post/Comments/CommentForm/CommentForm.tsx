import React from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import moment from 'moment';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import s from '../Comments.module.scss';

type CommentForm = {
  comment?: { id: number | undefined };
  user: { id: number; avatar: string; username: string };
  articleID: number;
  content: string;
  nested?: boolean;
};

const createComment = gql`
  mutation AddComment($articleID: ID!, $userID: ID!, $content: String!, $date: DateTime!, $parentID: ID) {
    createComment(
      input: { data: { article: $articleID, user: $userID, content: $content, date: $date, parent: $parentID } }
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
        parent {
          id
        }
      }
    }
  }
`;

const commentSchema = object().shape({
  content: string().min(2, `That's not good enough!`).max(40).required(),
});

const CommentForm = ({ comment, user, articleID, nested }: CommentForm): JSX.Element => {
  const commentCreateDate = moment().toISOString();
  const commentParentID = nested ? comment?.id : null;
  const [addComment, { loading: mutationLoading, error: mutationError }] = useMutation(createComment);

  const { register, errors, handleSubmit, formState, reset } = useForm<CommentForm>({
    mode: 'onChange',
    //@ts-ignore
    validationSchema: commentSchema,
  });

  const onSubmit = async (data: {
    userID: number;
    articleID: number;
    content: string;
    date: string;
    parentID: number;
  }): Promise<void> => {
    await addComment({
      variables: {
        userID: user.id,
        articleID: articleID,
        content: data.content,
        date: commentCreateDate,
        parentID: commentParentID,
      },
      refetchQueries: ['getCommentList'],
    });
    reset({
      content: '',
    });
  };
  return (
    <form className={s.commentForm} onSubmit={handleSubmit(onSubmit)}>
      <img className={s.commentAvatar} src={user.avatar} alt={`${user.username}'s Avatar`} />
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
        onClick={() => {
          handleSubmit(onSubmit);
        }}
        disabled={!!mutationError || !formState.isValid || (errors && mutationLoading)}>
        {mutationError ? `Error :( Please try again` : `Send`}
      </button>
    </form>
  );
};
export default CommentForm;
