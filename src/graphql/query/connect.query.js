import { gql } from "@apollo/client";

export const CONNECT_USER = gql`
  query Query($email: EmailAddress, $password: String) {
    connectUser(email: $email, password: $password) {
      email
      password
    }
  }
`;
