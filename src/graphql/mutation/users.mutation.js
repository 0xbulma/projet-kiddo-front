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

export const BOOK_EVENT_2 = gql`
  mutation BookEvent($id: ObjectID!, $eventId: ObjectID!, $bookedAt: Date, $participant: ParticipantInput) {
    bookEvent(_id: $id, eventId: $eventId, bookedAt: $bookedAt, participant: $participant) {
      _id
      booked_events {
        event {
          _id
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

export const RECOVER_PASSWORD_REQUEST = gql`
  mutation Mutation($email: Emailadress) {
    recoverPassword(email: $email) {
      _id
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation Mutation($id: ObjectID, $email: Emailadress, $token: UUID, $password: String) {
    resetPassword(_id: $id, email: $email, token: $token, password: $password) {
      _id
    }
  }
`;
