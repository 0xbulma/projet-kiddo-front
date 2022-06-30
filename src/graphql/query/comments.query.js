import { gql } from '@apollo/client';

export const GET_BY_TARGET_ID = gql`
  query Query($type: Int!, $id: ObjectID!) {
    getByTargetId(type: $type, id: $id) {
      _id
      parent {
        _id
      }
      child {
        _id
      }
      sender {
        _id
        first_name
        last_name
      }
      content {
        message
      }
      created_at
    }
  }
`;
