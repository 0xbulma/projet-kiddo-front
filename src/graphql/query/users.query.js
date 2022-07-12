import { gql } from '@apollo/client';

export const GET_ALL = gql`
  query Query {
    users {
      _id
      created_at
      updated_at
      email
      profil_picture {
        hd
        thumbnail
      }
    }
  }
`;

export const GET_BY_ID = gql`
  query GetUserById($id: ObjectID!) {
    getUserById(_id: $id) {
      _id
      created_at
      updated_at
      rank
      gender
      token
      email
      phone
      pseudo
      first_name
      last_name
      birthdate
      profil_picture
      pinned_events {
        pinned_at
        event {
          _id
          categories {
            _id
            name
          }
          content {
            title
          }
          content_media {
            photos_url
          }
          adress {
            city
            zip_code
            adress_line
          }
          event_date {
            start
          }
          price {
            adult
            child
          }
        }
      }
      booked_events {
        booked_at
        event {
          _id
          categories {
            _id
            name
          }
          content {
            title
          }
          content_media {
            photos_url
          }
          adress {
            city
            zip_code
            adress_line
          }
          event_date {
            start
          }
          price {
            adult
            child
          }
        }
      }
      children {
        age
        gender
        name
      }
      description
      adress {
        city
        zip_code
        adress_line
      }
    }
  }
`;

export const GET_BY_EMAIL = gql`
  query GetUserById($email: Emailadress) {
    getUserByEmail(email: $email) {
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

export const CONNECT_USER = gql`
  query Query($email: Emailadress, $password: String) {
    connectUser(email: $email, password: $password) {
      _id
      email
      first_name
      last_name
    }
  }
`;

export const GET_SIGNALMENTS = gql`
  query Query {
    users {
      signalments {
        _id
        name
      }
    }
  }
`;

export const CHECK_TOKEN = gql`
  query Query {
    checkToken {
      _id
      email
    }
  }
`;

export const DISCONNECT_USER = gql`
  query Query($id: ObjectID!) {
    disconnectUser(_id: $id) {
      _id
      email
    }
  }
`;
