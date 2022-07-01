import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation Mutation($input: UserInput) {
    createUser(input: $input) {
      email
      password
    }
  }
`;
