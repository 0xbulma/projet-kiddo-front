import { gql } from '@apollo/client';

export const GET_BY_EMAIL = gql`
  query Query($email: EmailAddress) {
    getUserByEmail(email: $email) {
      _id
      created_at
      updated_at
      rank
      token
      email
      password
      first_name
      last_name
    }
  }
`;

export const MODIFY_USER = gql`
  mutation Mutation($id: ObjectID!, $input: UserInput!) {
    modifyUser(_id: $id, input: $input) {
      _id
      created_at
      updated_at
      rank
      email
      password
      first_name
      last_name
    }
  }
`;

export const FRIEND_REQUEST = gql`
  mutation Mutation($senderEmail: EmailAddress!, $targetEmail: EmailAddress!) {
    sendFriendRequest(senderEmail: $senderEmail, targetEmail: $targetEmail)
  }
`;
