import React from 'react';
import { parseCookies } from 'nookies';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import moment from 'moment';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import s from '../../../../Contact/Contact.module.scss';

type CommentForm = {
  user: { avatar: string; username: string };
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
          username
          email
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
  // const [liked, setLiked] = useState({ user: undefined, liked: false });
  // const [disliked, setDisliked] = useState({ user: undefined, disliked: false });
  const userCookie = parseCookies();

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
        user: userCookie.id,
        article: article.id,
        content: data.content,
        date: commentCreateDate,
      },
    });
    reset({
      content: '',
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <img style={{ width: '1.5rem', height: '2rem' }} src={user.avatar} alt={`${user.username}'s Avatar`} />
        <input
          type='text'
          placeholder='Leave a comment'
          name='content'
          ref={register}
          maxLength={40}
          minLength={2}
          required={true}
        />
        {/*<span*/}
        {/*  onClick={() =>*/}
        {/*    // @ts-ignore*/}
        {/*    liked.liked ? setLiked({ user: undefined, liked: false }) : setLiked({ user: userCookie.id, liked: true })*/}
        {/*  }>*/}
        {/*  Liked: {liked}*/}
        {/*</span>{' '}*/}
        {/*<span*/}
        {/*  onClick={() =>*/}
        {/*    disliked.disliked*/}
        {/*      ? setDisliked({ user: undefined, disliked: false })*/}
        {/*      : // @ts-ignore*/}
        {/*        setDisliked({ user: userCookie.id, disliked: true })*/}
        {/*  }>*/}
        {/*  Disliked {disliked}*/}
        {/*</span>*/}
        {errors.content && <p className={s.error}>{errors.content.message}</p>}
        <button
          type='submit'
          onClick={(event) => {
            handleSubmit(onSubmit);
          }}
          disabled={!!mutationError || !formState.isValid || (errors && mutationLoading)}>
          Submit
        </button>
        {mutationError && <p className={s.submitError}>Error :( Please try again</p>}
      </div>
    </form>
  );
};
export default CommentForm;
