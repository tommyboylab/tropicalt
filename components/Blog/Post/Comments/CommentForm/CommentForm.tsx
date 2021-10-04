import React from 'react';
import { useForm } from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import moment from 'moment';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import s from '../Comments.module.scss';

type CommentForm = {
  updateState: any
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

const commentSchema = yup.object({content: yup.string().min(2, `That's not good enough!`).max(40).required()});
type commentType = yup.InferType<typeof commentSchema>;

const CommentForm = ({ comment, user, articleID, nested, updateState }: CommentForm): JSX.Element => {
  const commentCreateDate = moment().toISOString();
  const commentParentID = nested ? comment?.id : null;
  const [addComment, { loading: mutationLoading, error: mutationError }] = useMutation(createComment);

  const { register, handleSubmit, formState, reset, formState:{errors} } = useForm<commentType>({
    mode: 'onChange',
    resolver: yupResolver(commentSchema)
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
    });
    reset({
      content: '',
    });
    updateState();
  };
  return (
    <form className={s.commentForm} onSubmit={handleSubmit(onSubmit)}>
      <img className={s.commentAvatar} src={user.avatar} alt={`${user.username}'s Avatar`} />
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
        disabled={!!mutationError || !formState.isValid || (errors && mutationLoading)}>
        {mutationError ? `Error :( Please try again` : `Send`}
      </button>
    </form>
  );
};
export default CommentForm;
