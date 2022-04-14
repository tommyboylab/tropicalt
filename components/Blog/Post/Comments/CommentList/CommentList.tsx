import React from 'react';
import { gql } from '@app/gql';
import { useQuery } from 'urql';
import s from '../Comments.module.scss';
import CommentHeader from '../CommentHeader/CommentHeader';
import CommentForm from '../CommentForm/CommentForm';
import Comment from '../Comment/Comment';
import NestedComment from '../NestedComment/NestedComment';
import Load from '../../../../Other/Load/Load';

export const GetCommentList = gql(`
  query Comments($slug: String) {
me {
    username
  }
  comments(filters: { article: { Slug: { eq: "for-jack" } }, Parent: null }) {
    data {
      attributes {
        article {
          data {
            id
            attributes {
              Slug
            }
          }
        }
        Author {
          data {
            attributes {
              username
              Img {
                img {
                  data {
                    attributes {
                      url
                      hash
                    }
                  }
                }
              }
            }
          }
        }
        Content
        Children {
          data {
            attributes {
              Content
              createdAt
              updatedAt
              Likes {
                UserId
              }
              Dislikes {
                UserId
              }
              Author {
                data {
                  attributes {
                    username
                    Img {
                      img {
                        data {
                          attributes {
                            url
                            hash
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        createdAt
        updatedAt
        Likes {
          UserId
        }
        Dislikes {
          UserId
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
  const [result] = useQuery({ query: GetCommentList, variables: { slug } });
  const { data, fetching, error } = result;

  {
    console.log(error);
  }
  const { comments } = data;
  const { me } = data;

  if ((fetching && !data) || fetching) return <Load />;

  const parentCommentLength = Number(comments?.data.length);

  const nestedCommentLength = Number(comments?.data.forEach((comment) => comment?.attributes.Children?.data.length));

  // const childCommentLength = comments?.forEach((comment) => (nestedCommentLength += Number(comment?.children?.length)));
  const totalCommentLength = nestedCommentLength + parentCommentLength;

  return (
    <div className={s.commentList}>
      <CommentHeader totalComments={totalCommentLength} />
      <CommentForm me={me.data} articleId={String(articleID)} content={''} />

      {parentCommentLength > 0 &&
        comments.data?.map((comment) => (
          <>
            <Comment comment={comment.attributes} commentId={comment.id} key={comment?.id} me={me.data} />
            <NestedComment articleID={String(articleID)} child={comment?.attributes.children.data} me={me.data} />
          </>
        ))}
    </div>
  );
};

export default CommentList;
