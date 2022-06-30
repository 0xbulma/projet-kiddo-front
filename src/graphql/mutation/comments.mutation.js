import { gql } from '@apollo/client';

export const CREATE_COMMENT = gql`
  mutation CreateComment($input: CommentInput) {
    createComment(input: $input) {
      parent {
        _id
      }
      child {
        _id
      }
      content {
        title
        message
      }
      sender {
        _id
        first_name
        last_name
      }
      created_at
    }
  }
`;

export const ADD_COMMENT_CHILD = gql`
  mutation Mutation($input: CommentInput) {
    modifyComment(input: $input) {
      parent {
        _id
      }
      child {
        _id
      }
      content {
        title
        message
      }
      sender {
        _id
        first_name
        last_name
      }
      created_at
    }
  }
`;
