import { gql } from '@apollo/client';

export const CREATE_EVENTS = gql`
  mutation Mutation($input: EventInput) {
    createEvent(input: $input) {}
  }
<<<<<<< HEAD
`;
      
=======
`;
>>>>>>> origin/develop-clean
