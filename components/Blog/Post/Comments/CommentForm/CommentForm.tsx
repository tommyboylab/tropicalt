import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import moment from 'moment';
import { useMutation } from '@apollo/client';
import { gql } from '@app/gql';
import s from '../Comments.module.scss';
import { GetCommentList } from '../CommentList/CommentList';

const CreateComment = gql(`
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
`);

const commentSchema = yup.object({ content: yup.string().min(2, `That's not good enough!`).max(40).required() });
type commentType = yup.InferType<typeof commentSchema>;

type Props = {
  commentId?: string;
  content: string;
  me:
    | {
        __typename?: 'UsersPermissionsMe' | undefined;
        id: string;
        username: string;
        avatar?: string | null | undefined;
      }
    | null
    | undefined;
  articleId: string;
  nested?: boolean;
};

const CommentForm = ({ commentId, me, articleId, nested }: Props): JSX.Element => {
  const commentCreateDate = moment().toISOString();
  const commentParentID = nested ? commentId : null;
  const [addComment, { loading: mutationLoading, error: mutationError }] = useMutation(CreateComment, {
    refetchQueries: [
      GetCommentList, // DocumentNode object parsed with gql
      'Comments', // Query name
    ],
  });

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
        userID: String(me?.id),
        articleID: articleId,
        content: data.content,
        date: commentCreateDate,
        parentID: commentParentID,
      },
    });
    reset({
      content: '',
    });
    // updateState();
  };
  return (
    <form className={s.commentForm} onSubmit={void handleSubmit(onSubmit)}>
      <img className={s.commentAvatar} src={String(me?.avatar)} alt={`${String(me?.username)}'s Avatar`} />
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
