import { gql } from '@apollo/client';

export const CREATE_COMMENT = gql`
  mutation createComment($input: CommentInput) {
    createComment(input: $input) {
      parent {
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

export const REMOVE_COMMENT = gql`
  mutation RemoveComment($_id: ObjectID!) {
    removeComment(id: $_id) {
      _id
    }
  }
`;

export const ADD_REACTION = gql`
  mutation AddReaction($_id: ObjectID!, $input: CommentReactionInput!) {
    addReaction(id: $_id, input: $input) {
      _id
      reactions {
        type {
          name
        }
        sender {
          _id
          email
        }
      }
    }
  }
`;

export const ADD_SIGNALMENT = gql`
  mutation addSignalment($input: CommentInput) {
    modifyComment(input: $input) {
      _id
    }
  }
`;
