import { gql } from '@apollo/client';

export const GET_CATEGORY_BY_NAME = gql`
  query getCategoryByName($name: String) {
    category(name: $name) {
      _id
      name
    }
  }
`;

export const GET_SIGNALMENTS_LIST = gql`
  query Query {
    signalments {
      name
      _id
    }
  }
`;
