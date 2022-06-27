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