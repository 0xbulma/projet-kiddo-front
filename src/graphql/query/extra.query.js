import { gql } from '@apollo/client';

export const GET_CATEGORY_BY_NAME = gql`
 query getCategoryByName($name: String) {
  category(name: $name) {
    _id
    name
  }
}
`;
