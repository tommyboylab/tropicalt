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
    id
  }
  comments(filters: { article: { Slug: { eq: $slug } }, Parent: null }) {
    data {
      id
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

  const commentData = data?.comments;

  const userId = data?.me?.id;
  {
    console.log(error);
  }

  if ((fetching && !data) || fetching) return <Load />;

  const parentCommentLength = Number(commentData?.data.length);

  const childCommentLength = Number(commentData?.data.forEach((comment) => comment?.attributes?.Children?.data.length));

  const totalCommentLength = childCommentLength + parentCommentLength;

  return (
    <div className={s.commentList}>
      <CommentHeader totalComments={totalCommentLength} />
      <CommentForm userId={String(userId)} articleId={String(articleID)} commentId={undefined} nested={false} />

      {parentCommentLength > 0 &&
        commentData?.data?.map((comment) => (
          <>
            {comment?.attributes?.Content}
            <Comment
              comment={comment?.attributes}
              commentId={comment?.id}
              key={comment?.id}
              userId={userId}
              nested={false}
              articleId={articleID}
            />
            <NestedComment child={comment?.attributes?.Children?.data} userId={userId} articleId={articleID} />
          </>
        ))}
    </div>
  );
};

export default CommentList;
