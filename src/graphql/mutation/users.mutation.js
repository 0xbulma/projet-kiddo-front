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

export const BOOK_EVENT = gql`
  mutation Mutation($id: ObjectID!, $eventId: ObjectID!) {
    bookEvent(_id: $id, eventId: $eventId) {
      booked_events {
        event {
          _id
          main_owner {
            email
            first_name
          }
          content {
            title
          }
        }
        booked_at
      }
    }
  }
`;

export const PIN_EVENT = gql`
  mutation Mutation($id: ObjectID!, $eventId: ObjectID!) {
    pinEvent(_id: $id, eventId: $eventId) {
      pinned_events {
        event {
          _id
          main_owner {
            email
            first_name
          }
          content {
            title
          }
        }
        pinned_at
      }
    }
  }
`;
