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
  query Query($id: ObjectID!) {
    getUserById(_id: $id) {
      _id
      created_at
      updated_at
      rank
      token
      email
      pseudo
      first_name
      last_name
      birthdate
      profil_picture {
        hd
        thumbnail
      }
    }
  }
`;

export const GET_BY_EMAIL = gql`
  query Query($email: Emailadress) {
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
      profil_picture {
        hd
        thumbnail
      }
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
      isConnected
    }
  }
`;
