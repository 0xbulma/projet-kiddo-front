import { gql } from '@apollo/client';

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

export const MODIFY_USER_INFO = gql`
  mutation ModifyUser($id: ObjectID!, $input: UserInput!) {
    modifyUser(_id: $id, input: $input) {
      email
      pseudo
      first_name
      last_name
      birthdate
      phone
      adress {
        city
        zip_code
        adress_line
      }
      description
      children {
        name
        gender
        age
      }
    }
  }
`;
