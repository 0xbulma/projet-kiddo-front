import { gql } from '@apollo/client';

export const CREATE_COMMENT = gql`
  mutation CreateComment($input: CommentInput) {
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
        profil_picture {
          hd
          thumbnail
        }
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
  mutation addReaction($input: CommentInput) {
    modifyComment(input: $input) {
      _id
      reactions {
        _id
        name
      }
    }
  }
`;
